import { Box, Button, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();

  const handleRateTrip = () => {
    // Placeholder for actual rating logic
    console.log("Rating trip");
    navigate("/rate-trip");
  };

  return (
    <Container centerContent>
      <VStack spacing={4} mt={8}>
        <Heading as="h1" size="xl">Confirmation</Heading>
        <Text>Your trip has been booked successfully!</Text>
        <Button colorScheme="teal" onClick={handleRateTrip}>Rate Trip</Button>
      </VStack>
    </Container>
  );
};

export default Confirmation;