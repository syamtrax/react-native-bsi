import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Easing,
  LayoutAnimation,
} from "react-native";

import NavHeader from "../components/header";
import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { useEffect } from "react";
import api, { FetchTopUp } from "../api/restApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";

export default function TopUp({ navigation }) {
  const [value, setValue] = useState(null);
  const [amount, setAmount] = useState(0);
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  //console.log(amount);

  useEffect(() => {
    const loadData = async () => {
      const authToken = await AsyncStorage.getItem("accessToken");

      try {
        setLoading(true);
        const response = await api.get("/users/me", {
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        });

        setData(response.data.data);
        setLoading(false);
      } catch (err) {}
    };
    loadData();
  }, []);

  const disableButton = () => {
    if (notes == "" || amount == "") {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  };

  useEffect(() => {
    disableButton();
  }, [amount, notes]);

  const dropDownData = [
    { label: "BYOND Pay", value: "BYOND Pay" },
    { label: "Hasanah Card", value: "Hasanah Card" },
    { label: "QRIS", value: "QRIS" },
    { label: "DEBIT", value: "DEBIT" },
  ];
  const type = "c";
  const handleTopUp = async () => {
    try {

      const response = await FetchTopUp(type, data.account_no, amount, notes);
      navigation.navigate("Home");

    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };
  return (
    <SafeAreaView
      style={{
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "center",
        flex: 1,
      }}
    >
      <View style={{ gap: 30 }}>
        <NavHeader navigation={navigation}>
          <Text>Top Up</Text>
        </NavHeader>
        <View style={styles.container}>
          <Text style={{ fontSize: 16, color: "#B3B3B3" }}>Amount</Text>
          <View style={styles.inputArea}>
            <TextInput
              placeholder="100"
              onChangeText={setAmount}
              style={{ borderBottomWidth: 2, flex: 1, fontSize: 36 }}
              keyboardType="numeric"
            ></TextInput>
          </View>
        </View>
        <Dropdown
          style={styles.dropDown}
          placeholder="Select Payment"
          data={dropDownData}
          labelField="label"
          valueField="value"
          value={value}
          onChange={(item) => setValue(item.value)}
          renderItem={(item) => (
            <View style={styles.item}>
              <Text style={styles.textItem}>{item.label}</Text>
            </View>
          )}
        />
        <View style={styles.container}>
          <Text style={{ fontSize: 16, color: "#B3B3B3" }}>Notes</Text>
          <View style={styles.inputArea}>
            <TextInput
              placeholder=""
              onChangeText={setNotes}
              style={{ borderBottomWidth: 2, flex: 1, fontSize: 16 }}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={[
          styles.buttonTopUp,
          buttonDisabled ? styles.buttonDisabled : null,
        ]}
        onPress={handleTopUp}
        disabled={buttonDisabled}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Top Up
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 40,
    gap: 10,
  },
  inputArea: {
    height: 40,
    flexDirection: "row",
  },
  dropDown: {
    padding: 20,
    backgroundColor: "white",
  },
  item: {
    padding: 20,
  },
  buttonPay: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  buttonTopUp: {
    backgroundColor: "#19918F",
    margin: 15,
    padding: 20,
    borderRadius: 8,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
});
