import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, VStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Placeholder for actual sign-up logic
    console.log("Signing up with", email, password);
    navigate("/profile");
  };

  return (
    <Container centerContent>
      <VStack spacing={4} mt={8}>
        <Heading as="h1" size="xl">Sign Up</Heading>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Button colorScheme="teal" onClick={handleSignUp}>Sign Up</Button>
        <Text>Already have an account? <Button variant="link" onClick={() => navigate("/login")}>Login</Button></Text>
      </VStack>
    </Container>
  );
};

export default SignUp;