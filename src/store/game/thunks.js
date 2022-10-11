import { cheapSharkGameApi } from "../../api/cheapSharkGameApi";
import { getSaveGames, saveGames } from "../../firebase/providersGame";
import { setButtonLoading, setGames, setIsLoading, setPage, setSaveGamesState } from "./gameSlice";
//import { useNavigate } from "react-router-dom";

export const dataForPage = 10;

//const navigate= useNavigate();

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
  //insertar

  return async (dispatch) => {
    dispatch(setButtonLoading({ buttonLoading: true }));
    try {
      await saveGames(paramsGame);
      //navigate("/savegames")
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setButtonLoading({ buttonLoading: false }));
    }
  };
};

export const getDataSaveGames = () => {
  //obtener
  return async (dispatch) => {
    try {
      dispatch(setIsLoading({ isLoading: true }));
      const data = await getSaveGames();
      console.log({data})
      dispatch(setSaveGamesState({ saveGames: data }));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading({ isLoading: false }));
    }
  };
};
