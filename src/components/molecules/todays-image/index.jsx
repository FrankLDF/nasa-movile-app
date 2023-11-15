import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

export default function TodaysImage({ date, title, url }) {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{ uri: url }} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.button}>
        <Button title="View" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    backgroundColor: "#2c449d",
    borderRadius: 32,
    padding: 16,
    marginHorizontal: 24,
  },
  image: {
    width: "100%",
    height: 190,
    borderWidth: 2,
    borderRadius: 32,
    borderColor: "#fff",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 12,
  },
  date: {
    color: "#bbb",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    alignItems: "flex-end",
  },
});
