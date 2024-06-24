import { Container, Text, VStack, Heading, Box, Button, Image } from "@chakra-ui/react";
import { FaBus, FaBicycle, FaCar } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Mobility as a Service</Heading>
        <Text fontSize="lg" textAlign="center">Your one-stop solution for all urban mobility needs. Choose your preferred mode of transport and get going!</Text>
        <Box display="flex" justifyContent="space-around" width="100%" mt={8}>
          <Button leftIcon={<FaBus />} colorScheme="teal" variant="solid" size="lg">
            Bus
          </Button>
          <Button leftIcon={<FaBicycle />} colorScheme="teal" variant="solid" size="lg">
            Bicycle
          </Button>
          <Button leftIcon={<FaCar />} colorScheme="teal" variant="solid" size="lg">
            Car
          </Button>
        </Box>
        <Box mt={8}>
          <Image src="/images/mobility.jpg" alt="Mobility" borderRadius="md" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;