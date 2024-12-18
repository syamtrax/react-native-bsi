import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
} from "react-native";
import Sun from "../assets/Sun.png";
import { Plus, Send, Eye, EyeOff } from "lucide-react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function AccountSummary({ data }) {
  const [hideBalance, setHideBalance] = useState(true);
  const navigation = useNavigation();
  const [greeting, setGreeting] = useState("");

  const getGreeting = () => {
    const now = new Date();
    const hours = now.getHours();

    if (hours >= 5 && hours < 11) {
      setGreeting("Good Morning");
    } else if (hours >= 11 && hours < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  };
  useEffect(() => {
    getGreeting();
  });

  const toggleHideBalance = () => {
    setHideBalance(!hideBalance);
  };

  const formatNumber = (number) => {
    return new Intl.NumberFormat("id-ID", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 3,
    }).format(number / 1);
  };
  return (
    <View style={styles.accountSummary}>
      <View style={styles.accountGreeting}>
        <View style={styles.greetingText}>
          <Text style={styles.greeting}>
            {greeting}, {data.full_name?.split(" ")[0] || "Loading..."}
          </Text>
          <Text style={styles.subGreeting}>
            Check all your incoming and outgoing transactions here
          </Text>
        </View>
        <Image source={Sun}></Image>
      </View>

      <View style={styles.accountInfo}>
        <View style={styles.accountContainer}>
          <Text style={styles.accountLabel}>Account No.</Text>
          <Text style={styles.accountNumber}>{data.account_no}</Text>
        </View>
        <View style={styles.balanceContainer}>
          <View>
            <Text style={styles.balanceLabel}>Balance</Text>
            <View style={{ flexDirection: "row", gap: 4, width: "250" }}>
              <Text style={styles.balanceAmount}>
                {`Rp ${hideBalance ? formatNumber(data.balance) : "*******"}`}
              </Text>
              <TouchableOpacity onPress={toggleHideBalance}>
                {hideBalance ? (
                  <Eye style={{ color: "#19918F" }} />
                ) : (
                  <EyeOff style={{ color: "#19918F" }} />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.actionButtons}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("TopUp")}
            >
              <Plus color="white" size={24} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Transfer")}
            >
              <Send color="white" size={24} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  accountSummary: {
    marginBottom: 20,
    marginTop: 20,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  accountGreeting: {
    flexDirection: "row",
    height: 150,
    alignItems: "center",
  },
  greetingText: {
    flex: 1,
    gap: 20,
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subGreeting: {
    fontSize: 16,
    color: "#777",
  },
  accountInfo: {
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  accountLabel: {
    fontSize: 16,
    color: "white",
  },
  accountNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  balanceContainer: {
    borderRadius: 8,
    backgroundColor: "white",
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 120,
    paddingHorizontal: 20,
  },
  balanceLabel: {
    fontSize: 14,
    color: "#777",
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: "bold",
  },
  actionButtons: {
    gap: 4,
  },
  accountContainer: {
    backgroundColor: "#19918F",
    marginBottom: 20,
    height: 36,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  button: {
    backgroundColor: "#19918F",
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    height: 39,
    borderRadius: 8,
    width: 39,
  },
});
