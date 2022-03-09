import React, { useEffect, useRef, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";
import axios from "axios";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import InputField from "../shared/InputField";
import CheckboxField from "../shared/CheckboxField";

const Investors = () => {
  // Delete Alert Dialog
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const closeDelete = () => setIsDeleteOpen(false);
  const cancelRef = useRef();
  const [deleteId, setDeleteId] = useState(0);

  const [investors, setInvestors] = useState([
    {
      id: "",
      name: "",
      username: "",
      mobile: "",
      email: "",
      kycStatus: false,
      panNumber: "",
      aadharNumber: "",
      investments: [],
      totalInvestment: 0,
      address: "",
      pincode: "",
      status: false,
      joinedOn: "",
    },
  ]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getInvestors")
      .then((res) => {
        if (res.status === 200) {
          setInvestors(res.data);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {});
  }, []);

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editId, setEditId] = useState(0);

  const getData = async () => {
    await axios
      .get("http://localhost:8000/api/getInvestors")
      .then((res) => {
        if (res.status === 200) setInvestors(res.data);
      })
      .catch((error) => console.log(error))
      .finally(() => {});
  };

  const handleCheckbox = (e) => {
    e.preventDefault();
    const { name, checked } = e.target;
    setCurrentEdit({
      ...currentEdit,
      [name]: checked,
    });
  };

  const [currentEdit, setCurrentEdit] = useState({});
  const handleCurrentEdit = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCurrentEdit({
      ...currentEdit,
      [name]: value,
    });
  };

  const closeEdit = () => {
    setIsEditOpen(false);
    setEditId(0);
  };

  const edit = async (id) => {
    setIsEditOpen(true);
    setEditId(id);
    await axios
      .get(`http://localhost:8000/api/getInvestor/${id}`)
      .then((res) => {
        if (res.status === 200) {
          setCurrentEdit(res.data);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {});
  };

  const updateInvestor = async () => {
    await axios
      .put(
        `http://localhost:8000/api/updateInvestor/${currentEdit.id}`,
        currentEdit
      )
      .then((res) => {
        if (res.status === 200) getData();
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsEditOpen(false);
        setEditId(0);
      });
  };

  const deleteInvestor = async (id) => {
    await axios
      .delete(`http://localhost:8000/api/deleteInvestor/${id}`)
      .then((res) => {
        if (res.status === 200) getData();
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsEditOpen(false);
        setEditId(0);
      });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <Table
        size="sm"
        variant="striped"
        colorScheme="whatsapp"
        style={{
          border: "1px solid",
          width: "3000px",
        }}
      >
        <Thead>
          <Tr
            style={{
              backgroundColor: "#ebe4dc",
              color: "black",
            }}
          >
            <Th colSpan={"2"}>Actions</Th>
            <Th>ID</Th>
            <Th>NAME</Th>
            <Th>USERNAME</Th>
            <Th>MOBILE</Th>
            <Th>EMAIL</Th>
            <Th>KYC</Th>
            <Th>PAN NO.</Th>
            <Th>AADHAR NO.</Th>
            <Th>NOI</Th>
            <Th>TI</Th>
            <Th>ADDRESS</Th>
            <Th>PINCODE</Th>
            <Th>STATUS</Th>
            <Th>JOINED ON</Th>
          </Tr>
        </Thead>
        <Tbody>
          {investors.map((investor, index) => {
            return (
              <Tr key={index}>
                <Td>
                  <EditIcon onClick={() => edit(investor["id"])} />
                </Td>
                <Td>
                  <DeleteIcon
                    onClick={() => {
                      setDeleteId(investor["id"]);
                      setIsDeleteOpen(true);
                    }}
                  />
                </Td>
                {Object.keys(investor).map((col, index) => {
                  if (col === "kycStatus" || col === "status") {
                    return (
                      <Td key={index}>
                        <Badge
                          variant="solid"
                          colorScheme={investor[col] ? "green" : "red"}
                        >
                          {investor[col] ? "Yes" : "No"}
                        </Badge>
                      </Td>
                    );
                  }
                  if (col === "joinedOn") {
                    return <Td key={index}>{investor[col].slice(0, 25)}</Td>;
                  }
                  return <Td key={index}>{investor[col]}</Td>;
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      {isEditOpen && editId !== 0 ? (
        <Modal isOpen={isEditOpen} onClose={closeEdit}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update Investor</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {Object.keys(currentEdit).map((col, index) => {
                if (col === "kycStatus" || col === "status") {
                  return (
                    <CheckboxField
                      key={index}
                      colorScheme="green"
                      isChecked={currentEdit[col]}
                      name={col}
                      caption={col}
                      onChange={handleCheckbox}
                    />
                  );
                }
                return (
                  <InputField
                    key={index}
                    readOnly={col === "id" ? true : false}
                    value={currentEdit[col]}
                    name={col}
                    handleInput={handleCurrentEdit}
                    mandatory={true}
                  />
                );
              })}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="red" mr={3} onClick={closeEdit}>
                Close
              </Button>
              <Button colorScheme={"green"} onClick={updateInvestor}>
                Update
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      ) : null}

      {isDeleteOpen && deleteId ? (
        <AlertDialog
          isOpen={isDeleteOpen}
          leastDestructiveRef={cancelRef}
          onClose={closeDelete}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete
              </AlertDialogHeader>

              <AlertDialogBody>
                Do you want to delete Investor ID : <b>{deleteId}</b> ?
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={closeDelete}>
                  Cancel
                </Button>
                <Button
                  colorScheme="red"
                  onClick={() => {
                    deleteInvestor(deleteId);
                    closeDelete();
                  }}
                  ml={3}
                >
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      ) : null}
    </div>
  );
};

export default Investors;
