import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 10,
  games: [],
  searchGames: "batman",
  //dataForPage:10
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    reset: () => initialState,
    setGames: (state, action) => {
      // console.log(action )
      state.games = action.payload.games;
     
    },
    setPage:(state, action)=>{
      state.page = action.payload.page;
      //state.dataForPage = action.payload.page;
    },
    setSearchGames:(state, action)=>{//insertar  la busqueda
      state.searchGames = action.payload.searchGames;
    },
  },

 
});

export const { reset,setGames, setPage,setSearchGames} = gameSlice.actions;
