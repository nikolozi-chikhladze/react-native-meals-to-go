import React from "react";

import styled from "styled-components/native";

export const RestaurantList = styled.FlatList.attrs({
  contentContainerStyles: {
    padding: 16,
  },
})`
  padding: ${(props) => props.theme.space[3]};
`;