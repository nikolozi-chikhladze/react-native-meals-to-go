import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { SettingsNavigator } from "./settings.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { CheckoutScreen } from "../../features/checkout/screens/checkout.screen";

import { CartContextProvider } from "../../services/cart/cart.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { CheckoutNavigator } from "./checkout.navigator";
import { colors } from "../theme/colors";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Checkout: "md-cart",
  Map: "md-map",
  Settings: "md-settings",
};

const tabBarIcon =
  (iconName) =>
  ({ focused, size, color }) =>
    (
      <Ionicons
        name={focused ? iconName : iconName + "-outline"}
        size={size}
        color={color}
      />
    );

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: tabBarIcon(iconName),
    tabBarActiveTintColor: colors.brand.primary,
    tabBarInactiveTintColor: colors.brand.muted,
    headerShown: false,
  };
};
export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <FavouritesContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <CartContextProvider>
              <Tab.Navigator screenOptions={createScreenOptions}>
                <Tab.Screen
                  name="Restaurants"
                  component={RestaurantsNavigator}
                />
                <Tab.Screen name="Checkout" component={CheckoutNavigator} />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Settings" component={SettingsNavigator} />
              </Tab.Navigator>
            </CartContextProvider>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavouritesContextProvider>
    </NavigationContainer>
  );
};

export default AppNavigator;
