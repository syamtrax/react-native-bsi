import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { useEffect, useState, useCallback } from "react";
import logo from "../assets/LogoLogin.png";
import { UseAuth } from "../context/authContext";
import { useFocusEffect } from "@react-navigation/native";

export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { login } = UseAuth();

  useFocusEffect(
    useCallback(() => {
      return () => {};
    }, [])
  );

  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      Alert.alert("Login Success", `Welcome back, ${response}!`, [
        {
          text: "OK",
          onPress: () => navigation.navigate("Home"),
        },
      ]);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  const validateEmail = (text) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(text)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email address." }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  const validatePassword = (text) => {
    if (text.length > 0 && text.length <= 7) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must be at least 8 characters.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, password: "" }));
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        justifyContent: "center",
        flexDirection: "column",
        flex: 1,
        gap: 150,
      }}
    >
      <Image source={logo} style={styles.logoImage} />
      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          textContentType="email"
          style={styles.inputForm}
          autoCapitalize="none"
          onChangeText={(text) => {
            setEmail(text);
            validateEmail(text);
          }}
        ></TextInput>
        <TextInput
          placeholder="Password"
          autoCapitalize="none"
          textContentType="password"
          secureTextEntry={true}
          style={styles.inputForm}
          onChangeText={(text) => {
            setPassword(text);
            validatePassword(text);
          }}
        ></TextInput>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <Text style={{ marginHorizontal: 15, color: "red" }}>
          {errors.email !== "" || errors.password !== ""
            ? "Invalid credentials"
            : ""}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Text style={{ marginLeft: 15 }}>Don't have account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <Text style={{ color: "#19918F" }}>Register Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputForm: {
    backgroundColor: "#FAFBFD",
    margin: 15,
    padding: 20,
    borderRadius: 8,
  },
  loginButton: {
    backgroundColor: "#19918F",
    margin: 15,
    padding: 20,
    borderRadius: 8,
  },
  container: { marginHorizontal: 20 },
  logoImage: {
    height: 100,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    resizeMode: "contain",
  },
});
