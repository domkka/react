import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [person, setPerson] = useState({ name: "Mario", age: 22 });

  const clickHandler = () => {
    setName("Nicht Dom");
    setPerson({ name: "luigi", age: 30 });
  };

  return (
    <View style={styles.container}>
      <Text> Enter name:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g Wixkopf"
        onChangeText={(e) => setName(e)}
      />
      <Text> Enter age:</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="e.g 18"
        onChangeText={(e) => setAge(e)}
      />
      <Text style={styles.boldText}>Hallo {name}</Text>
      <Text>
        His name is {name} and his age is {age}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Update Name" onPress={clickHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "lightblue",
    padding: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "blue",
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
    borderRadius: 20,
  },
});
