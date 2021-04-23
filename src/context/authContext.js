import React, { createContext } from "react";
import { callApi } from "../api/host";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

export const signin = async (identifiant, password, setError, setUser) => {
  if (!identifiant || !password) {
    return setError("Merci de renseigner tous les champs");
  }
  try {
    const response = await callApi().post("/api/login_check", {
      username: identifiant,
      password: password,
    });
    if (response) {
      await AsyncStorage.setItem("token", JSON.stringify(response.data.token));
      setUser({ loggedIn: true });
    }
  } catch (err) {
    const {
      response: {
        data: { message },
      },
    } = err;
    setError(message);
  }
};

export const signout = async (setUser) => {
  setUser({ loggedIn: false });
  await AsyncStorage.removeItem("token");
};

export default AuthContext;
