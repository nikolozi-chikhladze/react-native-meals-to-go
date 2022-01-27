import createStripe from "stripe-client";
import { host } from "../../utils/env";

const stripe = createStripe(
  "pk_test_51JQoFcB2tHvNI9Wvt8gs1rbeyqN6rSj1TQRGMRsH3FBw9ttVz5ZWQlkW4XdNAXgjPjlXqXTeAJLOhPJLxntBpuPl00AUXDOF1F"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      amount,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("something went wrong processing your payment");
    }
    return res.json();
  });
};
