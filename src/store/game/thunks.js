import { cheapSharkGameApi } from "../../api/cheapSharkGameApi";
import { saveGames } from "../../firebase/providersGame";
import { setGames, setIsLoading, setPage } from "./gameSlice";


export const dataForPage = 10;

export const getGames = (page, textSearch) => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading({ isLoading: true }));
      const { data } = await cheapSharkGameApi.get(
        `/games?title=${textSearch}&limit=${page}&exact=0`
      );

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
export const setSaveGames = (paramsGame) => {
  return async (dispatch) => {
    try {
      await saveGames(paramsGame)

    } catch (error) {
      console.log(error);
    } finally {
     
    }
  };
};


