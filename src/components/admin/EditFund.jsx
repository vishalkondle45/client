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

const AddFund = ({
  isEditOpen,
  closeEditOpen,
  funds,
  fund,
  handleChange,
  getFunds,
}) => {
  return (
    <Modal onClose={closeEditOpen} size="lg" isOpen={isEditOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{funds.mutualFundName}</ModalHeader>
        <ModalCloseButton backgroundColor={"#e53e3e"} color={"white"} />
        <ModalBody>
          {Object.keys(fund).map((f, index) => {
            return (
              <div key={index}>
                <InputGroup>
                  <InputLeftAddon children={f.toUpperCase()} />
                  <Input
                    type="tel"
                    name={f}
                    disabled={f === "id" || f === "lastUpdated" ? true : false}
                    value={fund[f]}
                    onChange={handleChange}
                  />
                </InputGroup>
                <br />
              </div>
            );
          })}
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={closeEditOpen}
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
                .put("http://localhost:8000/api/editMutualFund", fund)
                .then((res) => {
                  getFunds();
                })
                .catch((error) => console.log(error))
                .finally(() => {
                  closeEditOpen();
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
