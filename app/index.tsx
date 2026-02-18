import React, { useEffect, useState } from "react";
import { Alert, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// --- COMPONENTE POPUP INTELLIGENTE ---
const InstallPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Eseguiamo il controllo solo se siamo sul Web
    if (Platform.OS === "web") {
      const isIos = /iPhone|iPad|iPod/.test(window.navigator.userAgent);
      
      // Risolviamo l'errore standalone usando il casting "as any"
      const nav = window.navigator as any;
      const isStandalone = nav.standalone === true || window.matchMedia('(display-mode: standalone)').matches;

      // Mostriamo il popup solo su iOS se l'app NON è già installata
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
      <Text style={styles.popupDesc}>
        Per un'esperienza completa, tocca l'icona <Text style={{ fontWeight: "bold", color: "#fff" }}>Condividi ↑</Text> e seleziona <Text style={{ fontWeight: "bold", color: "#fff" }}>"Aggiungi alla schermata Home"</Text>.
      </Text>
      <TouchableOpacity onPress={() => setShow(false)} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Ho capito</Text>
      </TouchableOpacity>
    </View>
  );
};

// --- SCHERMATA PRINCIPALE ---
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

      {/* Il popup viene renderizzato qui e si sovrappone grazie a position: absolute */}
      <InstallPopup />
    </View>
  );
}

// --- STILI ---
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#000" 
  },
  title: { 
    fontSize: 52, 
    fontWeight: "bold", 
    color: "#fff" 
  },
  subtitle: { 
    fontSize: 24, 
    color: "#fff", 
    marginBottom: 20 
  },
  button: { 
    backgroundColor: "#1E90FF", 
    paddingHorizontal: 20, 
    paddingVertical: 12, 
    borderRadius: 8 
  },
  buttonText: { 
    color: "#fff", 
    fontSize: 18, 
    fontWeight: "bold" 
  },
  
  // Stili Popup migliorati per stile Dark
  popup: {
    position: "absolute",
    bottom: 30,
    left: 15,
    right: 15,
    backgroundColor: "#1C1C1E", // Grigio scuro stile Apple Dark Mode
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#38383A",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 20,
    zIndex: 999,
  },
  indicator: {
    width: 40,
    height: 4,
    backgroundColor: "#38383A",
    borderRadius: 10,
    marginBottom: 15,
  },
  popupTitle: { 
    color: "#fff", 
    fontSize: 18, 
    fontWeight: "bold", 
    textAlign: "center", 
    marginBottom: 10 
  },
  popupDesc: { 
    color: "#AEAEB2", 
    fontSize: 14, 
    textAlign: "center", 
    lineHeight: 20 
  },
  closeButton: { 
    marginTop: 20, 
    padding: 10 
  },
  closeButtonText: { 
    color: "#0A84FF", 
    fontWeight: "bold", 
    fontSize: 16 
  }
});