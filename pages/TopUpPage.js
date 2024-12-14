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
      <View style={{ gap: 30 }}>
        <NavHeader navigation={navigation}>
          <Text>Top Up</Text>
        </NavHeader>
        <View style={styles.container}>
          <Text style={{ fontSize: 16, color: "#B3B3B3" }}>Amount</Text>
          <View style={styles.inputArea}>
            <TextInput
              placeholder=""
              style={{ borderBottomWidth: 2, flex: 1, fontSize: 36 }}
            >
              <Text style={{ fontSize: 16, paddingRight: 10 }}>Rp</Text>
            </TextInput>
          </View>
        </View>
        <TouchableOpacity style={styles.buttonPay}>
          <Text style={{ fontSize: 16 }}>BYOND Pay</Text>
          <Text>
            <ChevronDown />
          </Text>
        </TouchableOpacity>
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
      <TouchableOpacity style={styles.buttonTopUp}>
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
