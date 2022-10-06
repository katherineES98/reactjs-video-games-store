//import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from "react";
//import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
//import { FirebaseAuth } from '../firebase/config'
import { CheckingAuth } from "../games/components";
import { WelcomePage } from "../games/pages/WelcomePage";
import { GameRoutes } from "../games/routes/GameRoutes";
import { useCheckAuth } from "../hook";

export const AppRouter = () => {
  const status = useCheckAuth();
  if (status === "checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<GameRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<WelcomePage />} />
    </Routes>
  );
};

// {/** LOGIN Y REGISTRO*/}
// <Route path='/auth/*' element={<AuthRoutes/>} />
// {/**GAMESAPP */}
// <Route path='/*' element={<GameRoutes/>}  />
