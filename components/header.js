import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { ChevronLeft } from "lucide-react-native";
import { Button } from "react-native-web";

export default function NavHeader({ navigation, children }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <ChevronLeft style={{ color: "black" }} />
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignContent: "center",
    height: "80",
    backgroundColor: "white",
    paddingHorizontal: 20,
    boxShadow: "black",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
});
