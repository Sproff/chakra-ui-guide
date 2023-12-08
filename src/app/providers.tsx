"use client";

import { customTheme } from "@/styles/themes";
import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/globals.css";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>;
};
