import React from "react";
import { Text, View, StyleSheet, ScrollView, Button } from "react-native";

export default function LastFiveDaysImages({LastFiveDaysImages}) {
  return (
    <View>
      <Text style={styles.tittle}>Last 5 Days</Text>
      <ScrollView style={styles.content}>
        <View style={styles.dataContent}>
          <Text style={styles.dataTitle}>RCW 86: Historical Supernova</Text>
          <Text style={styles.dataDate}>2023-11-15</Text>
          <View style={styles.button}>
            <Button title="View" />
          </View>
        </View>
        <View style={styles.dataContent}>
          <Text style={styles.dataTitle}>10 Days of Venus and Jupiter</Text>
          <Text style={styles.dataDate}>2023-11-15</Text>
          <View style={styles.button}>
            <Button title="View" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
  },
  content: {
    paddingHorizontal: 24,
  },
  tittle: {
    color: "#fff",
    fontSize: 15,
    marginBottom: 18,
    textAlign: "center",
  },
  dataContent: {
    marginTop: 16,
    backgroundColor: "#2c449d",
    borderRadius: 32,
    padding: 16,
    marginHorizontal: 24,
  },
  dataTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 12,
  },
  dataDate: {
    color: "#bbb",
    fontSize: 18,
    fontWeight: "bold",
  },
});
