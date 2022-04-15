import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishedKey =
    "pk_test_51Koq0tGBSNzQBf0ZmjhV8Dun2q2uZLphsPehJ2kC0M8uqa0rtYlxwfeFV1enRn8mRZ46qUdXkBzsgddweGGtuKam00gi3BMTA0";

  const onToken = (token) => {
    console.log(token);
    alert("Payment succesfull");
  };

  return (
    <StripeCheckout
      label="Pay now!"
      name="Clothes Shop."
      billingadress
      shippingadress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total price is
      $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now!"
      onToken={onToken}
      stripeKey={publishedKey}
    />
  );
};

export default StripeCheckoutButton;
