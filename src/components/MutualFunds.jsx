import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
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
  Stack,
  Box,
} from "@chakra-ui/react";
import { FaCalendarDay, FaRupeeSign, FaSave } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Radio, RadioGroup } from "@chakra-ui/react";
import DateTimePicker from "react-datetime-picker";
import format from "date-format";

const MutualFunds = () => {
  const [date, onChange] = useState(new Date());

  const formatDate = (date) => format.asString("dd-MM-yyyy hh:mm:ss", date);

  const [funds, setFunds] = useState([
    {
      id: "01",
      mutualFundName: "SBI",
      schemeName: "Focused Equity",
      nav: "123.45",
      lastUpdated: formatDate(new Date()),
    },
    {
      id: "02",
      mutualFundName: "KOTAK",
      schemeName: "Focused Equity",
      nav: "987.65",
      lastUpdated: formatDate(new Date()),
    },
  ]);
  const [fund, setFund] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const tableHeadings = Object.keys(funds[0]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFund({ ...fund, [name]: value });
  };

  // Mode Of Application
  const [mode, setMode] = useState("1");

  return (
    <Box m={2} overflowY={"auto"}>
      <InputGroup>
        <InputLeftAddon children="Search" />
        <Input placeholder="Search" />
      </InputGroup>
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
              <Center>Invest</Center>
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
                    <Button
                      leftIcon={<FaRupeeSign />}
                      colorScheme="green"
                      variant="solid"
                      size={"xs"}
                      onClick={() => {
                        setFund(fund);
                        onOpen(fund);
                      }}
                    >
                      Invest
                    </Button>
                  </Center>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <Modal onClose={onClose} size="md" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{funds.mutualFundName}</ModalHeader>
          <ModalCloseButton backgroundColor={"#e53e3e"} color={"white"} />
          <ModalBody>
            {Object.keys(fund).map((f, index) => {
              return (
                <div key={index}>
                  <InputGroup size={"sm"}>
                    <InputLeftAddon children={f.toUpperCase()} />
                    <Input
                      type="tel"
                      placeholder="phone number"
                      name={f}
                      disabled={true}
                      value={fund[f]}
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <br />
                </div>
              );
            })}
            <RadioGroup onChange={setMode} value={mode}>
              <b>Mode of Application</b>
              <Stack direction="row">
                <Radio value="1">Pick At Home</Radio>
                <Radio value="2">Visit a Branch</Radio>
              </Stack>
            </RadioGroup>
            <br />
            <b>Select Time</b>
            <br />
            <DateTimePicker
              onChange={onChange}
              value={date}
              calendarIcon={<FaCalendarDay color="#3182ce" />}
              format={"dd-MM-yyyy hh:mm:ss a"}
              minDate={new Date()}
              clearIcon={null}
            />
            {/* <Datetime value={new Date().setHours(new Date().getHours() + 2)} /> */}
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
    </Box>
  );
};

export default MutualFunds;
