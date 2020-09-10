/**
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { ActivityIndicator,Text, View, FlatList, StyleSheet, } from 'react-native';
import getItemList from './services/service-item-list';

export default function App() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getItemList()
    .then((json) => setData(json.SearchAdvancedResult.data))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  });

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <Text>{item.subject}</Text>
          )}
        />
      )}
    </View>
  );
}
