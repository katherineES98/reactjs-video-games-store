import { cheapSharkGameApi } from "../../api/cheapSharkGameApi";
import { formatData } from "../../helpers";


import { setGamesDetail, setIsLoadingDetail, setStores } from "./detailSlice";

export const getGame = (id) => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoadingDetail({ isLoadingDetail: true }));
      const { data } = await cheapSharkGameApi.get(`/games?id=${id}`);
      const response = await cheapSharkGameApi.get(`/stores`);

      const format = formatData(response.data, data.deals);
      dispatch(setStores({ stores: format }));

      dispatch(setGamesDetail({ game: data }));
    } catch (error) {
      console.log(error);
    } finally{
      dispatch(setIsLoadingDetail({ isLoadingDetail: false }));
    }
  };
};





