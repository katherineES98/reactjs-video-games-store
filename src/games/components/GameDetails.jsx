import {
  Grid,
  Box,
  Typography,
  ImageList,
  Button,
  ImageListItemBar,
  IconButton,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FirebaseAuth } from "../../firebase/config";
import { formatData, getDate } from "../../helpers";
import { setSaveGames } from "../../store/game/thunks";
import { ItemStore } from "./ItemStore";
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { makeStyles } from "@material-ui/styles";
import SaveIcon from "@mui/icons-material/Save";

const useStyles = makeStyles({
  imageList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",

    // Hide Scrollbar
    "-ms-overflow-style": "none" /* IE and Edge */,
    "scrollbar-width": "none" /* Firefox */,
    "&::-webkit-scrollbar": {
      /* Chrome */ display: "none",
    },
  },
});

export const GameDetails = ({ game, stores, gameID }) => {
  const classes = useStyles();
  const dollars = "$";
  const navigate = useNavigate();

  // console.log("id", { gameID });
  // console.log("game", { game });
  //const [loading, setLoading] = useState(false);
  // const { buttonLoading } = useSelector((state) => state.games);

  const dispatch = useDispatch();

  const alertSave = async (icon, title) => {
    try {
      await Swal.fire({
        position: "center",
        icon,
        title,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const saveGamesUser = async () => {
    const respose = await dispatch(
      setSaveGames({
        game,
        stores,
        userId: FirebaseAuth.currentUser.uid,
        gameID: gameID,
      })
    );
    if (respose) {
      await alertSave("success", "Saved successfully, enjoy your game");
      navigate("/savegames");
    } else {
      alertSave("error", "This game already exists in your game library");
    }
  };

  function hola() {
    console.log("hola");
  }

  return (
    <>
      {/**detalles juego */}
      <Grid container sx={{ mt: 10, padding: 5 }}>
        <Grid item xs={12} sm={12}>
          <Typography className="text-title">{game.info.title}</Typography>

          <div className="img-content" sx={{ mt: 1 }}>
            <div className="conte">
              <img
                src={game.info.thumb}
                className="img-detail"
                alt="hola"
                loading="lazy"
              />

              <ImageListItemBar
                title={
                  <h3>
                    Price: {dollars}
                    {game.cheapestPriceEver.price}
                  </h3>
                }
                subtitle={
                  <h2 className="text-date">
                    {" "}
                    Date: {getDate(game.cheapestPriceEver.date)}
                  </h2>
                }
                position="below"
                actionIcon={
                  <Button
                    onClick={saveGamesUser}
                    className="btn-back ov-btn-grow-spin"
                    variant="outlined"
                  >
                    Save
                  </Button>
                }
              />
            </div>
          </div>
        </Grid>
      </Grid>

      {/* ofertas */}

      <Typography className="title-store">
        {/* Stores with available game offers */}
        Available stores that the game is on sale {game.info.title}
      </Typography>

      {/* border={2} */}
      {/* <Box className="galery-center">
        <ImageList 
        className={classes.imageList}
        
        // className="imagenlist"
        sx={{ width: 750, height: 550 }} cols={3}>
          {stores.map((store) => {
            return <ItemStore key={store.storeID} {...store} />;
          })}
        </ImageList>
      </Box> */}
      <Grid container sx={{ marginTop: 5 }} justifyContent="center">
        {stores.map((store) => {
          return (
            <Box
              className="card-store"
              key={store.storeID}
              width="250px"
              margin={1}
            >
             
              <ItemStore {...store} />{" "}
            </Box>
          );
        })}
      </Grid>
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
