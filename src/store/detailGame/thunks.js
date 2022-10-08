import { cheapSharkGameApi } from "../../api/cheapSharkGameApi";
import { setGamesDetail, setIsLoadingDetail } from "./detailSlice";

export const getGame = (id) => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoadingDetail({ isLoadingDetail: true }));
      const { data } = await cheapSharkGameApi.get(`/games?id=${id}`);
      //console.log(data);

      dispatch(setGamesDetail({ game: data }));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoadingDetail({ isLoadingDetail: false }));
    }
  };
};
