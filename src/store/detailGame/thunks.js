import { cheapSharkGameApi } from "../../api/cheapSharkGameApi";
import { setGamesDetail } from "./detailSlice";

//import { setGames, setIsLoading, setPage } from "./gameSlice";
//export const dataForPage = 10;

export const getGame = (id) => {
  return async (dispatch) => {
   

        //https://www.cheapshark.com/api/1.0/games?&steamAppID=1611850
     // dispatch(setIsLoading({ isLoading: true }));
      const {data} = await cheapSharkGameApi.get(
        `/games?id=${id}`
      );
     //console.log(data);

     dispatch(setGamesDetail({ game: data }));
    
  };
};
