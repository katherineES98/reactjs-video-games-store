import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataForPage, getGames } from "../../../store/game";
import { NavBar, SearchGames } from "../../components";
import { CardGames } from "../../components/CardGames";
import { PaginacionGame } from "../../components/PaginacionGame";
import Stack from "@mui/material/Stack";

import CircularProgress from "@mui/material/CircularProgress";

import "./styles.css";

export const GamePage = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  // console.log({currentPage})

  const { page, games, searchGames, isLoading } = useSelector(
    (state) => state.games
  );

  const getDataGame = () => {
    dispatch(getGames(page, searchGames));
  };

  const getDataForPage = (data, activePage) => {
    if (data.length > dataForPage) {
      const arreglo = data.slice(
        dataForPage * activePage - dataForPage, //0
        dataForPage * activePage //10
      );

      // console.log({arreglo})
      return arreglo;
    } else {
      // console.log({ data });
      return data;
    }
  };

  useEffect(() => {
    getDataGame();
  }, [searchGames]);
  console.log({ games });
  useEffect(() => {
    if (
      games.length % dataForPage === 0 &&
      games.length < currentPage * dataForPage
    ) {
      getDataGame();
    }
  }, [currentPage]);
  document.body.style = "background:#ECF0F1 ";
  return (
    <div className="body-games">
      <Grid container className="input-search">
        <NavBar />

        <SearchGames getDataGame={getDataGame} />
      </Grid>
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

      {games.length === 0 && !isLoading && (
        <Stack
          justifyContent="center"
          sx={{ color: "grey.500", marginTop: 10 }}
          spacing={2}
          direction="row"
        >
          <p>There are no results for your search </p>
        </Stack>
      )}

      <Grid sx={{ marginTop: 10 }} container justifyContent="center">
        {/* parte me muestra los 10 elementos que tenes deacuerdo al boton que presionastes  */}
        {getDataForPage(games, currentPage).map((game) => (
          <Box key={game.gameID} className="card-pruea" width="300px">
            <CardGames {...game} />
          </Box>
        ))}
        {games.length > 0 && (
          <Grid container>
            <PaginacionGame eventPage={setCurrentPage} numberOfPages={page} />
          </Grid>
        )}
      </Grid>
    </div>
  );
};
