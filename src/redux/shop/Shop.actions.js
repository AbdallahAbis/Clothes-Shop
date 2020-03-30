import ShopActionTypes from "./Shop.types";

export const updateCollections = collectionsMap => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap
});
