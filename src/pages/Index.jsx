import React from "react";
import { Box, Button, Center, Container, Divider, Heading, Input, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { FaGoogle, FaApple, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container p={4} maxW="md" centerContent>
      <Center p={4} flexDir="column">
        <Box p={4} borderRadius="md" bg={useColorModeValue("gray.100", "gray.700")}>
          <VStack spacing={4}>
            <Heading>Login</Heading>
            <Input placeholder="Email" size="md" />
            <Button leftIcon={<FaEnvelope />} w="full" colorScheme="blue">
              Continue with Email
            </Button>
            <Divider my={4} />
            <Button leftIcon={<FaGoogle />} w="full" colorScheme="red">
              Continue with Google
            </Button>
            <Button leftIcon={<FaApple />} w="full" colorScheme="gray">
              Continue with Apple
            </Button>
          </VStack>
        </Box>
      </Center>
    </Container>
  );
};

export default Index;
