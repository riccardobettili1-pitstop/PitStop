import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const handlePress = () => {
    Alert.alert("🚀 PitGo!!!", "Hai premuto il bottone!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PitGo 🚗</Text>
      <Text style={styles.subtitle}>La tua app di prova</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Premi qui</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000" },
  title: { fontSize: 52, fontWeight: "bold", color: "#fff" },
  subtitle: { fontSize: 24, color: "#fff", marginBottom: 20 },
  button: { backgroundColor: "#1E90FF", paddingHorizontal: 20, paddingVertical: 12, borderRadius: 8 },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});