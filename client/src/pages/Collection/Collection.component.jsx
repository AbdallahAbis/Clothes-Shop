import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selector";

import CollectionItem from "../../components/Collection-item/Collection-item.component";

import {
  CollectionPageContainer,
  CollectionPageTitle,
  CollectionPageItemsContainer
} from "./Collection.styles";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer className="collection-page">
      <CollectionPageTitle className="title">
        {title.toUpperCase()}
      </CollectionPageTitle>
      <CollectionPageItemsContainer className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionPageItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
