module.exports.payRequest = (req, res, stripe) => {
  const { token, amount } = JSON.parse(req.body);

  stripe.paymentIntents
    .create({
      amount,
      currency: "USD",
      payment_method_types: ["card"],
      payment_method_data: {
        type: "card",
        card: { token },
      },
      confirm: true,
    })
    .then((paymentIntent) => {
      res.json(paymentIntent);
    })
    .catch((e) => {
      console.log(e);
      res.status(400);
      res.send(e);
    });
};
