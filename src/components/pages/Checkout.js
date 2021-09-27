import React, { useEffect, useState } from 'react';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import CardSection from '../CardSection';
import axios from '../../axios';
import { useHistory } from 'react-router';
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { getUser, getCart } from '../../graphql/queries';

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('')
  const [userInfo, setUserInfo] = useState(null)
  const [cart, setCart] = useState([])
  const history = useHistory()

  const fetchCart = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser()
      if (userData) {
        const usrData = await API.graphql(graphqlOperation(getUser, { id: userData.attributes.sub }))
        setUserInfo(usrData.data.getUser)
        const cartList = await API.graphql(graphqlOperation(getCart, {userID: userData.attributes.sub}))
        setCart(cartList.data.getCart.cartProduct.items)
      }
    }
    catch (e) {
        console.log(e)
        history.push('/login')
        history.go(0)
    }
  }
  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const { error: backendError, client_secret } = await fetch('/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        items: cart,
        paymentMethodType: 'card',
        currency: 'usd'
      })
    }).then(r => r.json())
    if (backendError) {
      console.log(backendError.message)
      setError(backendError.message)
      return
    }
    console.log('Payment Intent Created')

    const result = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: userInfo.name,
        },
      }
    });
    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
      setError(result.error.message)
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === 'succeeded') {
        console.log('Payment intent succeded')
        history.push("/orders")
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
      }
    }
  };

  useEffect(() => {
    fetchCart()
  }, [])

  return (
    <section>
      <p>{error}</p>
      <form onSubmit={handleSubmit}>
        <CardSection />
        <button disabled={!stripe}>Confirm order</button>
      </form>
    </section>
  );
}
export default Checkout 