import React from "react";

import CollectionItem from "../Collection-item/Collection-item.component";

import {
  CollectionPreviewContainer,
  CollectionTitle,
  CollectionItemsPreview
} from "./Collection-preview.styles";

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <CollectionTitle>{title.toUpperCase()}</CollectionTitle>
    <CollectionItemsPreview>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </CollectionItemsPreview>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
