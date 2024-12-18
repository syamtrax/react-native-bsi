import { DataTable } from "react-native-paper";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "lucide-react-native";

export default function Table({ transactions }) {
  const formatNumber = (number) => {
    return new Intl.NumberFormat("id-ID", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 3,
    }).format(number / 1);
  };

  return (
    <View style={styles.container}>
      <DataTable style={{ height: 250 }}>
        <DataTable.Header style={styles.tableHeader}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Transaction History
          </Text>
        </DataTable.Header>
        <ScrollView>
          {transactions.map((transaction) => (
            <DataTable.Row
              key={transaction.id}
              style={{ height: 100, borderBottomWidth: 0 }}
            >
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
                    <Text style={{ fontSize: 14 }}>{transaction.from_to}</Text>
                    <Text style={{ fontSize: 12 }}>
                      {transaction.type == "c" ? "Credit" : "Debit"}
                    </Text>
                    <Text style={{ fontSize: 10 }}>
                      {(() => {
                        const date = new Date(transaction.created_at);
                        const year = date.getUTCFullYear();
                        const month = String(date.getUTCMonth() + 1).padStart(
                          2,
                          "0"
                        );
                        const day = String(date.getUTCDate()).padStart(2, "0");
                        const hours = String(date.getUTCHours()).padStart(
                          2,
                          "0"
                        );
                        const minutes = String(date.getUTCMinutes()).padStart(
                          2,
                          "0"
                        );

                        // Return a readable format
                        return `${year}-${month}-${day} ${hours}:${minutes}`;
                      })()}
                    </Text>
                  </View>
                </View>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text
                  style={[
                    {
                      textAlign: "right",
                      width: "100%",
                      paddingRight: 10,
                      fontWeight: "bold",
                      color: "#19918F",
                    },
                    transaction.type == "c" ? styles.creditStyle : null,
                  ]}
                >
                  {formatNumber(transaction.amount)}
                </Text>
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </ScrollView>
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
  creditStyle: {
    color: "red",
  },
});
