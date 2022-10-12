import { cheapSharkGameApi } from "../../api/cheapSharkGameApi";
import { getSaveGames, saveGames } from "../../firebase/providersGame";
import {
  setButtonLoading,
  setGames,
  setIsLoading,
  setPage,
  setSaveGamesState,
} from "./gameSlice";
//import { Navigate } from "react-router-dom";

//import {  Navigate, useNavigate, } from "react-router-dom";
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

      //console.log({data})
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
    let response= false
   // dispatch(setButtonLoading({ buttonLoading: true }));
    try {
      console.log({paramsGame})
      await saveGames(paramsGame);
      response=true
      // navigate("/savegames")
      //{ <Navigate to='/savegames' />}
      
    } catch (error) {
      console.log(error);
      response=false
    } finally {
      return response
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
