import {Grid,Box,Typography,ImageList,Button} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FirebaseAuth } from "../../firebase/config";
import { formatData, getDate } from "../../helpers";
import { setSaveGames } from "../../store/game/thunks";
import { ItemStore } from "./ItemStore";

export const GameDetails = ({ game, stores }) => {
 const dispatch= useDispatch()
  const saveGames = () =>{
    dispatch(setSaveGames({game,stores,userId:FirebaseAuth.currentUser.uid}))
  }

  return (
    <>
      {/**detalles juego */}
      <Grid container sx={{ mt: 10 }}>
        <Grid item xs={12} sm={6}>
          <Box className="img-content" sx={{ mt: 2 }}>
            <img
              src={game.info.thumb}
              className="img-detail"
              alt="hola"
              loading="lazy"
            />
          </Box>
        </Grid>
        <Grid border={2} className="box" item xs={12} sm={6} sx={{ mt: 2 }}>
          <Box className="container-title" border={2}>
            <Typography className="text-title">{game.info.title}</Typography>
          </Box>
          <Box className="text-information">
            <Typography className="text-price ">
              Price: ${game.cheapestPriceEver.price},
            </Typography>
            <Typography className="text-date ">
              Date: {getDate(new Date(game.cheapestPriceEver.date))}
            </Typography>

            <Link href="#" variant="body2" className="link-back" to="/">
              <Button className="btn-back ov-btn-grow-spin" variant="outlined">
                Back
              </Button>
            </Link>
            <Button onClick={saveGames} className="btn-back ov-btn-grow-spin" variant="outlined">
              Save
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* ofertas */}

      <Typography className="title-store">
        Stores with available game offers
      </Typography>

      {/* border={2} */}
      <Box className="galery-center">
        <ImageList sx={{ width: 750, height: 550 }} cols={3}>
          {stores.map((store) => {
            return <ItemStore key={store.storeID} {...store} />;
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

{
  /* <Grid
container
style={{
  marginLeft: 15,
}}
spacing={1}
>
{stores.map((store) => {
 
  return <ItemStore key={store.storeID}  {...store}  />;
})}
</Grid> */
}
