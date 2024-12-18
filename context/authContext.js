import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../api/restApi";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAuthState = async () => {
      const authState = await AsyncStorage.getItem("auth");
      const authToken = await AsyncStorage.getItem("accessToken");
      //console.log(authToken);
      setToken(authToken);

      if (authState === "true") {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };
    loadAuthState();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await api.post("/auth/login", {
        email: email,
        password: password,
      });
      //console.log(response.data.data.user.full_name);

      await AsyncStorage.setItem("auth", "true");
      await AsyncStorage.setItem("accessToken", response.data.data.token);

      setIsLoggedIn(true);
      return response.data.data.user.full_name;
    } catch (error) {
      console.log(error.response.data);

      return false;
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("auth");
      await AsyncStorage.removeItem("accessToken");
      const token = await AsyncStorage.getItem("accessToken");
      console.log("Logged out successfully");
    } catch (error) {
      console.log("Error removing token:", error);
    }
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuth = () => useContext(AuthContext);
