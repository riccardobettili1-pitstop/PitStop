import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore 🌟</Text>
      <Text style={styles.subtitle}>Scopri le auto del futuro!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#111", 
    justifyContent: "center", 
    alignItems: "center" 
  },
  title: { 
    fontSize: 42, 
    fontWeight: "bold", 
    color: "#fff", 
    marginBottom: 10 
  },
  subtitle: { 
    fontSize: 22, 
    color: "#fff" 
  },
});