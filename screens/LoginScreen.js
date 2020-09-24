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
        style={{ flex: 2 }}
        source={require("../assets/login_image.png")}
      />
      <View style={{ flex: 2 }}>
        <TextInput placeholder="Usuario"></TextInput>
        <TextInput placeholder="Contraseña"></TextInput>
      </View>
      <View>
        <Button>
        </Button>
      </View>
    </View>
  );
}
