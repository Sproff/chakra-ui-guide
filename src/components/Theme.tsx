"use client";

import { Box, Text, useTheme } from "@chakra-ui/react";

export const ThemeComp = () => {
  const theme = useTheme();
  console.log("theme", theme);

  const customStyle = {
    background: theme.colors.black,
    color: theme.colors.brand.white100,
    fontSize: theme.fontSizes.lg,
  };

  return (
    <Box mt="5rem">
      <Text fontSize="2rem">5. Theme Component</Text>
      <Box
        py="2rem"
        bg="brand.green100"
        color="brand.white100"
        p="1rem"
        rounded="lg"
        style={customStyle}
      >
        <Text>This text is styled using the color from the theme.</Text>
        <Text py="2rem">This text is styled using the color from the theme.</Text>
        <Text>This text is styled using the color from the theme.</Text>
      </Box>
    </Box>
  );
};
