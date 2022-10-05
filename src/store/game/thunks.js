import { cheapSharkGameApi } from "../../api/cheapSharkGameApi";
//import axios from "axios";
import { setGames, setPage } from "./gameSlice";
export const dataForPage = 10;
export const getGames = (page, textSearch) => {
  return async (dispatch) => {
    console.log("hola", page, dataForPage, textSearch); //10
    try {
      const { data } = await cheapSharkGameApi.get(
        `/games?title=${textSearch}&limit=${page}&exact=0`
      );
      console.log(data);

      if (data.length % dataForPage === 0) {
        dispatch(setPage({ page: page + dataForPage }));
      }
      dispatch(setGames({ games: data }));
      //dispatch(setPage({ page: page - dataForPage }));
      //const index = page < 20 ? 0 : 20;
      //   const arreglo = p.splice(0, page - index);
      // const p=Object.values(data)

      // console.log("data", p );
      //  console.log("page", page );
      // const index = page == 10 ? 0 : page-10;
      //  p.splice(0,index)
      // console.log("este",page,index )
      // console.log(p)
 
    } catch (error) {
      console.log(error);
    }
  };
};
