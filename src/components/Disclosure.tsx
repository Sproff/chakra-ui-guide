"use client";

import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

export const DisclosureComp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box mt="5rem">
      <Text fontSize="2rem">4. Disclosure Component</Text>
      <Button
        onClick={onOpen}
        fontSize="1.3rem"
        bg="brand.green100"
        color="brand.white100"
        p="1.8rem 2rem"
        mt=".5rem"
      >
      View Profile
      </Button>
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth=".2rem"
            borderBottomColor="brand.green100"
            fontSize="1.8rem"
          >
            Basic Information
          </DrawerHeader>
          <DrawerBody py="2rem">
            <Text>Name: Samuel</Text>
            <Text py="1rem">Title: Frontend Engineer</Text>
            <Text>Language: JavaScript, TypeScript</Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
