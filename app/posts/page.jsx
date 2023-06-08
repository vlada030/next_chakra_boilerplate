"use client";

import { Flex, Box, Heading } from "@chakra-ui/react";

const PostsPage = () => {
  return (
    <Flex alignItems="center" justifyContent="center" mt="5rem">
      <Box maxW="65rem">
        <Heading as="h1" color="limeText" textTransform="uppercase">
          Posts Page
        </Heading>
      </Box>
    </Flex>
  );
};

export default PostsPage;
