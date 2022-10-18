import { cheapSharkGameApi } from "../../api/cheapSharkGameApi";
import { getSaveGames, saveGames } from "../../firebase/providersGame";
import {
  setGames,
  setIsLoading,
  setPage,
  setSaveGamesState,
} from "./gameSlice";

export const dataForPage = 10;

// function component(){
//   let navigate = useNavigate();
//   return navigate('/savegames')
// }
// const navigate= useNavigate();

export const getGames = (page, textSearch) => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading({ isLoading: true }));

      const { data } = await cheapSharkGameApi.get(
        `/games?title=${textSearch}&limit=${page}&exact=0`
      );

      if (data.length % dataForPage === 0) {
        dispatch(setPage({ page: page + dataForPage })); //setaer la segunda lectura 10 + daraforpage + 10 = 20 la page estara en 20
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
    let response = false;

    // dispatch(setButtonLoading({ buttonLoading: true }));
    try {
      const responseSaveGame = await saveGames(paramsGame);

      if (responseSaveGame === null) {
        response = false;
      } else {
        response = true;
      }
    } catch (error) {
      console.log(error);
      response = false;
    } finally {
      return response;
      // dispatch(setButtonLoading({ buttonLoading: false }));
    }
  };
};

export const getDataSaveGames = () => {
  //obtener
  return async (dispatch) => {
    try {
      dispatch(setIsLoading({ isLoading: true }));
      const data = await getSaveGames();
      //  console.log("esta",{ data });

      dispatch(setSaveGamesState({ saveGames: data }));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading({ isLoading: false }));
    }
  };
};
