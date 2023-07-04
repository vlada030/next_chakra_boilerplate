"use client";

import { Container, Center, Text, Box, Heading, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";

const Home = () => {
  const [inputs, setInputs] = useState(null);

  const updateFormState = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

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
          <Box my="2rem" textAlign="center">
            <Text>
              Env variables used on the client-side needs to start with
              NEXT_PUBLIC:
            </Text>
            <Text>
              {process.env.NEXT_PUBLIC_ANALYTICS_ID}
              {/* {process.env.DB_PASS} */}
            </Text>
          </Box>

          <Flex direction="column" gap="2rem" mb="5rem">
            <Input
              id="firstName"
              name="firstName"
              onChange={updateFormState}
              placeholder="Enter first name"
              // style={{
              //   border: "1px solid black",
              // }}
            />

            <Input
              id="lastName"
              name="lastName"
              onChange={updateFormState}
              placeholder="Enter last name"
            />

            <Input
              id="email"
              name="email"
              onChange={updateFormState}
              placeholder="Enter email"
            />

            <Input
              id="messsage"
              name="messsage"
              onChange={updateFormState}
              placeholder="Enter message"
            />
          </Flex>
          <Box>
            <Text>Input values:</Text>
            <ul>
              {inputs !== null &&
                Object.keys(inputs).map((key) => {
                  return (
                    <li key={key}>
                      {key} : {inputs[key]}
                    </li>
                  );
                })}
            </ul>
          </Box>
        </Box>
      </Center>
    </Container>
  );
};

export default Home;
