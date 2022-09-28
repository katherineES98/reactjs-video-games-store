import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  //estado de la app
  initialState: {
    status: "not-authenticated", // estados si esta autenticado o no  //*checking
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
    checkingCredentials: (state) => {
      state.status='checking'
    },
  },
});
export const { login, logout, checkingCredentials } = authSlice.actions; //reducer cada uno tendra acciones especificas
