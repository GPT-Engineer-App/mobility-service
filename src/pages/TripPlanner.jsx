import { useState, useCallback } from "react";
const apiKey = "YOUR_HARDCODED_API_KEY";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, VStack, Text, Select, SimpleGrid } from "@chakra-ui/react";
import { LoadScript } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";

const TripPlanner = () => {
  const [start, setStart] = useState("");
  const [destination, setDestination] = useState("");
  const [mode, setMode] = useState("bus");
  const [startMarker, setStartMarker] = useState(null);
  const [endMarker, setEndMarker] = useState(null);
  const navigate = useNavigate();

  const handleMapClick = useCallback((event) => {
    if (!startMarker) {
      setStartMarker({ lat: event.latLng.lat(), lng: event.latLng.lng() });
    } else if (!endMarker) {
      setEndMarker({ lat: event.latLng.lat(), lng: event.latLng.lng() });
    }
  }, [startMarker, endMarker]);

  const handlePlanTrip = () => {
    // Placeholder for actual trip planning logic
    console.log("Planning trip from", start, "to", destination, "by", mode);
    navigate("/trip-details");
  };

  console.log("Google Maps API Key:", apiKey);

  return (
    <Container centerContent>
      <VStack spacing={4} mt={16}>
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
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mt={8} width="100%">
          <iframe
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/directions?origin=place_id:ChIJf8Oj-FRtVkYRZiz0UCkLLqQ&destination=place_id:ChIJHX3kplsSVkYRQHjkQfP-AAQ&key=${apiKey}`}
          ></iframe>
          <iframe
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/directions?origin=place_id:ChIJf8Oj-FRtVkYRZiz0UCkLLqQ&destination=place_id:ChIJHX3kplsSVkYRQHjkQfP-AAQ&key=${apiKey}`}
          ></iframe>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default TripPlanner;