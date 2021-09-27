const port = process.env.PORT || 9000

const stripe = require('stripe')('sk_test_51JeGHzGKYva4OAEfeDUvZFAJ3N0LxtwqDgmaYxUWH7w6gixfW2HEh4HgQ2r3SzCUBtgu3T2kVymZI0ujrLU36SEs00a2Qu5T3z');

const express = require('express');
const app = express();

app.use(express.static("public"));
app.use(express.json());

const getCartTotal = cart => {
  var sum = 0
  for (let i=0; i<cart.length; i++) {
    sum = sum + (cart[i].product.price)*(cart[i].quantity)
  }
  return sum*100
}

app.post('/checkout', async (req, res) => {
  const { items } = req.body
  console.log(items)
  const paymentIntent = await stripe.paymentIntents.create({
    amount: getCartTotal(items),
    currency: 'usd',
    // Verify your integration in this guide by including this parameter
    metadata: {integration_check: 'accept_a_payment'},
  })
   // ... Fetch or create the PaymentIntent
  res.json({ client_secret: paymentIntent.client_secret });
  console.log(paymentIntent.client_secret)
});

app.get('/', (req, res) => {
  const path = resolve(process.env.STATIC_DIR + "/index.html")
  res.sendFile(path)
})

app.get('/config', async (req, res) => {
  res.json({publishableKey: process.env.STRIPE_PUBLISHABLE_KEY})
  console.log(process.env.STRIPE_PUBLISHABLE_KEY)
})

app.listen(port, () => {
  console.log('Running on port ' + port);
});