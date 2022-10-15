import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const themeApp = createTheme({
  palette: {
    primary: {
      main: "#262254",
      white: "#ffffff",
      linear: "#4df0e0"
    },
    secondary: {
      main: "#48337b", 
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
