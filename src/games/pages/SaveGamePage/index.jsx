import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDataSaveGames } from "../../../store/game";

export const SaveGamePage = () => {
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getDataSaveGames());
  }, []);

  return (
    <>
      <h1> Save Game </h1>
    </>
  );
};
