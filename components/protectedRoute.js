import React from "react";
import { View, ActivityIndicator } from "react-native";
import { UseAuth } from "../context/authContext";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const navigation = useNavigation();
  const { isLoggedIn } = UseAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      navigation.navigate("Login");
    }
  }, [isLoggedIn, navigation]);

  return isLoggedIn ? children : null;
};

export default ProtectedRoute;
