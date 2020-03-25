import React from "react";
import { connect } from "react-redux";
import CustomButton from "../Custom-button/Custom-button.component";
import CartItem from "../Cart-item/Cart-item.component";

import "./Cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem id={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStatetoProps = ({ cart: { cartItems } }) => ({
  cartItems
});
export default connect(mapStatetoProps)(CartDropdown);
