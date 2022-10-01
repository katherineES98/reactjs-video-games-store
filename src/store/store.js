//Tienda de redux vacia
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";

export const store = configureStore({
  reducer: {
    //espacio en el store de auth
    auth: authSlice.reducer,
  },
});
