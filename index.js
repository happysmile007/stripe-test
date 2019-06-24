const stripe = require('stripe')('sk_test_51Oz8pQRpPTtUHLlfEbTsGmaDLsvObtOp34JhqiHkbA49pTZzRCrmxDpxHXa4XAFyTIDqpN1rzwkTWPAkZLB6FMQX00Va1P6rUe');

stripe.products.create({
  name: 'Starter Subscription',
  description: '$12/Month subscription',
}).then(product => {
  stripe.prices.create({
    unit_amount: 1200,
    currency: 'usd',
    recurring: {
      interval: 'month',
    },
    product: product.id,
  }).then(price => {
    console.log('Success! Here is your starter subscription product id: ' + product.id);
    console.log('Success! Here is your starter subscription price id: ' + price.id);
  });
});