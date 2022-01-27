import React from "react";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";

import { CartIconContainer, CartIcon } from "../components/checkout.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

export const CheckoutSuccessScreen = () => (
  <SafeArea>
    <CartIconContainer>
      <CartIcon icon="check-bold" />
      <Spacer position="top" size="large">
        <Text variant="label">Success</Text>
      </Spacer>
    </CartIconContainer>
  </SafeArea>
);
