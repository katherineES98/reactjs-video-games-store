import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  CardMedia,
  Paper,
  ImageList,
} from "@mui/material";
import React, { useState } from "react";
import { formatData, getDate } from "../../helpers";
import { ItemStore } from "./ItemStore";


export const GameDetails = ({ game, stores }) => {

  
  return (
    <>
      <Grid className="container-detail" container sx={{ mt: 10 }}>
        <Grid item xs={12}>
          <Typography className="text-title">{game.info.title}</Typography>
          <Box
            className="image-container"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
         
            <div className="contenedor">
              <img
                src={game.info.thumb}
               
                className="img-detail"
                alt="hola"
                loading="lazy"
              />
              <div className="texto-encima">
                <Typography>Price: ${game.cheapestPriceEver.price},</Typography>
              </div>
              <div className="centrado">
                <Typography>
                  date: {getDate(new Date(game.cheapestPriceEver.date))}
                </Typography>
              </div>
            </div>
          </Box>
        </Grid>
      </Grid>

      {/* ofertas */}

      <Typography className="title-store">
        Stores with available game offers
      </Typography>

      {/* border={2} */}
<Box className="galery-center" >

<ImageList  sx={{width: 750, height: 550}}  cols={3}>
{stores.map((store) => {
 
 return <ItemStore key={store.storeID}  {...store}  />;
})}
</ImageList>

</Box>
     
    </>
  );
};

{
  /* <h1>GameDetails</h1>
      <ul>
        <li>{game.info.title}</li>
        <li>{game.cheapestPriceEver.price}</li>
      </ul> */
}


{/* <Grid
container
style={{
  marginLeft: 15,
}}
spacing={1}
>
{stores.map((store) => {
 
  return <ItemStore key={store.storeID}  {...store}  />;
})}
</Grid> */}