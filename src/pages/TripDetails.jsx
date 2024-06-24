import { Box, Button, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const TripDetails = () => {
  const navigate = useNavigate();

  const handleBookTrip = () => {
    // Placeholder for actual booking logic
    console.log("Booking trip");
    navigate("/payment");
  };

  return (
    <Container centerContent>
      <VStack spacing={4} mt={8}>
        <Heading as="h1" size="xl">Trip Details</Heading>
        <Text>Start: Example Start</Text>
        <Text>Destination: Example Destination</Text>
        <Text>Mode: Bus</Text>
        <Text>Estimated Time: 30 minutes</Text>
        <Text>Cost: $5.00</Text>
        <Button colorScheme="teal" onClick={handleBookTrip}>Book Trip</Button>
      </VStack>
    </Container>
  );
};

export default TripDetails;