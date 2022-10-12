import { Grid, makeStyles, Typography } from "@mui/material";
import { Box, fontSize, fontWeight } from "@mui/system";
import React from "react";
import { NavBar } from "../../components";
import "./styles.css";


export const WelcomePage = () => {
  return (
    <Grid
className="titlePrimary"
container
component="main"
sx={{
  height: "100vh",
  backgroundImage:
    "url(https://img.freepik.com/vector-premium/diseno-fondo-tecnologico_23-2148503801.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}}
>
<NavBar  />

<Box
  component="main"
  sx={{ p: 3 }}
  className="animate__animated animate__bounce animate__repeat-2">
  <Typography  sx={{
      fontFamily: "Nunito",
      fontWeight: "bold",
      fontSize: "2rem",
    }}
  >
   Welcome, Are you a gamers?

  </Typography>

  <Typography  sx={{
      fontFamily: "Nunito",
      fontWeight: "bold",
      fontSize: "2rem",
    }}
  >
   Come and discover new adventures on our website

  </Typography>
 
</Box>
</Grid>
  );
};

