import { useState } from "react";
import { View, Text, StyleSheet, TextInput, StatusBar } from "react-native";

export default function App() {
  const [nama, setNama] = useState("Nama");

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setNama}
        style={styles.border}
        placeholder="Input dengan nama"
      />
      <Text style={styles.tulisan}>Hello {nama}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    padding: 15,
    flex: 1,
  },
  tulisan: {
    fontSize: 60,
    fontWeight: "bold",
  },
  border: {
    borderColor: "black",
    borderWidth: 1,
    fontSize: 30,
    padding: 15,
    borderRadius: 10,
  },
});
