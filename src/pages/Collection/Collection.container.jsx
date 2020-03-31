import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import CollectionPage from "./Collection.component";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selector";
import WithSpinner from "../../components/With-spinner/With-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
