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
  Avatar,
  Button,
  Badge,
  Center,
  InputGroup,
  InputLeftAddon,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  FormControl,
  FormLabel,
  Switch,
} from "@chakra-ui/react";
import { FaEdit, FaSave } from "react-icons/fa";
import { ImCross } from "react-icons/im";
// import investors from "../../investors";

const investors = [
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
  {
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
    id: "01",
    name: "vishal",
    username: "vishalkondle",
    password: "Vammavg@78",
    pan: "ABCDE1234Z",
    mobileNumber: "9876543210",
    email: "a@gmail.com",
    createdOn: "DD/MM/YYYY HH:MM:SS",
    active: true,
  },
];

const Investors = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selected, setSelected] = useState({});
  const tableHeadings = Object.keys(investors[0]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelected({ ...selected, [name]: value });
  };
  return (
    <div style={{ overflowY: "auto", margin: "10px" }}>
      <InputGroup>
        <InputLeftAddon children="Name" />
        <Input placeholder="Search" />
      </InputGroup>
      <Table variant="striped" size="sm">
        <TableCaption placement="top">Investors</TableCaption>
        <Thead>
          <Tr>
            {tableHeadings.map((heading) => (
              <Th key={heading}>
                <Center>{heading}</Center>
              </Th>
            ))}
            <Th key={"Edit"}>
              <Center>{"Edit"}</Center>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {investors.map((a) => (
            <Tr key={a.id}>
              <Td>
                <Center>
                  <Avatar
                    name={a.photo}
                    size={"sm"}
                    src="https://bit.ly/dan-abramov"
                  />
                </Center>
              </Td>
              <Td>
                <Center>{a.id}</Center>
              </Td>
              <Td>
                <Center>{a.name}</Center>
              </Td>
              <Td>
                <Center>{a.username}</Center>
              </Td>
              <Td>
                <Center>{a.password}</Center>
              </Td>
              <Td>
                <Center>{a.pan}</Center>
              </Td>
              <Td>
                <Center>{a.mobileNumber}</Center>
              </Td>
              <Td>
                <Center>{a.email}</Center>
              </Td>
              <Td>
                <Center>{a.createdOn}</Center>
              </Td>
              <Td>
                <Center>
                  {a.active ? (
                    <Badge colorScheme="green" variant={"solid"}>
                      Active
                    </Badge>
                  ) : (
                    <Badge colorScheme="red" variant={"solid"}>
                      Disabled
                    </Badge>
                  )}
                </Center>
              </Td>
              <Td>
                <Center>
                  <Button
                    onClick={() => {
                      setSelected(a);
                      onOpen(a);
                    }}
                    colorScheme={"blue"}
                    size={"xs"}
                  >
                    <Icon as={FaEdit} />
                  </Button>
                </Center>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selected.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {Object.keys(selected).map((s) => (
              <>
                <FormControl key={s}>
                  <FormLabel htmlFor="email">{s.toUpperCase()}</FormLabel>
                  {s === "active" ? (
                    <Switch colorScheme="red" defaultChecked={selected[s]} />
                  ) : (
                    <Input
                      id="email"
                      value={selected[s]}
                      name={s}
                      onChange={handleChange}
                      type="text"
                    />
                  )}
                </FormControl>
              </>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={onClose}
              style={{ marginRight: "15px" }}
              colorScheme={"red"}
            >
              <ImCross style={{ marginRight: "5px" }} /> Close
            </Button>
            <Button onClick={onClose} colorScheme={"green"}>
              <FaSave style={{ marginRight: "5px" }} /> Save Changes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Investors;
