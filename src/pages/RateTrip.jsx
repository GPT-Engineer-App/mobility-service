import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, VStack, Text, Textarea } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const RateTrip = () => {
  const [rating, setRating] = useState("");
  const [feedback, setFeedback] = useState("");
  const navigate = useNavigate();

  const handleRateTrip = () => {
    // Placeholder for actual rating logic
    console.log("Rating trip with", rating, feedback);
    navigate("/profile");
  };

  return (
    <Container centerContent>
      <VStack spacing={4} mt={8}>
        <Heading as="h1" size="xl">Rate Trip</Heading>
        <FormControl id="rating">
          <FormLabel>Rating (1-5)</FormLabel>
          <Input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
        </FormControl>
        <FormControl id="feedback">
          <FormLabel>Feedback</FormLabel>
          <Textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} />
        </FormControl>
        <Button colorScheme="teal" onClick={handleRateTrip}>Submit</Button>
      </VStack>
    </Container>
  );
};

export default RateTrip;