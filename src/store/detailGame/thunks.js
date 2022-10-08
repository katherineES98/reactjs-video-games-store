import { cheapSharkGameApi } from "../../api/cheapSharkGameApi";

import { setGamesDetail, setIsLoadingDetail, setStores } from "./detailSlice";

export const getGame = (id) => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoadingDetail({ isLoadingDetail: true }));
      const { data } = await cheapSharkGameApi.get(`/games?id=${id}`);
      //console.log(data);
      dispatch(getStores());
      dispatch(setGamesDetail({ game: data }));
    } catch (error) {
      console.log(error);
    } 
  };
};

export const getStores = () => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoadingDetail({ isLoadingDetail: true }));
      const { data } = await cheapSharkGameApi.get(`/stores`);
      console.log("este es data del store  ",{data});

      dispatch(setStores({ stores: data }));
      
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoadingDetail({ isLoadingDetail: false }));
    }
  };
};
