import React from "react";
import { NavBar } from "../../components";
import { GameDetails } from "../../components/GameDetails";
import "./styles.css";

export const DetailGamePage = () => {
  return (
    <>
      {/* <h1>DetailGamePage</h1> */}
      <NavBar />
      <GameDetails />
    </>
  );
};
