import React from "react";
import { Route } from "react-router-dom";


import CollectionOverview from "../../components/Collection-overview/Collection-overview.component";
import CollectionPage from "../Collection/Collection.component";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      />
    </div>
  );
};



export default ShopPage
