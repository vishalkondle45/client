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
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaSave } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Invest = ({ fundId }) => {
  const [fund, setFund] = useState({});
  useEffect(() => {
    axios
      .post("http://localhost:8000/api/getMutualFund", { fundId })
      .then((res) => {
        if (res.status === 200) {
          setFund(res.data[0]);
        }
        console.log(res.data[0]);
      })
      .catch((error) => console.log(error))
      .finally(() => {});
  }, []);

  return (
    <Modal onClose={() => {}} size="lg" isOpen={() => {}}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{"Invest"}</ModalHeader>
        <ModalCloseButton backgroundColor={"#e53e3e"} color={"white"} />
        <ModalBody>{}</ModalBody>
        <ModalFooter>
          <Button
            onClick={() => {}}
            style={{ marginRight: "15px" }}
            colorScheme={"red"}
          >
            <ImCross style={{ marginRight: "5px" }} /> Close
          </Button>
          <Button onClick={() => {}} colorScheme={"green"}>
            <FaSave style={{ marginRight: "5px" }} /> Save Changes
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Invest;
