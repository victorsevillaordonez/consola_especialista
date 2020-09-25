import React from "react";
import { StyleSheet, View, Text, AsyncStorage, FlatList } from "react-native";
import orderFetch from "../../hooks/useOrder"; 
 
// export default class MyRequestsScreen extends React.Component {
//   constructor() {
//     super();
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         Mis solicitudes
//         {loading ? (
//           <Text>Cargando</Text>
//         ) : (
//           <FlatList
//             style={styles.list}
//             data={orders}
//             keyExtractor={(x) => x.id}
//             renderItem={({ item }) => (
//               <ListItem
//                 order={item}
//                 onPress={() => navigation.navigate("Modal", { order: item })}
//               />
//             )}
//           ></FlatList>
//         )}
//       </View>
//     );
//   }
// }

const MyRequestsScreen = ({ navigation }) => {
  const { loading, data: orders } = orderFetch();

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Cargando</Text>
      ) : (
        <FlatList
          style={styles.list}
          data={orders}
          keyExtractor={(x) => x.id}
          renderItem={({ item }) => (
            <ListItem
              order={item}
              onPress={() => navigation.navigate("Modal", { order: item })}
            />
          )}
        ></FlatList>
      )}
    </View>
  );
};

MyRequestsScreen.navigationOptions = {
  title: "Ordenes",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MyRequestsScreen;
