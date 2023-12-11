"use client";

import {
  Box,
  Button,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

export const DarkModeToggleComp = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgValue = useColorModeValue("brand.green100", "brand.dark100");
  const colorValue = useColorModeValue("brand.dark100", "brand.white100");

  return (
    <Box mt="5rem">
      <Text p="2rem" bg={bgValue} fontSize="2rem" color={colorValue}>
        6. Dark Mode Toggle Component
      </Text>
      <Box p="2rem" bg={bgValue}>
        <Text color={colorValue}>Change my color please :)</Text>
      </Box>
      <Button
        mt="1rem"
        fontSize="1.5rem"
        py="1.8rem"
        bg={bgValue}
        color={colorValue}
        onClick={toggleColorMode}
      >
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </Box>
  );
};
