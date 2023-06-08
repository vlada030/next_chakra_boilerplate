const typography = {
  // letterSpacings: {
  //   tighter: "-0.05em",
  //   tight: "-0.025em",
  //   normal: "0",
  //   wide: "0.025em",
  //   wider: "0.05em",
  //   widest: "0.1em",
  // },

  // lineHeights: {
  //   normal: "normal",
  //   none: 1,
  //   shorter: 1.25,
  //   short: 1.375,
  //   base: 1.5,
  //   tall: 1.625,
  //   taller: "2",
  //   "3": ".75rem",
  //   "4": "1rem",
  //   "5": "1.25rem",
  //   "6": "1.5rem",
  //   "7": "1.75rem",
  //   "8": "2rem",
  //   "9": "2.25rem",
  //   "10": "2.5rem",
  // },

  // fontWeights: {
  //   hairline: 100,
  //   thin: 200,
  //   light: 300,
  //   normal: 400,
  //   medium: 500,
  //   semibold: 600,
  //   bold: 700,
  //   extrabold: 800,
  //   black: 900,
  // },

  fonts: {
    heading: "Plus Jakarta Sans Bold, sans-serif",
    body: "Inter Regular, sans-serif",
  },

  textStyles: {
    headingRegular: {
      fontFamily: "Plus Jakarta Sans Regular, sans-serif",
      fontWeight: "400",
      fontSize: "1.125rem", // 18px
      lineHeight: "1.413rem",
    },
    headingMedium: {
      fontFamily: "Plus Jakarta Sans Medium, sans-serif",
      fontWeight: "500",
    },
    headingExtraBold: {
      fontFamily: "Plus Jakarta Sans Extra Bold, sans-serif",
      lineHeight: "2.3125rem", // 38px
      letterSpacing: "0.095rem",
      fontWeight: "800",
    },
    headingBold: {
      fontFamily: "Plus Jakarta Sans Bold, sans-serif",
      fontWeight: "700",
    },
    subHeadingText: {
      fontFamily: "Plus Jakarta Sans Semi Bold, sans-serif",
      fontWeight: "600",
      lineHeight: "1.7325rem", // 27.72px
    },

    // used on FormLabel, Link,
    bodySemiBold: {
      fontFamily: "Inter SemiBold, sans-serif",
      fontSize: "1rem", //16px
      lineHeight: "1.2rem", // 19.4px
      fontWeight: "600", // must put inline on FormLabel in order to override their intrinsic fontWeight='500'
    },
    bodyBold: {
      fontFamily: "Inter Bold, sans-serif",
      fontWeight: "700", // must put inline on FormLabel in order to override their intrinsic fontWeight='500'
    },
    bodyMedium: {
      fontFamily: "Inter Medium, sans-serif",
      fontWeight: "500", //
    },
    bodyRegular: {
      fontFamily: "Inter Regular, sans-serif",
      fontWeight: "400", //
    },
  },

  // fontSizes: {
  //   "3xs": "0.45rem",
  //   "2xs": "0.625rem",
  //   xs: "0.75rem",
  //   sm: "0.875rem",
  //   md: "1rem",
  //   lg: "1.125rem",
  //   xl: "1.25rem",
  //   "2xl": "1.5rem",
  //   "3xl": "1.875rem",
  //   "4xl": "2.25rem",
  //   "5xl": "3rem",
  //   "6xl": "3.75rem",
  //   "7xl": "4.5rem",
  //   "8xl": "6rem",
  //   "9xl": "8rem",
  // },
};

export default typography;
