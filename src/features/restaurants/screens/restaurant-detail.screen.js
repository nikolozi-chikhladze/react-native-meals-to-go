import React, { useState } from "react";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  const [breakfastIsExpanded, setBreakfastIsExpanded] = useState(false);
  const [lunchIsExpanded, setLunchIsExpanded] = useState(false);
  const [dinnerIsExpanded, setDinnerIsExpanded] = useState(false);
  const [drinksIsExpanded, setDrinksIsExpanded] = useState(false);

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
          <List.Item title="Classic Breakfast" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchIsExpanded}
          onPress={() => handleAccordionExpand("lunch")}
        >
          <List.Item title="Burget w/ Fries" />
          <List.Item title="Steak Sandiwch" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerIsExpanded}
          onPress={() => handleAccordionExpand("dinner")}
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal cutlet with Chicken Mushroom Rotini" />
          <List.Item title="Steak Frities" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksIsExpanded}
          onPress={() => handleAccordionExpand("drinks")}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Modelo" />
          <List.Item title="Coke" />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
