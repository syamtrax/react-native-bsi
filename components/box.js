import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export default function Box({ children, style }) {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "blue",
    padding: 10,
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    color: "white",
  },
});
