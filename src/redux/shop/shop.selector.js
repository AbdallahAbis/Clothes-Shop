import { createSelector } from "reselect";

const selectShop = state => state.shopData;

const selectShopCollections = createSelector(
  [selectShop],
  data => data.collections
);

export default selectShopCollections;
