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
} from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";
import UserLogin from "./UserLogin";
import UserRegister from "./UserRegister";
import axios from "axios";

const Links = ["DashBoard", "My_Investments", "Mutual_Funds", "Help"];

export default function Navbar({ userLoggedIn, setUserLoggedIn }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  //! Modal Showing
  //? Login Modal
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [showUserRegister, setShowUserRegister] = useState(false);

  //! Data
  //? Login Details
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
    keepLoggedIn: true,
  });

  //! Function
  //? Login Function
  const login = () => {
    if (loginDetails.username !== "" && loginDetails.password !== "") {
      axios
        .get("http://localhost:8000/api/getInvestors", loginDetails)
        .then(function (response) {
          // console.log(response);
        })
        .catch(function (error) {
          // console.log(error);
        })
        .finally(() => {
          setUserLoggedIn(true);
          setShowUserLogin(false);
        });
    }
  };

  return (
    <>
      <div style={{ marginBottom: "70px" }}>
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
                  <>
                    <Button onClick={() => setShowUserLogin(true)}>
                      Login
                    </Button>

                    <Button onClick={() => setShowUserRegister(true)}>
                      Register
                    </Button>
                  </>
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
                  <RouterLink
                    to={link.toLowerCase()}
                    onClick={onClose}
                    key={link}
                  >
                    {link}
                  </RouterLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>

        {showUserLogin ? (
          <UserLogin
            login={login}
            setUserLoggedIn={setUserLoggedIn}
            onClose={onClose}
            showUserLogin={showUserLogin}
            setLoginDetails={setLoginDetails}
            setShowUserLogin={setShowUserLogin}
            loginDetails={loginDetails}
          />
        ) : null}

        {showUserRegister ? (
          <UserRegister
            onClose={onClose}
            showUserRegister={showUserRegister}
            setShowUserRegister={setShowUserRegister}
          />
        ) : null}
      </div>
    </>
  );
}
