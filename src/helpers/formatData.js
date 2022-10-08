const getStoreById = (id, dataStores) => {
  let storeDeal = {};
  dataStores.forEach((store) => {
    if (store.storeID === id) {
      storeDeal = store;
    }
  });
  return storeDeal;
};

export const formatData = (stores, deals) => {
  const data = [];

  deals.forEach((deal) => {
    data.push({ ...getStoreById(deal.storeID, stores), ...deal });
  });
  return data;
};
