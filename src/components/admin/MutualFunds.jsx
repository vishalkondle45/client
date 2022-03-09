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
  Center,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { FaEdit, FaPlusCircle, FaTrash } from "react-icons/fa";
import axios from "axios";
import AddFund from "./AddFund";
import EditFund from "./EditFund";
var Chance = require("chance");
var chance = new Chance();

const MutualFunds = () => {
  const [fund, setFund] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [funds, setFunds] = useState([
    {
      id: "",
      fundName: "",
      schemeName: "",
      nav: "",
      lastUpdated: "",
    },
  ]);
  const getFunds = () => {
    axios
      .get("http://localhost:8000/api/getMutualFunds")
      .then((res) => {
        if (res.status === 200) {
          setFunds(res.data);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setFund({}));
  };
  useEffect(() => {
    getFunds();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFund({ ...fund, [name]: value });
  };
  const addFund = () => {
    const id = chance.guid();
    setFund({
      id: id,
      fundName: "",
      schemeName: "",
      nav: "",
      lastUpdated: Date(),
    });
    onOpen(fund);
  };
  const closeEditOpen = () => {
    setIsEditOpen(false);
  };
  const deleteFund = async (fund) => {
    // console.log("Befor Axios");
    await axios
      .post("http://localhost:8000/api/deleteMutualFund", fund)
      .then((res) => {
        if (res.status === 200) getFunds();
      })
      .catch((error) => console.log(error))
      .finally(() => setFund({}));
  };
  return (
    <div style={{ overflowY: "auto", margin: "10px" }}>
      {/* <InputGroup>
        <InputLeftAddon children="Fund ID" />
        <Input placeholder="Search" />
      </InputGroup> */}
      <Button
        onClick={addFund}
        colorScheme={"green"}
        isFullWidth={true}
        leftIcon={<FaPlusCircle />}
      >
        New Fund
      </Button>
      <Table variant="striped" id="funds" size="sm">
        <TableCaption placement="top">Funds</TableCaption>
        <Thead>
          <Tr>
            <Th>
              <Center>ID</Center>
            </Th>
            <Th>
              <Center>Fund Name</Center>
            </Th>
            <Th>
              <Center>Scheme Name</Center>
            </Th>
            <Th>
              <Center>NAV VALUE</Center>
            </Th>
            <Th>
              <Center>Last Updated</Center>
            </Th>
            <Th>
              <Center>Actions</Center>
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
                  <Center>{fund.fundName}</Center>
                </Td>
                <Td>
                  <Center>{fund.schemeName}</Center>
                </Td>
                <Td>
                  <Center>{fund.nav}</Center>
                </Td>
                <Td>
                  <Center>{fund.lastUpdated.slice(0, 25)}</Center>
                </Td>
                <Td colSpan={"2"}>
                  <Center>
                    <Icon
                      onClick={() => {
                        setFund(fund);
                        setIsEditOpen(true);
                      }}
                      color={"#000"}
                      as={FaEdit}
                      sx={{ marginRight: "10px" }}
                    />
                    <Icon
                      onClick={() => {
                        setFund(fund);
                        console.log(fund);
                        deleteFund(fund);
                      }}
                      color={"#000"}
                      as={FaTrash}
                    />
                  </Center>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      {isOpen && (
        <AddFund
          onClose={onClose}
          isOpen={isOpen}
          funds={funds}
          fund={fund}
          handleChange={handleChange}
          getFunds={getFunds}
        />
      )}
      {isEditOpen && (
        <EditFund
          isEditOpen={isEditOpen}
          closeEditOpen={closeEditOpen}
          funds={funds}
          fund={fund}
          handleChange={handleChange}
          getFunds={getFunds}
        />
      )}
    </div>
  );
};

export default MutualFunds;
