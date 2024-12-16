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
} from "react-native";
import logo from "../assets/LogoLogin.png";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import ModalComponent from "../components/modal";

export default function RegisterPage({ navigation }) {
  const [checkBox, setCheckBox] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  function handleModal() {
    setModalVisible(!modalVisible);
  }
  function handleCheckBox() {
    setCheckBox(!checkBox);
  }
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
});
