import { cheapSharkGameApi } from "../../api/cheapSharkGameApi";
import { storesSlice } from "./";

export const getStores = async() => {
  return async (dispatch) => {
    try {
     // dispatch(setIsLoadingDetail({ isLoadingDetail: true }));
      const {data}= await cheapSharkGameApi.get(`/stores`);
      console.log(data);

      dispatch(storesSlice({ stores: data }));
    } catch (error) {
      console.log(error);
    } 
  };
};