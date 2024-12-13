import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAuthState = async () => {
      const authState = await AsyncStorage.getItem("auth");

      if (authState === "true") {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };
    loadAuthState();
  }, []);

  const login = async (username) => {
    if (username === "Admin") {
      await AsyncStorage.setItem("auth", "true");
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const logout = async () => {
    await AsyncStorage.removeItem("auth");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuth = () => useContext(AuthContext);
