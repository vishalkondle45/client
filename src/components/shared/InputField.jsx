import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import React from "react";

const InputField = ({ value, handleInput, name, mandatory }) => {
  return (
    <div>
      <InputGroup size={"sm"} marginBottom={"10px"}>
        <InputLeftAddon
          children={
            mandatory ? (
              value !== "" ? (
                <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
              ) : (
                <p>
                  {name.charAt(0).toUpperCase() + name.slice(1)}{" "}
                  <span style={{ color: "red" }}>*</span>
                </p>
              )
            ) : null
          }
        />
        <Input
          type="text"
          placeholder={name}
          name={name}
          value={value}
          onChange={handleInput}
        />
      </InputGroup>
    </div>
  );
};

export default InputField;
