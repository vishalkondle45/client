import {
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { FaSave } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import InputField from "../shared/InputField";

const AddFund = ({ onClose, isOpen, funds, fund, handleChange, getFunds }) => {
  return (
    <Modal onClose={onClose} size="lg" isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{funds.mutualFundName}</ModalHeader>
        <ModalCloseButton backgroundColor={"#e53e3e"} color={"white"} />
        <ModalBody>
          {Object.keys(fund).map((f, index) => {
            return (
              <div key={index}>
                <InputField
                  value={fund[f]}
                  name={f}
                  handleInput={handleChange}
                  mandatory={true}
                  readOnly={f === "id" || f === "lastUpdated" ? true : false}
                />
                <br />
              </div>
            );
          })}
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={onClose}
            style={{ marginRight: "15px" }}
            colorScheme={"red"}
          >
            <ImCross style={{ marginRight: "5px" }} /> Close
          </Button>
          <Button
            onClick={async () => {
              if (!fund.fundName || !fund.schemeName || !fund.nav) {
                return null;
              }
              fund.lastUpdated = Date();
              console.log("before axios call");
              await axios
                .post("http://localhost:8000/api/newMutualFund", fund)
                .then((res) => {
                  if (res.status === 200) getFunds();
                })
                .catch((error) => console.log(error))
                .finally(() => {
                  onClose();
                });
            }}
            colorScheme={"green"}
          >
            <FaSave style={{ marginRight: "5px" }} /> Save Changes
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddFund;
