import React from "react";
import { StyleSheet, View, Text, AsyncStorage, Button } from "react-native";
import { createIconSetFromFontello } from "react-native-vector-icons";
import { StackActions } from "react-navigation";

export default class AssistanceScreen extends React.Component {
  constructor() {
    super();
  }
  _logoutnHandler = async () => {
    await AsyncStorage.setItem("userToken", "");

    this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Asistencia</Text>
        <Button title="Logout" onPress={this._logoutnHandler} color="#f3846c" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
