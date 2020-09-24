import React from "react";
import { Button, Image, TextInput, View } from "react-native";

export default function LoginScreen({ route }) {
  return (
    <View
      style={{
        flex: 5,
        backgroundColor: "#f3846c",
      }}
    >
      <Image
        style={{ flex: 2, resizeMode: "contain", marginLeft: 20 }}
        source={require("../assets/login_image.png")}
      />
      <View style={{ flex: 2 }}>
        <TextInput
          placeholder="Usuario"
          style={{ backgroundColor: "white", padding: 10, margin: 10 }}
        ></TextInput>
        <TextInput
          placeholder="Contraseña"
          style={{ backgroundColor: "white", padding: 10, margin: 10 }}
        ></TextInput>
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <Button title="Login" backgroundColor="white" color="#f3846c"></Button>
      </View>
    </View>
  );
}
