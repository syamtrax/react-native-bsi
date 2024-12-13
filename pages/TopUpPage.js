import { SafeAreaView, View, Text, TextInput, StyleSheet } from "react-native";
import NavHeader from "../components/header";

export default function TopUp({ navigation }) {
  return (
    <SafeAreaView style={{ gap: 30 }}>
      <NavHeader navigation={navigation}>Top Up</NavHeader>;
      <View style={styles.container}>
        <Text style={{ fontSize: 16, color: "#B3B3B3" }}>Amount</Text>
        <View style={styles.inputArea}>
          <TextInput
            placeholder="Jembod"
            style={{ borderBottomWidth: 2, flex: 1, fontSize: 36 }}
          >
            <Text style={{ fontSize: 16, paddingRight: 10 }}>Rp</Text>
          </TextInput>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={{ fontSize: 16, color: "#B3B3B3" }}>Notes</Text>
        <View style={styles.inputArea}>
          <TextInput
            placeholder="Jembod"
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
});
