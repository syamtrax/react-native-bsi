import { ScrollView, SafeAreaView } from "react-native";
import Navbar from "./components/navbar";
import AccountSummary from "./components/accountSummary";
import Box from "./components/box";
import Table from "./components/table";

export default function App({ navigation }) {
  return (
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
  );
}
