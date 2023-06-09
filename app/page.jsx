"use client";

import { Container, Center, Text, Box, Heading } from "@chakra-ui/react";

const Home = () => {
  return (
    <Container>
      <Center>
        <Box maxW="65rem" minH="100vh" my="5rem">
          <Heading
            as="h2"
            color="limeText"
            textTransform="uppercase"
            textStyle="headingExtraBold"
          >
            Welcome to the home page
          </Heading>
          <Text mt="2rem" textAlign="center">
            This is an example of Chakra's Text element.
          </Text>
        </Box>
      </Center>
    </Container>
  );
};

export default Home;
