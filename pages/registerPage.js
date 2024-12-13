import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  StyleSheet,
} from "react-native";
import logo from "../assets/LogoLogin.png";

export default function RegisterPage({ navigation }) {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        justifyContent: "center",
        flexDirection: "column",
        flex: 1,
        gap: 100,
      }}
    >
      <Image source={logo} style={styles.logoImage} />
      <View style={styles.container}>
        <TextInput placeholder="Full Name" style={styles.inputForm}></TextInput>
        <TextInput placeholder="Email" style={styles.inputForm}></TextInput>
        <TextInput placeholder="Password" style={styles.inputForm}></TextInput>
        <TextInput
          placeholder="Avatar Url"
          style={styles.inputForm}
        ></TextInput>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text
            style={{ textAlign: "center", fontWeight: "bold", color: "white" }}
          >
            Register
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Text style={{ marginLeft: 15 }}>Have account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={{ color: "#19918F" }}>Login Here</Text>
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
