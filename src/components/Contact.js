import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const Contact = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tel: 00-00-000-000</Text>
            <Text style={styles.text}>e-mail: Rufa@mail.com</Text>
            <Text style={styles.text}>Address: "Lorem ipsum dolor sit amet 145'</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20
    }
});

export default Contact;