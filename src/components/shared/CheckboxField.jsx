import { Checkbox } from "@chakra-ui/react";
import React from "react";

const CheckboxField = ({ name, isChecked, onChange, caption }) => {
  return (
    <>
      {caption} {"   "}
      <Checkbox
        colorScheme="green"
        isChecked={isChecked}
        name={name}
        onChange={onChange}
        mt={"5px"}
      ></Checkbox>
    </>
  );
};

export default CheckboxField;
