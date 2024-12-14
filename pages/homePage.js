import { ScrollView, SafeAreaView, View } from "react-native";
import Navbar from "../components/navbar";
import AccountSummary from "../components/accountSummary";

import Table from "../components/table";

export default function App({ navigation }) {
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: "#FAFBFD",
          padding: 2,
        }}
      >
        <Navbar navigation={navigation} />
        <ScrollView>
          <AccountSummary navigation={navigation} />
          <Table />
        </ScrollView>
      </SafeAreaView>
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          width: "100%",
          height: 80,
          position: "absolute",
          bottom: 0,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
        }}
      ></View>
    </>
  );
}
