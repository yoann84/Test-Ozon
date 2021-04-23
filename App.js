import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "./src/screens/Signin";
import Landing from "./src/screens/Landing";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./src/components/Splash";
import AuthContext from "./src/context/authContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import { signin, signout } from "./src/context/authContext";

const AuthStack = createStackNavigator();

export default function Auth() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({ loggedIn: false });
  const state = { user, setUser, signin, signout };

  useEffect(() => {
    setTimeout(() => setLoading(false), 700);
    (async function getAndVerifyToken() {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        let decoded = jwt_decode(token);
        if (decoded.exp) {
          setUser({ loggedIn: true });
        }
      }
    })();
  }, []);

  if (loading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={state}>
      <NavigationContainer>
        <AuthStack.Navigator>
          {!user.loggedIn ? (
            <AuthStack.Screen
              name="Signin"
              component={Signin}
              unmountOnBlur={true}
              options={{ headerShown: false }}
            />
          ) : (
            <AuthStack.Screen
              name="Landing"
              component={Landing}
              options={{ headerShown: false }}
            />
          )}
        </AuthStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
