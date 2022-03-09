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
  Badge,
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
  FormControl,
  FormLabel,
  ModalFooter,
  useDisclosure,
  Switch,
} from "@chakra-ui/react";
import { FaEdit, FaSave } from "react-icons/fa";
// import investments from "../../investments";

const investments = [
  {
    investment_id: "01",
    investor_id: "01",
    folio_no: "123132",
    mutual_fund: "SBI",
    scheme: "Magnum Fund",
    type: "SIP",
    cheque_rtgs: "543210",
    amount: "50000",
    current: "51222",
    date_time: "01/03/2021",
    remarks: "No Remark",
    active: true,
  },
];

const Investments = () => {
  const [investment, setInvestment] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const tableHeadings = Object.keys(investments[0]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvestment({ ...investment, [name]: value });
  };
  return (
    <div style={{ overflowY: "auto", margin: "10px" }}>
      <InputGroup>
        <InputLeftAddon children="Invester ID" />
        <Input placeholder="Search" />
      </InputGroup>
      <Table variant="striped" id="investments" size="sm">
        <TableCaption placement="top">Investments</TableCaption>
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
          {investments.map((investment, index) => {
            return (
              <Tr key={index}>
                <Td>
                  <Center>{investment.investment_id}</Center>
                </Td>
                <Td>
                  <Center>{investment.investor_id}</Center>
                </Td>
                <Td>
                  <Center>{investment.folio_no}</Center>
                </Td>
                <Td>
                  <Center>{investment.mutual_fund}</Center>
                </Td>
                <Td>
                  <Center>{investment.scheme}</Center>
                </Td>
                <Td>
                  <Center>{investment.type}</Center>
                </Td>
                <Td>
                  <Center>{investment.cheque_rtgs}</Center>
                </Td>
                <Td>
                  <Center>{investment.amount}</Center>
                </Td>
                <Td>
                  <Center>
                    <Badge colorScheme="green" variant={"solid"}>
                      {investment.current}
                    </Badge>
                  </Center>
                </Td>
                <Td>
                  <Center>{investment.date_time}</Center>
                </Td>
                <Td>
                  <Center>{investment.remarks}</Center>
                </Td>
                <Td>
                  <Center>
                    <Badge
                      colorScheme={investment.active ? "green" : "red"}
                      variant={"solid"}
                    >
                      Active
                    </Badge>
                  </Center>
                </Td>
                <Td>
                  <Center>
                    <Button
                      onClick={() => {
                        setInvestment(investment);
                        onOpen(investment);
                      }}
                      colorScheme={"blue"}
                      size={"xs"}
                    >
                      <Icon as={FaEdit} />
                    </Button>
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
          <ModalHeader>{investment.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {Object.keys(investment).map((s) => (
              <>
                <FormControl key={s}>
                  <FormLabel htmlFor="email">{s.toUpperCase()}</FormLabel>
                  {s === "active" ? (
                    <Switch colorScheme="red" defaultChecked />
                  ) : (
                    <Input
                      id="email"
                      value={investment[s]}
                      name={s}
                      onChange={handleChange}
                      type="text"
                      disabled={s === "investment_id" || s === "investor_id"}
                    />
                  )}
                </FormControl>
              </>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} colorScheme={"green"}>
              <FaSave style={{ marginRight: "5px" }} /> Save Changes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Investments;
