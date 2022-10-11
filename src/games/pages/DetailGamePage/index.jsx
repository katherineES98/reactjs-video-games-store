import { CircularProgress, Typography } from "@mui/material";
import { Stack } from "@mui/system";
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
  const { game, isLoadingDetail, stores } = useSelector(
    (state) => state.detail
  );
  console.log("estan son las tiendas", { stores });
  console.log({ game });
  //console.log(" estas en este juego al hacer click", game, "con el id", id);

  useEffect(() => {
    dispatch(getGame(gameID));
  }, []);

  // { game.map((gam) => (
  //     console.log(gam)
  // ))}

  //console.log("aqui",stor)

  // return  heroes.find(hero=> hero.id===id )

  return (
    <>
      {/* <h1>DetailGamePage</h1> */}
      <NavBar />
      {isLoadingDetail ? (
        <Stack
          justifyContent="center"
          sx={{ color: "grey.500", marginTop: 10 }}
          spacing={2}
          direction="row"
        >
          <CircularProgress color="secondary" />
        </Stack>
      ) : (
        <GameDetails game={game} stores={stores} />
      )}
    </>
  );
};
