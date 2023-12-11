"use client";

import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export const SliderComp = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "1.5rem",
  };

  return (
    <Box>
      <Text fontSize="2rem">1. Slider Component</Text>
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
        <Text mt="4rem" fontWeight="700">
          Selected Value: {sliderValue}%
        </Text>
      </Box>
    </Box>
  );
};
