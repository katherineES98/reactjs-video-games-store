import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  //estado de la app
  initialState: {
    status: "checking", // estados si esta autenticado o no  //*checking
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null, // algun error que surja de la aplicacion
  },
  reducers: {
    login: (state, {payload}) => {
     
    state.status='authenticated', 
    state.uid=payload.uid;
    state.email=payload.email;
    state.displayName=payload.displayName;
    state.photoURL=payload.photoURL;
    state.errorMessage=payload.errorMessage;;
    },
    //cerrar sesion
    logout: (state, {payload}) => {
      state.status="not-authenticated", // estados si esta autenticado o no  //*checking
      state.uid= null;
      state.email= null;
      state.displayName= null;
      state.photoURL= null;
      state.errorMessage= payload?.errorMessage;

    },
    //verificar si esta autenticado o no
   
    checkingCredentials: (state) => {
      state.status='checking'
    },
  },
});
export const { login, logout, checkingCredentials } = authSlice.actions; //reducer cada uno tendra acciones especificas
