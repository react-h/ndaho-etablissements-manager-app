import {
    HStack,
    Stack,
    Stat,
    StatHelpText,
    StatLabel
   } from "@chakra-ui/react";

   import React from "react";
    
   export default function Stats(props) {
    return (
      <Stat mt={5}>
        <Stack
          p={4}
          borderWidth="3px"
          borderRadius="md"
          direction="column"
          align="flex-start"
          backgroundColor="green"
        >
          <HStack>
            <StatLabel>Name: {props.Firstname}</StatLabel>
            <StatLabel>{props.Lastname}</StatLabel>
          </HStack>
          <StatHelpText>Password: {props.Password}</StatHelpText>
        </Stack>
      </Stat>
    );
   }