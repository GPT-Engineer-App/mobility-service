import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, VStack, Text, Select } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const TripPlanner = () => {
  const [start, setStart] = useState("");
  const [destination, setDestination] = useState("");
  const [mode, setMode] = useState("bus");
  const navigate = useNavigate();

  const handlePlanTrip = () => {
    // Placeholder for actual trip planning logic
    console.log("Planning trip from", start, "to", destination, "by", mode);
    navigate("/trip-details");
  };

  return (
    <Container centerContent>
      <VStack spacing={4} mt={8}>
        <Heading as="h1" size="xl">Trip Planner</Heading>
        <FormControl id="start">
          <FormLabel>Starting Point</FormLabel>
          <Input type="text" value={start} onChange={(e) => setStart(e.target.value)} />
        </FormControl>
        <FormControl id="destination">
          <FormLabel>Destination</FormLabel>
          <Input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
        </FormControl>
        <FormControl id="mode">
          <FormLabel>Mode of Transport</FormLabel>
          <Select value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="bus">Bus</option>
            <option value="bicycle">Bicycle</option>
            <option value="car">Car</option>
          </Select>
        </FormControl>
        <Button colorScheme="teal" onClick={handlePlanTrip}>Plan Trip</Button>
      </VStack>
    </Container>
  );
};

export default TripPlanner;