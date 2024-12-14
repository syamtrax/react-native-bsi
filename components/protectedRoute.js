import React from "react";
import { View, ActivityIndicator } from "react-native";
import { UseAuth } from "../context/authContext";
import { useNavigation } from "@react-navigation/native";

const ProtectedRoute = ({ children }) => {
  const navigation = useNavigation();
  const { isLoggedIn } = UseAuth();
  return isLoggedIn ? children : navigation.navigate("Login");
};

export default ProtectedRoute;
