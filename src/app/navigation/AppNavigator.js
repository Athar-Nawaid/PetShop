import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ROUTES } from "./routes";
import PetFormScreen from "../../features/pet/screens/PetFormScreen";
import PetListScreen from "../../features/pet/screens/PetListScreen";
import CartScreen from "../../features/cart/screens/CartScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ROUTES.PET_FORM}>
        <Stack.Screen name={ROUTES.PET_FORM} component={PetFormScreen} />
        <Stack.Screen name={ROUTES.PET_LIST} component={PetListScreen} />
        <Stack.Screen name={ROUTES.CART} component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}