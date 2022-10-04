import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 10,
  games: [],
  searchGames: "batman",
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
    },
    setSearchGames:(state, action)=>{
      state.searchGames = action.payload.searchGames;
    },
  },

 
});

export const { reset,setGames, setPage,setSearchGames} = gameSlice.actions;
