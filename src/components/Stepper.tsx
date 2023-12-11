"use client";

import {
  Box,
  Button,
  Flex,
  Stack,
  Step,
  StepIcon,
  StepIndicator,
  StepSeparator,
  StepStatus,
  Stepper,
  Text,
  useSteps,
} from "@chakra-ui/react";
import { useState } from "react";

const ContactInfo = () => {
  return (
    <Box py="2rem">
      <Text>I'm Samuel Ogunleye.</Text>
      <Text>
        Frontend Engineer, as well as a Technical Writer. A big fan of
        open-source software.
      </Text>
    </Box>
  );
};

const Stacks = () => {
  return (
    <Box>
      <Text py="2rem">
        I love JavaScript, TypeScript, and Next.js – all aspects of frontend
        development!
      </Text>
    </Box>
  );
};

const Final = () => {
  return (
    <Box>
      <Text py="2rem">Any other information?</Text>
    </Box>
  );
};

const steps = [
  { title: "Contact", description: ContactInfo },
  { title: "Stacks", description: Stack },
  { title: "Final", description: Final },
];

export const StepperComp = () => {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  const [currentStep, setCurrentStep] = useState<number>(activeStep);

  const handleNextClick = () => {
    setCurrentStep((prevStep) => (prevStep < 3 ? prevStep + 1 : prevStep));
  };

  const handlePreviousClick = () => {
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  return (
    <Box mt="5rem">
      <Text fontSize="2rem">2. Stepper Component</Text>
      <Stack py="2rem">
        <Stepper size="lg" colorScheme="green" index={currentStep} gap="2rem">
          {steps.map((step, idx) => {
            return (
              <Step key={idx}>
                {step.title}
                <StepIndicator>
                  <StepStatus complete={<StepIcon />} />
                </StepIndicator>
                <StepSeparator />
              </Step>
            );
          })}
        </Stepper>
        <Box>
          {currentStep === 1 ? (
            <ContactInfo />
          ) : currentStep === 2 ? (
            <Stacks />
          ) : (
            <Final />
          )}
        </Box>

        <Flex columnGap="2rem">
          <Button
            onClick={handlePreviousClick}
            bg="brand.green100"
            color="brand.white100"
            fontSize="1.3rem"
            py="1.8rem"
            cursor={currentStep === 1 ? "not-allowed" : "pointer"}
          >
            Previous
          </Button>

          <Button
            onClick={handleNextClick}
            bg="brand.green100"
            color="brand.white100"
            fontSize="1.3rem"
            py="1.8rem"
            cursor={currentStep === 3 ? "not-allowed" : "pointer"}
          >
            Next
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
};
