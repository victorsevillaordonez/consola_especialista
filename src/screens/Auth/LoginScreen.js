import React from "react";
import { CommonActions } from "@react-navigation/native";
import {
  Button,
  Image,
  TextInput,
  View,
  Text,
  StyleSheet,
  AsyncStorage,
} from "react-native";
import loginFetch from "../../hooks/useLogin";

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      spinner: false,
      error: false,
    };

    this._signInHandler = this._signInHandler.bind(this);
  }

  _signInHandler = async () => {
    // this.props.navigation.navigate("Mi portal");
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: "Mi portal"
      })
    );

    const { email, password } = this.state;
    this.setState({ spinner: true });
    const { data } = await loginFetch(email, password);
    const status = data.status;
    this.setState({ spinner: false });

    switch (status) {
      case 400:
        alert("Usuario y contraseña no válidos");
        break;
      case 404:
        alert("Usuario o contraseña inválida");
        break;
      case 200:
        {
          // const response = await data.json();
          const authorization = data.headers.map.authorization;

          await AsyncStorage.setItem("userToken", authorization);
          await AsyncStorage.setItem("userName", email);
          await AsyncStorage.setItem("password", password);
          this.props.navigation.navigate("TabScreen");
        }
        break;
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 5,
          backgroundColor: "#f3846c",
        }}
      >
        <Image
          style={{ flex: 2, resizeMode: "contain", marginLeft: 20 }}
          source={require("./../../../assets/login_image.png")}
        />
        <View style={{ flex: 2 }}>
          <TextInput
            placeholder="Usuario"
            keyboardType="email-address"
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
            style={{ backgroundColor: "white", padding: 10, margin: 10 }}
          ></TextInput>
          <TextInput
            placeholder="Contraseña"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
            style={{ backgroundColor: "white", padding: 10, margin: 10 }}
          ></TextInput>
        </View>
        {this.state.spinner && (
          <Text style={style.spinnerTextStyle}>Cargando ...</Text>
        )}
        <View
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              borderColor: "white",
              backgroundColor: "white",
              borderRadius: 8,
              marginLeft: 40,
              marginRight: 40,
              borderWidth: 1,
              padding: 1,
            }}
          >
            {!this.state.spinner && (
              <Button
                title="Login"
                onPress={this._signInHandler}
                color="#f3846c"
              />
            )}
          </View>
        </View>
      </View>
    );
  }
}

// const DEVICE_WIDTH = Dimensions.get("window").width;

const style = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // input: {
  //   backgroundColor: "#DAE1F1",
  //   width: DEVICE_WIDTH - 100,
  //   height: 40,
  //   marginHorizontal: 20,
  //   borderRadius: 20,
  //   color: "#333333",
  //   marginBottom: 30,
  //   paddingLeft: 15,
  // },
  spinnerTextStyle: {
    textAlign: "center",
  },
});
