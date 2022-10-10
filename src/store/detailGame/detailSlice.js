import { createSlice } from "@reduxjs/toolkit";
export const detailGamesSlice = createSlice({
  name: "detailGames",
  initialState: {
    game: [],
    isLoadingDetail: true,
    stores: [],
    // idGame:null
  },
  reducers: {
    setGamesDetail: (state, action) => {
      state.game = action.payload.game;
      // state.idGame = action.payload.idGame;
    },
    setIsLoadingDetail: (state, action) => {
      state.isLoadingDetail = action.payload.isLoadingDetail;
    },
    setStores: (state, action) => {
      state.stores = action.payload.stores;
    },
  },
});

export const { setGamesDetail, setIsLoadingDetail,setStores } = detailGamesSlice.actions;
