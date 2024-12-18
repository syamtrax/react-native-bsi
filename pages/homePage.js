import { ScrollView, SafeAreaView, Dimensions } from "react-native";
import Navbar from "../components/navbar";
import AccountSummary from "../components/accountSummary";
import { RefreshControl } from "react-native";
import Table from "../components/table";
import api, { fetchData, FetchTransaction } from "../api/restApi";
import { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

export default function HomePage({ navigation }) {
  const [accountData, setAccountData] = useState(null);
  const [error, setError] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState();
  const getTransaction = async () => {
    try {
      const data = await FetchTransaction();
      setTransactions(data);
    } catch (error) {
      setError(error.message);
    }
  };
  useFocusEffect(
    useCallback(() => {
      return () => {};
    }, [])
  );

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      getData();
      getTransaction();
      setRefreshing(false);
    }, 2000);
  };

  useEffect(() => {
    getTransaction();
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoading(true);
      const data = await fetchData();
      setAccountData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  const { height: screenHeight } = Dimensions.get("window");
  return (
    <>
      {accountData && transactions && (
        <SafeAreaView
          style={{
            backgroundColor: "#FAFBFD",
            padding: 2,
            height: screenHeight,
          }}
        >
          <Navbar navigation={navigation} data={accountData} />
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            <AccountSummary navigation={navigation} data={accountData} />
            <Table transactions={transactions} />
          </ScrollView>
        </SafeAreaView>
      )}
    </>
  );
}
