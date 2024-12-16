import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import { ChevronDown } from "lucide-react-native";
import NavHeader from "../components/header";

export default function Transfer({ navigation }) {
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
                  }}
                ></TextInput>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 12, color: "#19918F" }}>Balance</Text>
                <Text style={{ fontSize: 12, color: "#19918F" }}>
                  IDR 10.000.000
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={{ fontSize: 16, color: "#B3B3B3" }}>Notes</Text>
            <View style={styles.inputArea}>
              <TextInput
                placeholder=""
                style={{ borderBottomWidth: 2, flex: 1, fontSize: 36 }}
              />
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonTopUp}>
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
});
