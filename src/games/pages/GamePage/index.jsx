import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataForPage, getGames } from "../../../store/game";
import { NavBar, SearchGames } from "../../components";
import { CardGames } from "../../components/CardGames";
import { PaginacionGame } from "../../components/PaginacionGame";
import "./styles.css";

export const GamePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  console.log(currentPage);

  const { page, games, searchGames } = useSelector((state) => state.games);
  //console.log("holaa", page);
  const getDataGame = () => {
    dispatch(getGames(page, searchGames));
    //console.log(page)
  };
  const getDataGameBack = () => {
    dispatch(getGames(page - 20, searchGames));
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

  //console.log("-----------------")
  const dispatch = useDispatch();
  useEffect(() => {
    //console.log("esta iniio",page)
    getDataGame();
    //
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

      {/* <Box width='300px' 
//  display: flex;
// 
//  sx={{display:'flex',flex-direction: 'column'}}
direction="row" 
 > */}
      <Grid sx={{ marginTop: 10 }} container justifyContent="center">
        {getDataForPage(games, currentPage).map((game) => (
          <Box className="card-pruea" width="300px">
            <CardGames game={game} />
          </Box>
        ))}

    

        <Grid container>
          <PaginacionGame eventPage={setCurrentPage} numberOfPages={page} />
        </Grid>
      </Grid>

      {/* <CardGames games={games} getDataGame={getDataGame} getDataGameBack={getDataGameBack} /> */}
      {/* </Box> */}
    </>
  );
};
