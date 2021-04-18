import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';



const stripePromise = loadStripe('pk_test_51Ie175ARiD578RGPCTdYsRoL29fmz8bhfJZRp8Q9HkdvyGxTEC6fonbxIlquXUTDck8IWD6XZTUxncGDX4vmbNmb00eHlbVu64');

const PaymentProcess = () => {
  return (
    <Elements stripe={stripePromise}>
      <SimpleCardForm></SimpleCardForm>
</Elements>
  );
};


export default PaymentProcess;