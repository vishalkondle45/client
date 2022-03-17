import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import InputField from "./shared/InputField";
import axios from "axios";
import Chance from "chance";
let chance = new Chance();

const UserRegister = ({ onClose, showUserRegister, setShowUserRegister }) => {
  const [randomId, setRandomId] = useState(
    chance.integer({ min: 100000, max: 999999 })
  );
  const toast = useToast();
  let stop = false;
  const [registerDetails, setRegisterDetails] = useState({
    id: randomId,
    name: "",
    username: "",
    password: "",
    mobile: "",
    email: "",
    keyStatus: false,
    panNumber: "",
    aadharNumber: "",
    address: "",
    pincode: "",
    status: false,
  });

  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setRegisterDetails({
      ...registerDetails,
      [name]: value,
    });
  };

  const register = async () => {
    // console.log(registerDetails);
    const {
      name,
      username,
      password,
      mobile,
      email,
      keyStatus,
      panNumber,
      aadharNumber,
      address,
      pincode,
      status,
    } = registerDetails;
    if (
      name === "" ||
      username === "" ||
      password === "" ||
      mobile === "" ||
      email === "" ||
      keyStatus === "" ||
      panNumber === "" ||
      aadharNumber === "" ||
      address === "" ||
      pincode === "" ||
      status === ""
    ) {
      return toast({
        title: "Fill All the Mandatory Fields",
        status: "error",
        position: "top",
        isClosable: true,
        duration: 2000,
      });
    }
    await axios
      .get(
        `http://localhost:8000/api/checkUsername/${registerDetails.username}`
      )
      .then((res) => {
        if (res.data) {
          toast({
            title: "Username Already Registered",
            status: "error",
            position: "top",
            isClosable: true,
            duration: 2000,
          });
          setRegisterDetails({
            ...registerDetails,
            username: "",
          });
          stop = true;
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {});
    if (panNumber.length !== 10) {
      return toast({
        title: "Enter Valid Pan Number",
        status: "error",
        position: "top",
        isClosable: true,
        duration: 2000,
      });
    }
    if (pincode.length !== 6) {
      return toast({
        title: "Enter Valid Pan Number",
        status: "error",
        position: "top",
        isClosable: true,
        duration: 2000,
      });
    }
    if (aadharNumber.length !== 12) {
      return toast({
        title: "Enter Valid Aadhar Number",
        status: "error",
        position: "top",
        isClosable: true,
        duration: 2000,
      });
    }
    if (stop) {
      return null;
    }
    axios
      .post("http://localhost:8000/api/newInvestor", registerDetails)
      .then((res) => console.log("res", res))
      .catch((error) => console.log(error))
      .finally(() => {
        setRegisterDetails({
          id: chance.integer({ min: 100000, max: 999999 }),
          name: "",
          username: "",
          password: "",
          mobile: "",
          email: "",
          keyStatus: false,
          panNumber: "",
          aadharNumber: "",
          address: "",
          pincode: "",
          status: false,
        });
        setRandomId(chance.integer({ min: 100000, max: 999999 }));
        setShowUserRegister(false);
      });
  };

  return (
    <>
      <Modal onClose={onClose} size="md" isOpen={showUserRegister}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Register</ModalHeader>
          <ModalCloseButton
            onClick={() => {
              setRandomId(chance.integer({ min: 100000, max: 999999 }));
              setRegisterDetails({
                id: chance.integer({ min: 100000, max: 999999 }),
                name: "",
                username: "",
                password: "",
                mobile: "",
                email: "",
                keyStatus: false,
                panNumber: "",
                aadharNumber: "",
                address: "",
                pincode: "",
                status: false,
              });
              setShowUserRegister(false);
            }}
          />
          <ModalBody>
            <p>
              <span style={{ color: "red" }}>*</span> Indicates Required Fields.
            </p>
            <InputField
              value={registerDetails.name}
              name="name"
              handleInput={handleInput}
              mandatory={true}
            />

            <InputField
              value={registerDetails.username}
              name="username"
              handleInput={handleInput}
              mandatory={true}
            />

            <InputField
              value={registerDetails.password}
              name="password"
              handleInput={handleInput}
              mandatory={true}
            />

            <InputField
              value={registerDetails.mobile}
              name="mobile"
              handleInput={handleInput}
              mandatory={true}
            />

            <InputField
              value={registerDetails.email}
              name="email"
              handleInput={handleInput}
              mandatory={true}
            />

            <InputField
              value={registerDetails.panNumber}
              name="panNumber"
              handleInput={handleInput}
              mandatory={true}
            />

            <InputField
              value={registerDetails.aadharNumber}
              name="aadharNumber"
              handleInput={handleInput}
              mandatory={true}
            />

            <InputField
              value={registerDetails.address}
              name="address"
              handleInput={handleInput}
              mandatory={true}
            />
            <InputField
              value={registerDetails.pincode}
              name="pincode"
              handleInput={handleInput}
              mandatory={true}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                setRandomId(chance.integer({ min: 100000, max: 999999 }));
                setRegisterDetails({
                  id: chance.integer({ min: 100000, max: 999999 }),
                  name: "",
                  username: "",
                  password: "",
                  mobile: "",
                  email: "",
                  keyStatus: false,
                  panNumber: "",
                  aadharNumber: "",
                  address: "",
                  pincode: "",
                  status: false,
                });
                setShowUserRegister(false);
              }}
              colorScheme={"red"}
              sx={{ mr: "10px" }}
            >
              Cancel
            </Button>
            <Button colorScheme={"green"} onClick={register}>
              Register
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserRegister;
