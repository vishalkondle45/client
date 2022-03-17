import React, { useEffect, useState } from "react";
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
import { FaEdit, FaPlusCircle, FaSave } from "react-icons/fa";
import axios from "axios";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
var Chance = require("chance");
var chance = new Chance();
// import investments from "../../investments";

const Investments = () => {
  const [investment, setInvestment] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [investments, setInvestments] = useState([
    {
      id: chance.integer({ min: 100000, max: 999999 }),
      investorId: "",
      mutualFundId: "",
      investedAmount: 0,
      navUnits: 0,
      navValueAtPurchase: 0,
      currentAmount: 0,
      agentCode: "",
      status: true,
      investedOn: Date(),
    },
  ]);

  const tableHeadings = Object.keys(investments[0]);

  const getInvestments = async () => {
    await axios
      .get("http://localhost:8000/api/getInvestments")
      .then((res) => {
        if (res.status === 200) {
          setInvestments(res.data);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setInvestment({}));
  };

  useEffect(() => {
    getInvestments();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvestment({ ...investment, [name]: value });
  };
  const newInvestment = () => {
    setInvestment({
      id: chance.integer({ min: 100000, max: 999999 }),
      investorId: "",
      mutualFundId: "",
      investedAmount: 0,
      navUnits: 0,
      navValueAtPurchase: 0,
      currentAmount: 0,
      agentCode: "",
      status: true,
      investedOn: Date(),
    });
    onOpen(investment);
  };

  console.log("investments", investments);
  return (
    <div style={{ overflowY: "auto", margin: "10px" }}>
      <Button
        onClick={newInvestment}
        colorScheme={"green"}
        isFullWidth={true}
        leftIcon={<FaPlusCircle />}
      >
        New Fund
      </Button>
      <Table variant="striped" id="investments" size="sm">
        <TableCaption placement="top">Investments</TableCaption>
        <Thead>
          <Tr>
            <Th colSpan={"2"}>
              <Center>Actions</Center>
            </Th>
            {tableHeadings.map((heading) => (
              <Th key={heading}>
                <Center>{heading}</Center>
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {investments.map((investment, index) => {
            return (
              <Tr key={index}>
                <Td>
                  <EditIcon
                    onClick={() => {
                      // edit(investor["id"])
                    }}
                  />
                </Td>
                <Td>
                  <DeleteIcon
                    onClick={() => {
                      // setDeleteId(investor["id"]);
                      // setIsDeleteOpen(true);
                    }}
                  />
                </Td>
                {Object.keys(investment).map((col, index) => {
                  return (
                    <Td key={index}>
                      <Center>{investment[col]}</Center>
                    </Td>
                  );
                })}
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
                      disabled={s === "id" || s === "investorId"}
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
