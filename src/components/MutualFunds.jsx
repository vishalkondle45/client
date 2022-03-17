import React, { useEffect, useState } from "react";
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
  Box,
} from "@chakra-ui/react";
import { FaRupeeSign } from "react-icons/fa";
import axios from "axios";
import Invest from "./Invest";

const MutualFunds = () => {
  const [invest, setInvest] = useState(0);
  const [openInvest, setOpenInvest] = useState(false);

  const [funds, setFunds] = useState([]);

  const getFunds = () => {
    axios
      .get("http://localhost:8000/api/getMutualFunds")
      .then((res) => {
        if (res.status === 200) {
          setFunds(res.data);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {});
  };
  useEffect(() => {
    getFunds();
  }, []);

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
                <Td>
                  <Center>
                    <Button
                      leftIcon={<FaRupeeSign />}
                      colorScheme="green"
                      variant="solid"
                      size={"xs"}
                      onClick={() => {
                        setOpenInvest(true);
                        setInvest(fund.id);
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
      {openInvest ? <Invest fundId={invest} /> : null}
    </Box>
  );
};

export default MutualFunds;
