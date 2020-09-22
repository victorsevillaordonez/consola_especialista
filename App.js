/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import {
  AMUILabel
} from "aranda.mobile.ui";
import { useService } from "aranda.mobile.common";

export default function App() {
  const [users, isLoading] = useService(
    "https://jsonplaceholder.typicode.com/users"
  );
  const Item = ({ title }) => (
    <View style={styles.item}>
      <AMUILabel params={{
          color: "white",
          fontSize: 12,
          text: title,
        }}/>
    </View>
  );

  const renderItem = ({ item }) => <Item title={item.name} />;
  if (isLoading) {
    <Text>Cargando...</Text>;
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView style={styles.container}>
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#6A985B",
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 15,
  },
  title: {
    color: "white",
    fontSize: 20,
  },
});
