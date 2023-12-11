"use client";

import { customTheme } from "@/styles/themes";
import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/globals.css";
import { Refine } from "@refinedev/core";
import dataProvider from "@refinedev/simple-rest";
import { RefineWithChakraUIComp } from "@/components/RefineWithChakraUI";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const API_URL = "https://api.fake-rest.refine.dev";
  
  return (
    <ChakraProvider theme={customTheme}>
      <Refine
        dataProvider={dataProvider(API_URL)}
        resources={[{ name: "posts", list: RefineWithChakraUIComp }]}
      >
        {children}
      </Refine>
    </ChakraProvider>
  );
};
