import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  //estado de la app
  initialState: {
    status: "checking", // estados si esta autenticado o no
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null, // algun error que surja de la aplicacion
  },
  reducers: {
    login: (state, payload) => {},
    //cerrar sesion
    logout: (state, payload) => {},
    //verificar si esta autenticado o no
    checkingCredentials: (state) => {},
  },
});
export const { login, logout, checkingCredentials } = authSlice.actions; //reducer cada uno tendra acciones especificas
