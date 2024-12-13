import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import App from "./App";
import TopUp from "./pages/TopUpPage";
import Transfer from "./pages/TransferPage";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={App}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TopUp"
          component={TopUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Transfer"
          component={Transfer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
