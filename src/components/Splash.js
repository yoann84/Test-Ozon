import React from "react";
import { View, ActivityIndicator } from "react-native";
import { color } from "../constants/color";

export default function Splash() {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: color.blue,
      }}
    >
      <ActivityIndicator color="white" size="large" />
    </View>
  );
}
