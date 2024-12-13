import { ScrollView, SafeAreaView } from "react-native";
import Navbar from "./components/navbar";
import AccountSummary from "./components/accountSummary";
import Box from "./components/box";

export default function App({ navigation }) {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#FAFBFD",
        padding: 2,
      }}
    >
      <Navbar />
      <ScrollView>
        <AccountSummary navigation={navigation} />
        <Box style={{ backgroundColor: "red", marginVertical: 10 }}>Box 1</Box>
        <Box style={{ backgroundColor: "green", marginVertical: 10 }}>
          Box 1
        </Box>
        <Box style={{ backgroundColor: "blue", marginVertical: 10 }}>Box 1</Box>
        <Box style={{ backgroundColor: "red", marginVertical: 10 }}>Box 1</Box>
        <Box style={{ backgroundColor: "green", marginVertical: 10 }}>
          Box 1
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}
