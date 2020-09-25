import React from "react";
import { StyleSheet, View, Text, AsyncStorage, FlatList } from "react-native";
import orderFetch from "../../hooks/useOrder";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ffff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default class MyRequestsScreen extends React.Component {
  constructor() {
    super();

    this.state = {
        orders:[],
        spinner: false,
        error: false,
      };
  }
  async componentDidMount() { 
    await this._getData();
  }


  _getData = async () => {

    this.setState({ spinner: true });
    const { data } = await orderFetch();
    // const status = data.status;
    this.setState({ spinner: false }); 
    this.setState({ orders: data }); 
    // switch (status) {
    //   case 307:
    //   case 400:
    //     alert("Usuario y contraseña no válidos");
    //     break;
    //   case 404:
    //     alert("Usuario o contraseña inválida");
    //     break;
    //   case 200:
    //     {
    //       const response = await data.json();
    //       const authorization = data.headers.map.authorization;

    //       await AsyncStorage.setItem("authorization", authorization);
    //       await AsyncStorage.setItem("userName", email);
    //       await AsyncStorage.setItem("password", password);
    //       this.props.navigation.navigate("TabScreen");
    //       // this.props.navigation.replace("TabScreen");
    //     }
    //     break;
    // }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Mis solicitudes</Text>
        {this.state.spinner ? (
          <Text>Cargando</Text>
        ) : (
          <FlatList
            style={styles.list}
            data={this.state.orders}
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
  }
}

// const MyRequestsScreen = ({ navigation }) => {
//   const { loading, data: orders } = orderFetch();

//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <Text>Cargando</Text>
//       ) : (
//         <FlatList
//           style={styles.list}
//           data={orders}
//           keyExtractor={(x) => x.id}
//           renderItem={({ item }) => (
//             <ListItem
//               order={item}
//               onPress={() => navigation.navigate("Modal", { order: item })}
//             />
//           )}
//         ></FlatList>
//       )}
//     </View>
//   );
// };

// MyRequestsScreen.navigationOptions = {
//   title: "Ordenes",
// };



// export default MyRequestsScreen;
