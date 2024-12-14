import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import logo from "../assets/LogoLogin.png";
import { UseAuth } from "../context/authContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = UseAuth();

  // AsyncStorage.getAllKeys((err, keys) => {
  //   AsyncStorage.multiGet(keys, (error, stores) => {
  //     stores.map((result, i, store) => {
  //       console.log({ [store[i][0]]: store[i][1] });
  //       return true;
  //     });
  //   });
  // });

  const handleLogin = () => {
    if (email === "Admin") {
      if (password === "") {
        setError("Password is empty");
      } else if (password === "1234") {
        setError("");
        login(email).then(() => {
          Alert.alert("Login Success", "Welcome back, Admin!", [
            {
              text: "OK",
              onPress: () => navigation.navigate("Home"),
            },
          ]);
        });
      } else {
        setError("Password is incorrect");
      }
    } else {
      setError("Invalid credentials");
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
          style={styles.inputForm}
          onChangeText={(value) => setEmail(value)}
        ></TextInput>
        <TextInput
          placeholder="Password"
          style={styles.inputForm}
          onChangeText={setPassword}
        ></TextInput>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", color: "white" }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <Text style={{ marginHorizontal: 15, color: "red" }}>{error}</Text>
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
