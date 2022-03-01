import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Icon,
  Button,
  Center,
  Input,
  InputLeftAddon,
  InputGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { FaEdit, FaSave } from "react-icons/fa";
import { ImCross } from "react-icons/im";
// import investments from "../../investments";

const MutualFunds = () => {
  const [funds, setFunds] = useState([
    {
      id: "01",
      mutualFundName: "SBI",
      schemeName: "Focused Equity",
      nav: "123.45",
      lastUpdated: Date(),
    },
    {
      id: "02",
      mutualFundName: "KOTAK",
      schemeName: "Focused Equity",
      nav: "987.65",
      lastUpdated: Date(),
    },
  ]);
  const [fund, setFund] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const tableHeadings = Object.keys(funds[0]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFund({ ...fund, [name]: value });
  };
  const addFund = () => {
    const id = parseInt(funds[funds.length - 1].id) + 1;
    setFund({
      id: id,
      mutualFundName: "",
      schemeName: "",
      nav: "",
      lastUpdated: Date(),
    });
    onOpen(fund);
  };
  return (
    <div style={{ overflowY: "auto", margin: "10px" }}>
      <InputGroup>
        <InputLeftAddon children="Fund ID" />
        <Input placeholder="Search" />
      </InputGroup>
      <Button onClick={addFund}>Add</Button>
      <Table variant="striped" id="funds" size="sm">
        <TableCaption placement="top">Funds</TableCaption>
        <Thead>
          <Tr>
            {tableHeadings.map((heading) => (
              <Th key={heading}>
                <Center>{heading}</Center>
              </Th>
            ))}
            <Th>
              <Center>Edit</Center>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {funds.map((fund, index) => {
            return (
              <Tr key={index}>
                <Td>
                  <Center>{fund.id}</Center>
                </Td>
                <Td>
                  <Center>{fund.mutualFundName}</Center>
                </Td>
                <Td>
                  <Center>{fund.schemeName}</Center>
                </Td>
                <Td>
                  <Center>{fund.nav}</Center>
                </Td>
                <Td>
                  <Center>{fund.lastUpdated}</Center>
                </Td>
                <Td>
                  <Center>
                    <Icon
                      onClick={() => {
                        setFund(fund);
                        onOpen(fund);
                      }}
                      color={"#000"}
                      as={FaEdit}
                    />
                  </Center>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <Modal onClose={onClose} size="full" isOpen={isOpen}>
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
                      placeholder="phone number"
                      name={f}
                      disabled={
                        f === "id" || f === "lastUpdated" ? true : false
                      }
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
              onClick={onClose}
              style={{ marginRight: "15px" }}
              colorScheme={"red"}
            >
              <ImCross style={{ marginRight: "5px" }} /> Close
            </Button>
            <Button
              onClick={() => {
                const update = funds.filter((f) => f.id !== fund.id);
                if (!fund.mutualFundName || !fund.schemeName || !fund.nav) {
                  return null;
                }
                fund.lastUpdated = Date();
                setFunds([...update, fund]);
                onClose();
              }}
              colorScheme={"green"}
            >
              <FaSave style={{ marginRight: "5px" }} /> Save Changes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default MutualFunds;
