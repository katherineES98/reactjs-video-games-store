import { cheapSharkGameApi } from "../../api/cheapSharkGameApi";

import { setGames, setIsLoading, setPage } from "./gameSlice";
export const dataForPage = 10;

export const getGames = (page, textSearch) => {
  return async (dispatch) => {
   
    try {
        //https://www.cheapshark.com/api/1.0/games?&steamAppID=1611850
     // dispatch(setIsLoading({ isLoading: true }));
      const { data } = await cheapSharkGameApi.get(
        `/games?title=${textSearch}&limit=${page}&exact=0`
      );
      // console.log(data);

      if (data.length % dataForPage === 0) {
        dispatch(setPage({ page: page + dataForPage }));
      }
      dispatch(setGames({ games: data }));
    
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading({ isLoading: false }));
    }
  };
};
