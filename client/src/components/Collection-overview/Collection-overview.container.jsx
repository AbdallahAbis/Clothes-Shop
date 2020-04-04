import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import CollectionOverview from "./Collection-overview.component";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";
import WithSpinner from "../With-spinner/With-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
