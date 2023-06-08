import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({
  // lineHeight: "1.2",
  borderRadius: "2.5rem",
  fontWeight: "bold",
  // fontWeight: "semibold",
  // transitionProperty: "common",
  // transitionDuration: "normal",
  // _focusVisible: {
  //   boxShadow: "outline",
  // },
  // _disabled: {
  //   opacity: 0.4,
  //   cursor: "not-allowed",
  //   boxShadow: "none",
  // },
  // _hover: {
  //   _disabled: {
  //     bg: "initial",
  //   },
  // },
});

const sizes = {
  tablePagination: defineStyle({
    boxSize: "2rem",
    borderRadius: "100%",
  }),
  sm: defineStyle({
    h: "2.6875rem", // 43px
    w: "10rem",
    py: "0.75rem", // 12px
    px: "2.25rem", // 36px
    borderRadius: "1.875rem", // 30px
  }),
  md: defineStyle({
    h: "3.125rem", // 50px
    w: "7.8rem", // 125px
    fontSize: "1rem", // 16px
    px: "4",
  }),
  lg: defineStyle({
    h: "3.125rem", // 50px
    w: "23.125rem", // 370px
    fontSize: "1rem",
  }),
};

const variantSolid = defineStyle({
  bg: "electricLime",
  color: "black",
  _hover: {
    bg: "black",
    color: "white",
  },
  _disabled: {
    bg: "fieldStroke",
    color: "black",
    _hover: {
      bg: "fieldStroke",
      color: "mediumGrey",
    },
  },
  _active: { bg: "electricLime" },
});

const variantSolidBlack = defineStyle({
  bg: "transparent",
  color: "black",
  border: "1px solid #EAE8E8",
  _hover: {
    bg: "black",
    color: "white",
    border: "none",
  },
  _disabled: {
    bg: "fieldStroke",
    color: "black",
    _hover: {
      bg: "fieldStroke",
      color: "mediumGrey",
    },
  },
  _active: { bg: "black", color: "white", borderColor: "black" },
});

const variantSolidBLime = defineStyle({
  bg: "transparent",
  color: "limeText",
  border: "1px solid #B2D504",
  _hover: {
    bg: "black",
    color: "white",
    border: "1px solid transparent",
  },
  _disabled: {
    bg: "fieldStroke",
    color: "black",
    _hover: {
      bg: "fieldStroke",
      color: "mediumGrey",
    },
  },
  _active: { bg: "black", color: "white", borderColor: "black" },
});

const variantSolidWhite = defineStyle({
  bg: "electricLime",
  color: "black",
  _hover: {
    bg: "white",
  },
  _disabled: {
    bg: "fieldStroke",
    color: "mediumGrey",
    _hover: {
      bg: "fieldStroke",
      color: "mediumGrey",
    },
  },
  _active: { bg: "white" },
  transition: "all 0.35s",
});

const variantPagination = defineStyle({
  bg: "transparent",
  border: "1px solid",
  borderColor: "fieldStroke",
  color: "black",
  transition: "all 0.35s",
  _disabled: {
    color: "fieldStroke",
    _hover: {
      color: "fieldStroke",
    },
  },
});

const variantTableEditCompany = defineStyle({
  color: "limeText",
  fontWeight: "500",
  transition: "color 0.3s",
  _hover: {
    color: "black",
  },
  _disabled: {
    color: "black",
    _hover: {
      color: "black",
    },
  },
});

const variants = {
  solid: variantSolid,
  solidBlack: variantSolidBlack,
  solidWhite: variantSolidWhite,
  solidLime: variantSolidBLime,
  tablePagination: variantPagination,
  tableEditCompany: variantTableEditCompany,
};

export const Button = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "solid",
    size: "md",
  },
});
