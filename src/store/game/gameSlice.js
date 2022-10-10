import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 10,
  games: [],
  searchGames: "batman",
  isLoading: false,
  saveGames:[]
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
    setPage: (state, action) => {
      state.page = action.payload.page;
    },
    setSearchGames: (state, action) => {
      //insertar  la busqueda
      state.searchGames = action.payload.searchGames;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload.isLoading;
    },
    setSaveGamesState: (state, action) => {
      state.saveGames = action.payload.saveGames;
    },
  },
});

export const { reset, setGames, setPage, setSearchGames, setIsLoading,setSaveGamesState } =
  gameSlice.actions;
