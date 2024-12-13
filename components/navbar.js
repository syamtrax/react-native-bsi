import { View, Image, Text, Button, StyleSheet } from "react-native";
import Profile from "../assets/Profile.png";
import ToggleImage from "../assets/Toggle.png";

export default function Navbar() {
  return (
    <View style={styles.container}>
      <View style={styles.profileNavbar}>
        <Image source={Profile} style={styles.profileImage} />
        <View>
          <Text style={{ fontWeight: "bold" }}>Chelsea Immanuela</Text>
          <Text>Personal Account</Text>
        </View>
      </View>
      <Image source={ToggleImage} />
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
  profileImage: {
    height: 46,
    width: 46,
  },
  profileNavbar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
});
