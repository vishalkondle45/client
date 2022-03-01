import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import Employee from "./Employee";

const Employees = () => {
  return (
    <>
      <SimpleGrid columns={4} minChildWidth="350px">
        <Employee
          name={"Vijay Ankam"}
          mobile={"9226389292"}
          email="avk.vijay1@gmail.com"
          role={"CEO & Founder"}
        />
        <Employee
          name={"Laxman Chandankeri"}
          mobile={"9xxxxxxxxx"}
          email="avk.vijay1@gmail.com"
          role={"Consultant"}
        />
        <Employee
          name={"Rahul Pamu"}
          mobile={"8xxxxxxxxx"}
          email="rahulpamu@gmail.com"
          role={"Office Boy"}
        />
        <Employee
          name={"Laxman Mittha"}
          mobile={"8668441966"}
          email="laxmanmitha@gmail.com"
          role={"Office Boy"}
        />
      </SimpleGrid>
    </>
  );
};

export default Employees;
