import React, { useState, useContext } from "react";
import { List, Divider } from "react-native-paper";
import { ScrollView } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { OrderButton } from "../components/restaurant-list.styles";
import { CartContext } from "../../../services/cart/cart.context";

export const RestaurantDetailScreen = ({ navigation, route }) => {
  const { restaurant } = route.params;

  const [breakfastIsExpanded, setBreakfastIsExpanded] = useState(false);
  const [lunchIsExpanded, setLunchIsExpanded] = useState(false);
  const [dinnerIsExpanded, setDinnerIsExpanded] = useState(false);
  const [drinksIsExpanded, setDrinksIsExpanded] = useState(false);

  const { addToCart } = useContext(CartContext);

  const handleAccordionExpand = (type) => {
    switch (type) {
      case "breakfast":
        setBreakfastIsExpanded(!breakfastIsExpanded);
        break;
      case "lunch":
        setLunchIsExpanded(!lunchIsExpanded);
        break;
      case "dinner":
        setDinnerIsExpanded(!dinnerIsExpanded);
        break;
      case "drinks":
        setDrinksIsExpanded(!drinksIsExpanded);
        break;
    }
  };

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastIsExpanded}
          onPress={() => handleAccordionExpand("breakfast")}
        >
          <List.Item title="Eggs Benedict" />
          <Divider />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchIsExpanded}
          onPress={() => handleAccordionExpand("lunch")}
        >
          <List.Item title="Burget w/ Fries" />
          <Divider />
          <List.Item title="Steak Sandiwch" />
          <Divider />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerIsExpanded}
          onPress={() => handleAccordionExpand("dinner")}
        >
          <List.Item title="Spaghetti Bolognese" />
          <Divider />
          <List.Item title="Veal cutlet with Chicken Mushroom Rotini" />
          <Divider />
          <List.Item title="Steak Frities" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksIsExpanded}
          onPress={() => handleAccordionExpand("drinks")}
        >
          <List.Item title="Coffee" />
          <Divider />
          <List.Item title="Tea" />
          <Divider />
          <List.Item title="Modelo" />
          <Divider />
          <List.Item title="Coke" />
          <Divider />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView>
      <Spacer position="bottom" size="large">
        <OrderButton
          mode="contained"
          icon="cash-usd"
          onPress={() => {
            addToCart({ item: "special", price: 1299 }, restaurant);
            navigation.navigate("Checkout");
          }}
        >
          Order Special Only 12.99!
        </OrderButton>
      </Spacer>
    </SafeArea>
  );
};
