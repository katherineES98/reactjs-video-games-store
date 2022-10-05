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
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGames } from "../../../store/game";
import { NavBar, SearchGames } from "../../components";
import { CardGames } from "../../components/CardGames";
import { PaginacionGame } from "../../components/PaginacionGame";
import "./styles.css";

//import { CardPrueba } from "../components/CardPrueba";

//import { makeStyles } from '@material-ui/core/styles';
//import Card from '@material-ui/core/Card';
//import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
//import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
///import Typography from '@material-ui/core/Typography';

export const GamePage = () => {
  const { page, games, searchGames } = useSelector((state) => state.games);
  console.log("holaa", page);
  const getDataGame = () => {
    dispatch(getGames(page, searchGames));
    //console.log(page)
  };
  const getDataGameBack = () => {
    //console.log('hols')
    // console.log("hola",dataForPage)

    dispatch(getGames(page - 20, searchGames));
  };

  //console.log("-----------------")
  const dispatch = useDispatch();
  useEffect(() => {
    //console.log("esta iniio",page)
    getDataGame();
    //
  }, [searchGames]);

  // useEffect(() => {
  //   //console.log("esta iniio",page)

  //   getDataGameBack()
  // }, [searchGames]);

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
        {games.map((game) => (
          <Box className="card-pruea" width="300px">
            <CardGames game={game} />
          </Box>
        ))}

        <Grid container>
          <button onClick={() => getDataGame()}>Next</button>
        </Grid>
        <Grid container>
          <button onClick={() => getDataGameBack()}>back</button>
        </Grid>

        <Grid container>
          <PaginacionGame />
        </Grid>
      </Grid>

      {/* <CardGames games={games} getDataGame={getDataGame} getDataGameBack={getDataGameBack} /> */}
      {/* </Box> */}
    </>
  );
};
