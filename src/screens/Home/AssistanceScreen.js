import React from 'react';
import {StyleSheet, View, Text, AsyncStorage} from 'react-native';

export default class AssistanceScreen extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Asistencia</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
});