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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "TopUp") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          } else if (route.name === "Transfer") {
            iconName = focused ? "send" : "send-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={(props) => (
          <ProtectedRoute>
            <HomePage {...props} />
          </ProtectedRoute>
        )}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="TopUp"
        component={(props) => (
          <ProtectedRoute>
            <TopUp {...props} />
          </ProtectedRoute>
        )}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Transfer"
        component={(props) => (
          <ProtectedRoute>
            <Transfer {...props} />
          </ProtectedRoute>
        )}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={TabNavigator}
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
}

//export default App;
