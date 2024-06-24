import { useState, useCallback } from "react";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, VStack, Text, Select } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { GoogleMap, LoadScript, Marker, TrafficLayer } from "@react-google-maps/api";

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

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
        <Box mt={8} width="100%">
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
              onClick={handleMapClick}
            >
              {startMarker && <Marker position={startMarker} />}
              {endMarker && <Marker position={endMarker} />}
              <TrafficLayer />
            </GoogleMap>
          </LoadScript>
        </Box>
      </VStack>
    </Container>
  );
};

export default TripPlanner;