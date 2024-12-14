import { DataTable } from "react-native-paper";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "lucide-react-native";
import { useState, useEffect } from "react";

export default function Table() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const formatNumber = (number) => {
    return new Intl.NumberFormat("id-ID", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 3,
    }).format(number / 1);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const transaction = await fetch("http://localhost:3000/transactions");
        if (!transaction.ok) {
          throw new Error(`Failed to fetch`);
        }
        const transactionData = await transaction.json();
        setTransactions(transactionData);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <DataTable style ={{height : 250}}>
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
                    <Text style={{ fontSize: 14 }}>{transaction.from}</Text>
                    <Text style={{ fontSize: 12 }}>{transaction.type}</Text>
                    <Text style={{ fontSize: 10 }}>{transaction.date}</Text>
                  </View>
                </View>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text
                  style={{
                    textAlign: "right",
                    width: "100%",
                    paddingRight: 10,
                  }}
                >
                  {formatNumber(transaction.amount)}
                </Text>
              </DataTable.Cell>
            </DataTable.Row>
          ))}
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
});
