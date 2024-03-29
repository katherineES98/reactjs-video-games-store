import { CircularProgress, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDate } from "../../../helpers";
import { getDataSaveGames } from "../../../store/game";
import { CardGames } from "../../components/CardGames";
import { NavBar, SearchGames } from "../../components";
import "./styles.css";

export const SaveGamePage = () => {
  const dispatch = useDispatch();
  const { saveGames, isLoading } = useSelector((state) => state.games);

  useEffect(() => {
    dispatch(getDataSaveGames());
  }, []);

  return (
    <div className="game-save">
      {/* key={save.gameID} */}
      {/* <h1> Save Game </h1> */}

      <NavBar />
      {isLoading && (
        <Stack
          justifyContent="center"
          sx={{ color: "grey.500", marginTop: 10 }}
          spacing={2}
          direction="row"
        >
          <CircularProgress color="secondary" />
        </Stack>
      )}

      {saveGames.length === 0 && !isLoading && (
        <Stack
          justifyContent="center"
          sx={{ color: "grey.500", marginTop: 10 }}
          spacing={2}
          direction="row"
        >
          <p className="text-msave">
            <b>You don't have any saved games at the moment!</b>{" "}
          </p>
        </Stack>
      )}

        <Grid container >
      
        

<Typography className="title-library">
        {/* Stores with available game offers */}
        My library of favorite games
      </Typography>

      <Grid sx={{ marginTop: 10 }} container justifyContent="center">
        
        {saveGames.map((save) => (
          <Box key={save.id} className="card-pruea" width="300px">
            <CardGames
              thumb={save.game.info.thumb}
              external={save.game.info.title}
              cheapest={save.game.cheapestPriceEver.price}
              date={getDate(new Date(save.game.cheapestPriceEver.date))}
              showButton={false}
            />
          </Box>
        ))}
      </Grid>
        </Grid>
      
    </div>
  );
};
