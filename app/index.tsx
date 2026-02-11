import { Text, View } from "react-native";

export default function Index() {
  console.log("🔥PitStop è partito!");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#111",
      }}
    >
      <Text style ={{fontSize:100, color: "white",fontWeight: "bold,"}}>
        PITSTOP 🚗
      </Text>
      <Text style={{ color: "Gray",marginTop: 10}}>
        La nostra app sta nascendo
      </Text>
    </View>
  );
}