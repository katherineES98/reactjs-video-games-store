import {
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
import { getGames } from "../../store/game";
import { NavBar, SearchGames } from "../components";

//import { makeStyles } from '@material-ui/core/styles';
//import Card from '@material-ui/core/Card';
//import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
//import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
///import Typography from '@material-ui/core/Typography';

export const GamePage = () => {
  const { page, games,searchGames } = useSelector((state) => state.games);
  console.log({page,games})
  
  const getDataGame=()=>{
    dispatch(getGames(page,searchGames ));
  }
  
  const dispatch = useDispatch();
  useEffect(() => {
    getDataGame()
  }, [searchGames]);

  return (
    <>
      <Grid
        container
        sx={{ marginTop: 15}}
        //  justifyContent="center"
        // alignItems="center"
      >
        <NavBar />

        <SearchGames getDataGame={getDataGame}/>
        <h1>games</h1>

        <ul>
          {games.map((game) => (
            <li key={game.gameID}>{game.internalName}</li>
          ))}
        </ul>
      </Grid>

      <Grid>   <button onClick={() => getDataGame()}>Next</button>
     
      </Grid>
    </>
  );
};
