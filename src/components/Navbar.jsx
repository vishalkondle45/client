import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  InputGroup,
  InputLeftAddon,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Links = ["DashBoard", "My_Investements", "Mutual_Funds", "Help"];

export default function Navbar({ userLoggedIn, setUserLoggedIn }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showUserLogin, setShowUserLogin] = useState(false);

  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
    keepLoggedIn: true,
    isGiven: {
      username: true,
      password: true,
    },
  });

  const handleInput = (e) => {
    e.preventDefault();
    const { name } = e.target;
    const value = name === "keepLoggedIn" ? e.target.checked : e.target.value;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
      isGiven: { ...loginDetails.isGiven, [name]: true },
    });
  };

  const login = () => {
    setLoginDetails({
      ...loginDetails,
      isGiven: { username: true, password: true },
    });
    if (loginDetails.username.length === 0) {
      setLoginDetails({
        ...loginDetails,
        isGiven: { ...loginDetails.isGiven, username: false },
      });
      return null;
    }
    if (loginDetails.password.length === 0) {
      setLoginDetails({
        ...loginDetails,
        isGiven: { ...loginDetails.isGiven, password: false },
      });
      return null;
    }
    if (loginDetails.isGiven.username && loginDetails.isGiven.password) {
      setUserLoggedIn(true);
      setShowUserLogin(false);
    }
  };

  return (
    <>
      <div style={{ marginBottom: "4%" }}>
        <Box
          bg={useColorModeValue("gray.100", "gray.900")}
          px={4}
          sx={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "100%",
            zIndex: "1000",
          }}
        >
          <Flex h={16} alignItems="center" justifyContent="space-between">
            {userLoggedIn ? (
              <IconButton
                size="md"
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label="Open Menu"
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
              />
            ) : null}
            <HStack spacing={8} alignItems={"center"}>
              <Box>
                <b>Varun Financial Services</b>
              </Box>
              {userLoggedIn ? (
                <>
                  <HStack
                    as={"nav"}
                    spacing={4}
                    display={{ base: "none", md: "flex" }}
                  >
                    {Links.map((link) => (
                      <RouterLink to={`${link.toLowerCase()}`} key={link}>
                        {link}
                      </RouterLink>
                    ))}
                  </HStack>
                </>
              ) : null}
            </HStack>
            <Flex alignItems={"center"}>
              <Menu>
                {userLoggedIn ? (
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar
                      size={"sm"}
                      src={
                        "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                      }
                    />
                  </MenuButton>
                ) : (
                  <Button onClick={() => setShowUserLogin(true)}>Login</Button>
                )}
                <MenuList>
                  <MenuItem>My Profile</MenuItem>
                  <MenuItem>Link 2</MenuItem>
                  <MenuDivider />
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                {Links.map((link) => (
                  <RouterLink to={link.toLowerCase()} key={link}>
                    {link}
                  </RouterLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
        <Modal onClose={onClose} size="xl" isOpen={showUserLogin}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Login</ModalHeader>
            <ModalCloseButton
              onClick={() => {
                setLoginDetails({
                  username: "",
                  password: "",
                  keepLoggedIn: true,
                  isGiven: {
                    username: true,
                    password: true,
                  },
                });
                setShowUserLogin(false);
              }}
            />
            <ModalBody>
              <InputGroup>
                <InputLeftAddon children={"username*".toUpperCase()} />
                <Input
                  type="text"
                  placeholder="username"
                  name="username"
                  value={loginDetails.username}
                  onChange={handleInput}
                />
              </InputGroup>
              {loginDetails.isGiven.username ? null : (
                <p style={{ color: "red" }}>Username Mandatory</p>
              )}
              <br />
              <InputGroup>
                <InputLeftAddon children={"password*".toUpperCase()} />
                <Input
                  type="text"
                  placeholder="password"
                  name={"password"}
                  value={loginDetails.password}
                  onChange={handleInput}
                />
              </InputGroup>
              {loginDetails.isGiven.password ? null : (
                <p style={{ color: "red" }}>Password Mandatory</p>
              )}
              <br />
              <Checkbox
                colorScheme="green"
                isChecked={loginDetails.keepLoggedIn}
                name={"keepLoggedIn"}
                onChange={handleInput}
              >
                Keep me LoggedIn (Optional)
              </Checkbox>
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={() => {
                  setLoginDetails({
                    username: "",
                    password: "",
                    keepLoggedIn: true,
                    isGiven: {
                      username: true,
                      password: true,
                    },
                  });
                  setShowUserLogin(false);
                }}
                colorScheme={"red"}
                sx={{ mr: "10px" }}
              >
                Cancel
              </Button>
              <Button colorScheme={"green"} onClick={login}>
                Login
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}
