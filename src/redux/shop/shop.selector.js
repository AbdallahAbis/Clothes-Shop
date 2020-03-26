import { createSelector } from "reselect";

const selectShop = state => state.shopData;

const selectShopCollections = createSelector(
  [selectShop],
  data => data.collections
);
export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  collections => Object.keys(collections).map(key => collections[key] )
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectShopCollections],
    collections => collections[collectionUrlParam]
  );

export default selectShopCollections;
