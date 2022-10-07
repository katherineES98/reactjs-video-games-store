import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGame } from "../../store/detailGame";

export const GameDetails = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();

  const { game } = useSelector((state) => state.detail);

  console.log(" estas en este juego al hacer click", game, "con el id", id);

  useEffect(() => {
    dispatch(getGame(id));
  }, []);

  //console.log(useParams())

  return (
    <>
      {/* <h1>GameDetails</h1>
      <ul>
        <li>{game.info.title}</li>
        <li>{game.cheapestPriceEver.price}</li>
      </ul> */}

    </>
  );
};
