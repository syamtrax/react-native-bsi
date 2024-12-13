import { DataTable } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "lucide-react-native";

export default function Table() {
  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header style={styles.tableHeader}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Transaction History
          </Text>
        </DataTable.Header>
        <DataTable.Row style={{ height: 100 }}>
          <DataTable.Cell
            style={{
              flexDirection: "column",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 5,
                paddingLeft: 9,
                alignItems: "center",
              }}
            >
              <Image></Image>
              <View>
                <Text style={{ fontSize: 14 }}>Satria Syammahestatma</Text>
                <Text style={{ fontSize: 12 }}>Transfer</Text>
                <Text style={{ fontSize: 10 }}>08 December 2024</Text>
              </View>
            </View>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text
              style={{ textAlign: "right", width: "100%", paddingRight: 10 }}
            >
              100000
            </Text>
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row style={{ height: 100 }}>
          <DataTable.Cell
            style={{
              flexDirection: "column",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 5,
                paddingLeft: 9,
                alignItems: "center",
              }}
            >
              <Image></Image>
              <View>
                <Text style={{ fontSize: 14 }}>Satria Syammahestatma</Text>
                <Text style={{ fontSize: 12 }}>Transfer</Text>
                <Text style={{ fontSize: 10 }}>08 December 2024</Text>
              </View>
            </View>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text
              style={{ textAlign: "right", width: "100%", paddingRight: 10 }}
            >
              100000
            </Text>
          </DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  tableHeader: { padding: 12 },
});
