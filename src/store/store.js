//Tienda de redux vacia
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { gameSlice } from "./game";

export const store = configureStore({
  reducer: {
    //espacio en el store de auth
    auth: authSlice.reducer,
    games: gameSlice.reducer,
  },
   

});
