import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import App from "./pages/homePage";
//import Transfer from "./pages/transferPage";
import Transfer from "./pages/TransferPage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import ProtectedRoute from "./components/protectedRoute";
import { AuthProvider } from "./context/authContext";
import HomePage from "./pages/homePage";
import TopUp from "./pages/TopUpPage";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={(props) => (
              <ProtectedRoute>
                <HomePage {...props} />
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

export default App;
