import { SafeAreaView } from "react-native";
import NavHeader from "../components/header";

export default function Transfer({ navigation }) {
  return (
    <SafeAreaView>
      <NavHeader navigation={navigation}>Transfer</NavHeader>;
    </SafeAreaView>
  );
}
