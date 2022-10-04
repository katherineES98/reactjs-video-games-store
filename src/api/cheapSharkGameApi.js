import  axios from 'axios';

export const cheapSharkGameApi = axios.create({
    baseURL:import.meta.env.VITE_API
})

//https://www.cheapshark.com/api/1.0/deals?storeID=15&pageNumber=${page}&pageSize=12
