import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import selectShopCollections from "../../redux/shop/shop.selector";

import CollectionPreview from "../Collection-preview/Collection-preview.component";

import "./Collection-overview.styles.scss";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(mapStateToProps)(CollectionOverview);
