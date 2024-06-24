import { Box, Flex, Button, useColorMode, useColorModeValue, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");

  return (
    <Box bg={bg} px={4} py={2} boxShadow="md">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={8} alignItems="center">
          <Box fontWeight="bold" fontSize="xl">
            MaaS
          </Box>
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            <Link to="/">Home</Link>
            <Link to="/trip-planner">Trip Planner</Link>
            <Link to="/profile">Profile</Link>
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <Button onClick={toggleColorMode} mr={4}>
            Toggle {useColorModeValue("Dark", "Light")}
          </Button>
          <Link to="/login">
            <Button colorScheme="teal" variant="solid">
              Login
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;