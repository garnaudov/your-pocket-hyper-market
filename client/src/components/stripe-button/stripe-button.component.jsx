import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_m21OoNaxXkNmy9iRhQ0YzZK9005f8EOGS5';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        alert('succesful payment');
      })
      .catch(error => {
        console.log('Payment Error: ', JSON.parse(error));
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label='Платете сега'
      name='Your Pocket Hypermarket'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Общата ви сума е: ${price} лв`}
      amount={priceForStripe}
      panelLabel='Платете сега'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
