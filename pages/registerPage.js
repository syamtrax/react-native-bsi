import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  StyleSheet,
  Modal,
  ScrollView,
  Alert,
} from "react-native";
import logo from "../assets/LogoLogin.png";
import { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import ModalComponent from "../components/modal";
import api, { registerUser } from "../api/restApi";

export default function RegisterPage({ navigation }) {
  const [checkBox, setCheckBox] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [noHp, setNoHP] = useState("");
  const [msg, setMsg] = useState("");
  const [errors, setErrors] = useState({});

  function handleModal() {
    setModalVisible(!modalVisible);
  }
  function handleCheckBox() {
    setCheckBox(!checkBox);
  }

  const handleRegister = async () => {
    try {
      const response = await registerUser(fullName, email, password, noHp);
      navigation.navigate("Login");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.errors);
        setMsg(error.response.data.msg);
        Alert.alert("Error", "Pokoke Error", [
          {
            text: "OK",
          },
        ]);
      }
    }
  };
  const validateFullname = (text) => {
    if (text.length <= 3) {
      setErrors((prev) => ({
        ...prev,
        fullname: "Fullname must be more than 3 characters.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, fullname: "" }));
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
    if (text.length <= 7) {
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
        gap: 100,
      }}
    >
      <Image source={logo} style={styles.logoImage} />
      <View style={styles.container}>
        <TextInput
          placeholder="Full Name"
          style={styles.inputForm}
          onChangeText={(text) => {
            setFullName(text);
            validateFullname(text);
          }}
          autoCapitalize="none"
        ></TextInput>
        <Text style={styles.errorlabel}>{errors.fullname}</Text>
        <TextInput
          placeholder="Email"
          style={styles.inputForm}
          onChangeText={(text) => {
            setEmail(text);
            validateEmail(text);
          }}
          autoCapitalize="none"
        ></TextInput>
        <Text style={styles.errorlabel}>{errors.email}</Text>
        <TextInput
          placeholder="Password"
          style={styles.inputForm}
          onChangeText={(text) => {
            setPassword(text);
            validatePassword(text);
          }}
          autoCapitalize="none"
        ></TextInput>
        <Text style={styles.errorlabel}>{errors.password}</Text>
        <TextInput
          placeholder="No HP"
          style={styles.inputForm}
          onChangeText={setNoHP}
          secureTextEntry={true}
        ></TextInput>
        <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
          <View style={styles.wrapperCheckBox}>
            <TouchableOpacity
              onPress={handleCheckBox}
              style={[styles.checkBox]}
            >
              {checkBox ? (
                <Feather
                  name="check"
                  style={{
                    fontSize: 16,
                  }}
                />
              ) : null}
            </TouchableOpacity>
            <Text style={styles.labelCheck}></Text>
          </View>
          <Text style={{ flexDirection: "row" }}>
            I have read and agree to the
            <TouchableOpacity
              // onPress={() => {
              //   navigation.navigate("TNC");
              // }}
              onPress={handleModal}
            >
              <Text style={{ color: "#19918F" }}>Terms and Conditions *</Text>
            </TouchableOpacity>
          </Text>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
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
      <ModalComponent visible={modalVisible} handle={handleModal} />
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
  checkBox: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperCheckBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  labelCheck: {
    color: "#fff",
    marginLeft: 6,
  },
  modal: {
    marginHorizontal: 20,
    marginVertical: 15,
    backgroundColor: "white",
    padding: 20,
    height: "100%",
  },
  errorlabel: {
    marginHorizontal: 20,
    color: "red",
  },
});
