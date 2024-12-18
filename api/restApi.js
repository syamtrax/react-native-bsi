import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  baseURL: "http://54.254.164.127/api/v1",
});

export const registerUser = async (fullName, email, password, noHp) => {
  try {
    const response = await api.post("/auth/register", {
      full_name: fullName,
      email: email,
      password: password,
      phone_number: noHp,
    });
    return response.data.data;
  } catch (error) {
    console.log(e.response.data);
    throw new Error(e.response.data);
  }
};

export const fetchData = async () => {
  const authToken = await AsyncStorage.getItem("accessToken");
  try {
    const response = await api.get("/users/me", {
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    });
    return response.data.data;
  } catch (e) {
    throw new Error("Failed to fetch posts " + e.message);
  }
};

export const FetchTopUp = async (type, from_to, amount, notes) => {
  const authToken = await AsyncStorage.getItem("accessToken");
  try {
    const intValue = parseInt(amount, 10);
    const response = await api.post(
      "/transactions",
      {
        type: type,
        from_to: from_to,
        amount: intValue,
        description: notes,
      },
      {
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      }
    );
    //console.log(response.data.data);
    return response.data.data;
  } catch (e) {
    console.log(e.response.data);
    throw new Error(e.response.data);
  }
};
export const FetchTransfer = async (type, from_to, amount, notes) => {
  const authToken = await AsyncStorage.getItem("accessToken");
  try {
    const intValue = parseInt(amount, 10);
    const response = await api.post(
      "/transactions",
      {
        type: type,
        from_to: from_to,
        amount: intValue,
        description: notes,
      },
      {
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      }
    );
    return response.data.data;
  } catch (e) {
    console.log(e.response.data);
    throw new Error(e.response.data);
  }
};

export const FetchTransaction = async () => {
  const authToken = await AsyncStorage.getItem("accessToken");
  try {
    const response = await api.get("/transactions", {
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    });
    //console.log(response.data.data);
    return response.data.data;
  } catch (e) {
    console.log(e.response.data.message);
    throw new Error(e.response.data);
  }
};

export default api;
