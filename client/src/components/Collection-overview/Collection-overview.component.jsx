import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

import CollectionPreview from "../Collection-preview/Collection-preview.component";

import { CollectionsOverviewContainer } from "./Collection-overview.styles";

const CollectionOverview = ({ collections }) => {
  return (
    <CollectionsOverviewContainer className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
