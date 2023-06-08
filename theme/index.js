// theme/index.js
import { extendTheme } from "@chakra-ui/react";

// Global style overrides
import styles from "./styles";

import { colors, typography } from "./foundations";

// Component style overrides
import {
  Button,
  Container,
} from "./components";

const fonts = typography.fonts;
const textStyles = typography.textStyles;

const overrides = {
  styles,
  // Other foundational style overrides go here
  colors,
  fonts,
  textStyles,
  components: {
    Button,
    Container,
    // Other components go here
  },
};

export default extendTheme(overrides);
