import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import AuthContext from "../context/authContext";

const Landing = () => {
  const { setUser, signout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 30 }}>Vous êtes connecté</Text>
      <Button onPress={() => signout(setUser)} title="Se déconnecter" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Landing;
