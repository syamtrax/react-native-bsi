import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Easing,
  LayoutAnimation,
} from "react-native";
import Profile from "../assets/Profile.png";
import ToggleImage from "../assets/Toggle.png";
import { useState, useEffect } from "react";
import { UseAuth } from "../context/authContext";

export default function Navbar({ navigation }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [balance, setBalance] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const balance = await fetch("http://localhost:3000/balance");
        if (!balance.ok) {
          throw new Error(`Failed to fetch`);
        }
        const balanceData = await balance.json();
        setBalance(balanceData);
        setError(null);
        setLoading(false);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  const customAnimation = LayoutAnimation.create(
    200,
    LayoutAnimation.Types.easeInEaseOut,
    LayoutAnimation.Properties.opacity
  );
  const { logout, isLoggedIn } = UseAuth();
  const toggleDropdown = () => {
    LayoutAnimation.configureNext(customAnimation);
    setIsDropdownVisible(!isDropdownVisible);
  };
  const handleLogout = () => {
    logout();
    navigation.navigate("Login");
    console.log(isLoggedIn);
  };
  return (
    <View>
      {isDropdownVisible && (
        <View style={styles.dropdown}>
          <TouchableOpacity style={styles.dropdownItem}>
            <Text>View Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem}>
            <Text>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem} onPress={handleLogout}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.profileNavbar}
          onPress={toggleDropdown}
        >
          <Image source={Profile} style={styles.profileImage} />
          <View>
            <Text style={{ fontWeight: "bold" }}>{balance.userName}</Text>
            <Text>{balance.accountType}</Text>
          </View>
        </TouchableOpacity>
        <Image source={ToggleImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignContent: "center",
    height: "80",
    backgroundColor: "white",
    paddingHorizontal: 20,
    boxShadow: "black",
    position: "relative",
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
  dropdown: {
    position: "absolute",
    top: 70,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    width: "100%",
    shadowOffset: { width: 0, height: 50 },
    zIndex: 10,
    toValue: 0,
    duration: 300,
    easing: Easing.out(Easing.quad),
    useNativeDriver: false,
  },
  dropdownItem: {
    padding: 10,
  },
});
