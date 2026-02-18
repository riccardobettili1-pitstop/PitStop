import React, { useEffect, useState } from "react";
import { Alert, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// --- COMPONENTE POPUP ---
const InstallPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (Platform.OS === "web") {
      const isIos = /iPhone|iPad|iPod/.test(window.navigator.userAgent);
      const nav = window.navigator as any;
      const isStandalone = nav.standalone === true || window.matchMedia('(display-mode: standalone)').matches;
      
      if (isIos && !isStandalone) {
        setShow(true);
      }
    }
  }, []);

  if (!show) return null;

  return (
    <View style={styles.popup}>
      <View style={styles.indicator} />
      <Text style={styles.popupTitle}>Installa PitGo su iPhone 🚀</Text>
      
      <View style={styles.instructionContainer}>
        <View style={styles.stepRow}>
          <Text style={styles.popupDesc}>1. Tocca il tasto </Text>
          {/* Usiamo l'icona ufficiale Apple tramite URL per evitare errori di libreria */}
          <Image 
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/IOS_Share_Icon.svg/1200px-IOS_Share_Icon.svg.png' }} 
            style={styles.shareIconImage} 
          />
          <Text style={styles.popupDesc}> in basso.</Text>
        </View>

        <Text style={[styles.popupDesc, { marginTop: 15 }]}>
          2. Scorri e seleziona {"\n"}
          <Text style={styles.highlightText}>"Aggiungi alla schermata Home"</Text>
        </Text>
      </View>

      <TouchableOpacity onPress={() => setShow(false)} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Ho capito</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function HomeScreen() {
  const handlePress = () => {
    Alert.alert("🚀 PitGo!!!", "Hai premuto il bottone!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PitGo! 🚗</Text>
      <Text style={styles.subtitle}>La tua app di prova</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Premi qui</Text>
      </TouchableOpacity>
      <InstallPopup />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000" },
  title: { fontSize: 52, fontWeight: "bold", color: "#fff" },
  subtitle: { fontSize: 24, color: "#fff", marginBottom: 20 },
  button: { backgroundColor: "#1E90FF", paddingHorizontal: 20, paddingVertical: 12, borderRadius: 8 },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  
  popup: {
    position: "absolute", bottom: 30, left: 15, right: 15,
    backgroundColor: "#1C1C1E", padding: 25, borderRadius: 25,
    borderWidth: 1, borderColor: "#38383A", alignItems: "center",
    zIndex: 999, shadowColor: "#000", shadowOpacity: 0.8, shadowRadius: 15,
  },
  indicator: { width: 40, height: 4, backgroundColor: "#38383A", borderRadius: 10, marginBottom: 15 },
  popupTitle: { color: "#fff", fontSize: 18, fontWeight: "bold", textAlign: "center", marginBottom: 15 },
  instructionContainer: { width: '100%' },
  stepRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  popupDesc: { color: "#AEAEB2", fontSize: 16, textAlign: "center" },
  highlightText: { color: "#fff", fontWeight: "bold" },
  
  // Stile per l'icona Share
  shareIconImage: {
    width: 22,
    height: 22,
    marginHorizontal: 8,
    tintColor: "#0A84FF", // Applichiamo il blu Apple direttamente all'immagine
  },

  closeButton: { marginTop: 20, padding: 10 },
  closeButtonText: { color: "#0A84FF", fontWeight: "bold", fontSize: 16 }
});