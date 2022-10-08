import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGame } from "../../../store/detailGame";
import { NavBar } from "../../components";
import { GameDetails } from "../../components/GameDetails";
import "./styles.css";

export const DetailGamePage = () => {
  const { gameID } = useParams();
  // console.log(id);
  const dispatch = useDispatch();
  const { game, isLoadingDetail } = useSelector((state) => state.detail);

  //console.log(" estas en este juego al hacer click", game, "con el id", id);

  useEffect(() => {
    dispatch(getGame(gameID));
  }, []);

  return (
    <>
      {/* <h1>DetailGamePage</h1> */}
      <NavBar />
      {isLoadingDetail ? (
        <Typography>cargando.....</Typography>
      ) : (
        <GameDetails game={game} />
      )}
    </>
  );
};
