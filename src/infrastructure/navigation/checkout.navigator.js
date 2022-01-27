import React from "react";
import { CheckoutScreen } from "../../features/checkout/screens/checkout.screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CheckoutSuccessScreen } from "../../features/checkout/screens/checkout-success.screen";
import { CheckoutErrorScreen } from "../../features/checkout/screens/checkout-error.screen";

const CheckoutStack = createNativeStackNavigator();

export const CheckoutNavigator = () => (
  <CheckoutStack.Navigator headerMode="none">
    <CheckoutStack.Screen name="Checkout" component={CheckoutScreen} />
    <CheckoutStack.Screen
      name="CheckoutSuccess"
      component={CheckoutSuccessScreen}
    />
    <CheckoutStack.Screen
      name="CheckoutError"
      component={CheckoutErrorScreen}
    />
  </CheckoutStack.Navigator>
);
