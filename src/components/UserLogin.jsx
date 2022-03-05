import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import CheckboxField from "./shared/CheckboxField";
import InputField from "./shared/InputField";

const UserLogin = ({
  login,
  onClose,
  showUserLogin,
  setLoginDetails,
  setShowUserLogin,
  loginDetails,
}) => {
  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
  };

  const handleCheckbox = (e) => {
    const { name, checked } = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: checked,
    });
  };

  return (
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
            });
            setShowUserLogin(false);
          }}
        />
        <ModalBody>
          <InputField
            value={loginDetails.username}
            name="username"
            handleInput={handleInput}
            mandatory={true}
          />
          <InputField
            value={loginDetails.password}
            name="password"
            handleInput={handleInput}
            mandatory={true}
          />
          <CheckboxField
            colorScheme="green"
            isChecked={loginDetails.keepLoggedIn}
            name={"keepLoggedIn"}
            onChange={handleCheckbox}
            caption={"Keep me LoggedIn (Optional)"}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => {
              setLoginDetails({
                username: "",
                password: "",
                keepLoggedIn: true,
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
  );
};

export default UserLogin;
