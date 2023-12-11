"use client";

import {
  Box,
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
  useClipboard,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const SliderWithClipboardComp = () => {
  const [sliderValue, setSliderValue] = useState(50);
  const { onCopy, setValue, hasCopied } = useClipboard("");

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "1.5rem",
  };

  useEffect(() => {
    setValue(String(`${sliderValue}%`));
  }, [sliderValue, setValue]);

  return (
    <Box mt="5rem">
      <Text fontSize="2rem">3. Slider With Clipboard Component</Text>
      <Box py="2rem">
        <Slider
          aria-label="slider-comp"
          onChange={(val) => setSliderValue(val)}
        >
          <SliderMark value={0} {...labelStyles}>
            0%
          </SliderMark>
          <SliderMark value={50} {...labelStyles}>
            50%
          </SliderMark>
          <SliderMark value={100} {...labelStyles}>
            100%
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack bg="brand.green100" />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Flex mt="4rem" columnGap="1rem">
          <Text fontWeight="700">Selected Value: {sliderValue}%</Text>
          <Button
            fontSize="1.5rem"
            bg="brand.green100"
            color="brand.white100"
            onClick={onCopy}
          >
            {hasCopied ? "Copied!" : "Copy"}
          </Button>
        </Flex>
        <Editable placeholder="Paste here" mt=".5rem">
          <EditablePreview
            border="1px solid"
            borderColor="brand.green100"
            borderRadius="1rem"
            p=".5rem 1rem"
            w="10%"
          />
          <EditableInput _focus={{ boxShadow: "none" }} />
        </Editable>
      </Box>
    </Box>
  );
};
