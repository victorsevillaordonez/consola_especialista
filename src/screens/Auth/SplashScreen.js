import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { CommonActions } from "@react-navigation/native";
import { AMUISplash } from "aranda.mobile.ui";

export default class SplashScreen extends Component {
  goToScreen(routeName) {
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: routeName,
        params: {
          user: "Victor Sevilla",
        },
      })
    );
    //Elimino del Stack al Splash
    this.props.navigation.dispatch((state) => {
      // Remove the home route from the stack
      const routes = state.routes.filter((r) => r.name !== "Splash");

      return CommonActions.reset({
        ...state,
        routes,
        index: routes.length - 1,
      });
    });
  }

  componentDidMount() {
    setTimeout(
      () => {
        this.goToScreen("Login");
      },
      2000,
      this
    );
  }

  render() {
    const title = {
      color: "#cb715e",
      fontSize: 20,
      label: "Aranda",
    };
    const subtitle = {
      color: "#cb715e",
      fontSize: 20,
      label: "SERVICE MANAGEMENT",
    };
    const image = require("./../../../assets/splash.png");

    return (
      <AMUISplash
        title={title}
        subtitle={subtitle}
        image={image}
        backgroundColor="#f3846c"
      />
    );
  }
}
