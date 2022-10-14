import { Grid, makeStyles, Typography } from "@mui/material";
import { Box, fontSize, fontWeight } from "@mui/system";
import React from "react";
import { NavBar } from "../../components";
import  imgWelcome  from "../../../assets/imgWelcome.svg";

import "./styles.css";




export const WelcomePage = () => {
  document.body.style = 'background: #48337b;';
  return (
  <>
   

<div className="body" >
<Grid   container component="main" >

<NavBar />
<Grid item xs={12} sm={6} >
  <Box
    component="main"
    className="animate__animated animate__bounce animate__repeat-2"
  >
    <Typography
      className="text-welc"
      sx={{
        fontFamily: "Barlow,sans-serif",
        fontWeight: "bold",

        color: "white",
      }}
    >
      Welcome
      <br />
    </Typography>
    <Typography
      className="text-game"
      sx={{
        fontFamily: "Barlow,sans-serif",
        fontWeight: "bold",
        fontSize: "3rem",
        color: "white",
        marginLeft: "40px",
      }}
    >
      Are you a gamers?
    </Typography>
  </Box>

  <Box>
    <Typography
      className="text-adventure"
      sx={{
        fontSize: " 25px",
        marginLeft: "20px",
        color: "white",
      }}
    >
      Come and discover new adventures on our website
    </Typography>
  </Box>
</Grid>
<Grid item xs={12} sm={6}>
  <img className="img-games" src={imgWelcome}
  />
</Grid>
 <Box>

 </Box>
</Grid>
        <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
        </ul>
</div >
  </>
  






    

  );
};




{/* <div className="body">

<Grid   container component="main" >

    <NavBar />
    <Grid item xs={12} sm={6} >
      <Box
        component="main"
        className="animate__animated animate__bounce animate__repeat-2"
      >
        <Typography
          className="text-welc"
          sx={{
            fontFamily: "Barlow,sans-serif",
            fontWeight: "bold",

            color: "white",
          }}
        >
          Welcome
          <br />
        </Typography>
        <Typography
          className="text-game"
          sx={{
            fontFamily: "Barlow,sans-serif",
            fontWeight: "bold",
            fontSize: "3rem",
            color: "white",
            marginLeft: "40px",
          }}
        >
          Are you a gamers?
        </Typography>
      </Box>

      <Box>
        <Typography
          className="text-adventure"
          sx={{
            fontSize: " 25px",
            marginLeft: "20px",
            color: "white",
          }}
        >
          Come and discover new adventures on our website
        </Typography>
      </Box>
    </Grid>
    <Grid item xs={12} sm={6}>
      <img className="img-games" src={imgWelcome}
      />
    </Grid>
     <Box>

     </Box>
  </Grid>

</div> */}