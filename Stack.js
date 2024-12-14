import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import App from "./pages/homePage";
import TopUp from "./pages/topUpPage";
import Transfer from "./pages/transferPage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import ProtectedRoute from "./components/protectedRoute";
import { AuthProvider } from "./context/authContext";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={(props) => (
              <ProtectedRoute>
                <App {...props} />
              </ProtectedRoute>
            )}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TopUp"
            component={(props) => (
              <ProtectedRoute>
                <TopUp {...props} />
              </ProtectedRoute>
            )}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Transfer"
            component={(props) => (
              <ProtectedRoute>
                <Transfer {...props} />
              </ProtectedRoute>
            )}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default AppStack;
