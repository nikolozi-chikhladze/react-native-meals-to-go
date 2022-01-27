import React, { useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { List, Divider } from "react-native-paper";

import { CartContext } from "../../../services/cart/cart.context";

import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { CreditCardInput } from "../components/credit-card.component";
import { Text } from "../../../components/typography/text.component";
import {
  CartIcon,
  CartIconContainer,
  ClearButton,
  NameInput,
  PayButton,
  PaymentProcessing,
} from "../components/checkout.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { payRequest } from "../../../services/checkout/checkout.service";

export const CheckoutScreen = ({ navigation }) => {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);
  const [name, setName] = useState(null);
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onPay = () => {
    if (!card || !card.id) {
      console.log("some error");
      navigation.navigate("CheckoutError", {
        error: "Please fill in a valid credit card",
      });
      return;
    }
    setIsLoading(true);
    payRequest(card.id, sum, name)
      .then((res) => {
        setIsLoading(false);
        clearCart();
        navigation.navigate("CheckoutSuccess");
      })
      .catch((error) => {
        setIsLoading(false);
        navigation.navigate("CheckoutError", {
          error,
        });
      });
  };

  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text>Your cart is empty!</Text>
        </CartIconContainer>
      </SafeArea>
    );
  }

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      {isLoading && <PaymentProcessing />}
      <ScrollView>
        <Spacer position="left" size="medium">
          <Spacer position="top" size="large">
            <Text>Your Order</Text>
          </Spacer>
          <List.Section>
            {cart.map(({ item, price }, idx) => (
              <List.Item
                key={`item-${idx}`}
                title={`${item} - ${price / 100}`}
              />
            ))}
          </List.Section>
          <Text>Total: {sum / 100}</Text>
        </Spacer>
        <NameInput
          label="Name"
          value={name}
          onChangeText={(t) => {
            if (t.length) {
              setName(t);
            } else {
              setName(null);
            }
          }}
        />
        <Spacer />
        <Divider />
        <Spacer position="top" size="large">
          {name && (
            <CreditCardInput
              name={name}
              onSuccess={setCard}
              onError={() => {
                navigation.navigate("CheckoutError", {
                  error: "Something went wrong",
                });
              }}
            />
          )}
        </Spacer>

        <Spacer position="top" size="medium">
          <PayButton
            disabled={isLoading}
            icon="cash-usd"
            mode="contained"
            onPress={onPay}
          >
            Pay
          </PayButton>
        </Spacer>

        <Spacer position="top" size="large">
          <ClearButton
            disabled={isLoading}
            icon="cart-off"
            mode="contained"
            onPress={clearCart}
          >
            Clear Cart
          </ClearButton>
        </Spacer>
      </ScrollView>
    </SafeArea>
  );
};
