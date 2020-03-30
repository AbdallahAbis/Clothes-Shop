import { createSelector } from "reselect";

const selectShop = state => state.shopData;

const selectShopCollections = createSelector(
  [selectShop],
  shopData => shopData.collections
);
export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam =>
  createSelector([selectShopCollections], collections =>
    collections ? collections[collectionUrlParam] : null
  );

export default selectShopCollections;
