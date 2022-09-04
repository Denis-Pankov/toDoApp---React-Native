import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Список дел</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 35,
    height: 100,
    backgroundColor: "silver",
  },
  text: {
    fontSize: 35,
    color: "blue",
    textAlign: "center",
  },
});