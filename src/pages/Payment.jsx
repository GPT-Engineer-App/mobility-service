import { Box, Button, Container, FormControl, FormLabel, Heading, Input, VStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const navigate = useNavigate();

  const handlePayment = () => {
    // Placeholder for actual payment logic
    console.log("Processing payment with", cardNumber, expiry, cvv);
    navigate("/confirmation");
  };

  return (
    <Container centerContent>
      <VStack spacing={4} mt={8}>
        <Heading as="h1" size="xl">Payment</Heading>
        <FormControl id="cardNumber">
          <FormLabel>Card Number</FormLabel>
          <Input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
        </FormControl>
        <FormControl id="expiry">
          <FormLabel>Expiry Date</FormLabel>
          <Input type="text" value={expiry} onChange={(e) => setExpiry(e.target.value)} />
        </FormControl>
        <FormControl id="cvv">
          <FormLabel>CVV</FormLabel>
          <Input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} />
        </FormControl>
        <Button colorScheme="teal" onClick={handlePayment}>Pay</Button>
      </VStack>
    </Container>
  );
};

export default Payment;