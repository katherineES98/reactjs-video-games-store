import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const themeApp = createTheme({
  palette: {
    primary: {
      main: "#262254",
      white: "#ffffff",
    },
    secondary: {
      main: "#543884",
      linear: "#2b273c",
      tranparent: "transparent",
    },
    tertiary: {
      main: "#2c323a",
    },
    error: {
      main: red.A400,
    },
  },
});
