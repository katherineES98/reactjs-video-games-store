
import { createSlice } from '@reduxjs/toolkit';

export const detailGamesSlice = createSlice({
  name: 'detailGames',
    initialState: {
      game: [],
      isLoadingDetail: false,
    }, 
    reducers: {
      setGamesDetail: (state, action) => {
       
        state.game = action.payload.game;
      },
      setIsLoadingDetail: (state, action) => {
        state.isLoadingDetail = action.payload.isLoadingDetail;
      },
   
   }
});


export const { setGamesDetail,setIsLoadingDetail } =  detailGamesSlice.actions;











import { createSlice } from '@reduxjs/toolkit';

export const templateSlice = createSlice({
  name: 'template',
    initialState: {
       

    }, 
    reducers: {
      
   }
});


export const { increment } =  templateSlice.actions;