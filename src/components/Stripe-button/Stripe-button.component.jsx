import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StirpeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_Ki3qdUzc5dQepQpZwtnTcdET00gIBqX9Me";

  const onToken = token => {
    console.log(token);
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Cloths shop"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StirpeButton;
