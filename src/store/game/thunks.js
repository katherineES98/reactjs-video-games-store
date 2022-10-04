import { cheapSharkGameApi } from "../../api/cheapSharkGameApi";
import axios from "axios";
import { setGames, setPage } from "./gameSlice";
const dataForPage = 10;
export const getGames = (page, textSearch) => {
  return async (dispatch) => {
    console.log(page, textSearch);
    try {
      const { data } = await cheapSharkGameApi.get(
        `/games?title=${textSearch}&limit=${page}&exact=0`
      );
      if(data.length % dataForPage===0 ){
        dispatch(setPage({ page: page + dataForPage }));
      }
    //   console.log({ data });
      dispatch(setGames({ games: data }));
   
    } catch (error) {
      console.log(error);
    }
  };
};
