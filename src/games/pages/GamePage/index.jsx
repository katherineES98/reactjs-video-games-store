import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataForPage, getGames } from "../../../store/game";
import { NavBar, SearchGames } from "../../components";
import { CardGames } from "../../components/CardGames";
import { PaginacionGame } from "../../components/PaginacionGame";
import Stack from "@mui/material/Stack";

import CircularProgress from '@mui/material/CircularProgress';
import "./styles.css";

export const GamePage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { page, games, searchGames, isLoading } = useSelector(
    (state) => state.games
  );

  const getDataGame = () => {
    dispatch(getGames(page, searchGames));
  };

  const getDataForPage = (data, activePage) => {
    if (data.length > dataForPage) {
      const arreglo = data.slice(
        dataForPage * activePage - dataForPage,
        dataForPage * activePage
      );
      return arreglo;
    } else {
      return data;
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    getDataGame();
  }, [searchGames]);

  useEffect(() => {
    if (
      games.length % dataForPage === 0 &&
      games.length < currentPage * dataForPage
    ) {
      getDataGame();
    }
  }, [currentPage]);

  return (
    <>
      <Grid container className="input-search">
        <NavBar />

        <SearchGames getDataGame={getDataGame} />
      </Grid>
      {isLoading  && (
        <Stack justifyContent="center"  sx={{ color: 'grey.500',marginTop: 10  }} spacing={2} direction="row">
           <CircularProgress color="secondary" />
        </Stack>
      )}
      <Grid sx={{ marginTop: 10 }} container justifyContent="center">
        {getDataForPage(games, currentPage).map((game) => (
          <Box key={game.gameID} className="card-pruea" width="300px">
            <CardGames {...game} />
          </Box>
        ))}

        <Grid container>
          <PaginacionGame eventPage={setCurrentPage} numberOfPages={page} />
        </Grid>
      </Grid>
    </>
  );
};
