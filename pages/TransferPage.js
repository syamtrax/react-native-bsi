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
    <SafeAreaView style={{ gap: 30 }}>
      <NavHeader navigation={navigation}>Transfer</NavHeader>;
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
        <ChevronDown />
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={{ fontSize: 16, color: "#B3B3B3" }}>Notes</Text>
        <View style={styles.inputArea}>
          <TextInput
            placeholder=""
            style={{ borderBottomWidth: 2, flex: 1, fontSize: 36 }}
          ></TextInput>
        </View>
      </View>
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
});
