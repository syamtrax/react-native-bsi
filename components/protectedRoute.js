import React from "react";
import { View, ActivityIndicator } from "react-native";
import { useAuth } from "../context/authContext";
import { useNavigation } from "@react-navigation/native";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  const navigation = useNavigation();

  if (!isLoggedIn) {
    navigation.replace("Login");
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return children;
};

export default ProtectedRoute;
