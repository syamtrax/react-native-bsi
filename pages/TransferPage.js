import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
} from "react-native";
import { ChevronDown } from "lucide-react-native";
import NavHeader from "../components/header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FetchTransfer } from "../api/restApi";
import api from "../api/restApi";
import { useState, useEffect } from "react";
import { fetchData } from "../api/restApi";

export default function Transfer({ navigation }) {
  const [value, setValue] = useState(null);
  const [amount, setAmount] = useState(0);
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const [accountData, setAccountData] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(false);
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

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await fetchData();
      setAccountData(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const type = "d";
  const handleTransfer = async () => {
    try {
      if (accountData.balance - amount < 0) {
        Alert.alert("Invalid Request", "Your balance is insufficient", [
          {
            text: "OK",
          },
        ]);
        return false;
      }
      const response = await FetchTransfer(
        type,
        accountData.account_no,
        amount,
        notes
      );
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
      <View>
        <NavHeader navigation={navigation}>
          <Text>Transfer</Text>
        </NavHeader>
        <View style={{ gap: 30 }}>
          <View
            style={{
              backgroundColor: "#19918F",
              padding: 20,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
              To : 9000008940208
            </Text>
          </View>
          <View style={styles.container}>
            <Text style={{ fontSize: 16, color: "#B3B3B3", marginBottom: 15 }}>
              Amount
            </Text>
            <View style={styles.inputArea}>
              <View style={{ flexDirection: "row", borderBottomWidth: 2 }}>
                <Text style={{ fontSize: 16, paddingRight: 10 }}>Rp</Text>
                <TextInput
                  placeholder=""
                  style={{
                    //flex: 1,
                    fontSize: 36,
                    width: "100%",
                  }}
                  onChangeText={setAmount}
                  keyboardType="numeric"
                ></TextInput>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 12, color: "#19918F" }}>Balance</Text>
                {accountData && (
                  <Text style={{ fontSize: 12, color: "#19918F" }}>
                    IDR {accountData.balance}
                  </Text>
                )}
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={{ fontSize: 16, color: "#B3B3B3" }}>Notes</Text>
            <View style={styles.inputArea}>
              <TextInput
                placeholder=""
                onChangeText={setNotes}
                style={{ borderBottomWidth: 2, flex: 1, fontSize: 36 }}
              />
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={[
          styles.buttonTopUp,
          buttonDisabled ? styles.buttonDisabled : null,
        ]}
        onPress={handleTransfer}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Transfer
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 45,
    gap: 10,
  },
  inputArea: {
    height: 40,
    flexDirection: "column",
  },
  dropDown: {
    flexDirection: "row",
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
