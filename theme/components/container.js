import { defineStyleConfig } from "@chakra-ui/react";

export const Container = defineStyleConfig({
  baseStyle: {
    // "maxW" should be used, instead of "maxWidth", so we can override it with props inside the code
    maxW: "100%",
  },
  variants: {
    body: {
      flex: "1 0 auto",
      padding: 0,
      display: "flex",
    },
    adminBody: {},
  },
});
