import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { GamePage } from "../pages/GamePage";
import { WelcomePage } from "../pages/WelcomePage";


{
  /**rutas hijas  */
}
export const GameRoutes = () => {
  return (
    <Routes>
      <Route path="/games" element={<GamePage />} />
      <Route path="/" element={<WelcomePage />} />
      {/**si no estoy en la ruta anterior sera esta  */}
      <Route path="/" element={<Navigate to="/" />} />
    </Routes>
  );
};
