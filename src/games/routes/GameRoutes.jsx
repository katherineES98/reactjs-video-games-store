import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { GameDetails } from "../components/GameDetails";
import { DetailGamePage } from "../pages/DetailGamePage";
import { GamePage } from "../pages/GamePage";
import { SaveGamePage } from "../pages/SaveGamePage";

{
  /**rutas hijas  */
}
export const GameRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<GamePage />} />
      <Route path="/detail/:gameID" element={<DetailGamePage />} />
      <Route path="/savegames" element={<SaveGamePage />} />

      {/**si no estoy en la ruta anterior sera esta  */}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
