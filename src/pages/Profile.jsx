import { Box, Button, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Placeholder for actual logout logic
    console.log("Logging out");
    navigate("/login");
  };

  return (
    <Container centerContent>
      <VStack spacing={4} mt={8}>
        <Heading as="h1" size="xl">User Profile</Heading>
        <Text>Email: user@example.com</Text>
        <Text>Payment Methods: **** **** **** 1234</Text>
        <Text>Travel History: No recent trips</Text>
        <Button colorScheme="teal" onClick={handleLogout}>Logout</Button>
      </VStack>
    </Container>
  );
};

export default Profile;