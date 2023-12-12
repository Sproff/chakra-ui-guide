import { DarkModeToggleComp } from "@/components/DarkModeToggle";
import { DisclosureComp } from "@/components/Disclosure";
import { SliderComp } from "@/components/Slider";
import { SliderWithClipboardComp } from "@/components/SliderWithClipboard";
import { StepperComp } from "@/components/Stepper";
import { ThemeComp } from "@/components/Theme";
import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box bg="brand.white200" p="3rem">
      <SliderComp />
      <StepperComp />
      <SliderWithClipboardComp />
      <DisclosureComp />
      <ThemeComp />
      <DarkModeToggleComp />
    </Box>
  );
};
export default Home;
