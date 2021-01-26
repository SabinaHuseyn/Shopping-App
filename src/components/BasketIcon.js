import React from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

const BasketIcon = ({ item, onPress }) => {
    return (
        <View>
            <View style={styles.container}><Text style={{ fontWeight: 'bold', color: '#9c678b' }}>{item.length}</Text></View>
            <MaterialCommunityIcons style={{ paddingRight: 10 }} onPress={() => onPress()}
                name="basket-outline" size={30} color="#9c678b"
            />
        </View>
    );
};

const mapStateToProps = (state) => {
    return { item: state.cart.items };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 30,
        height: 30,
        backgroundColor: '#fff',
        borderRadius: 15,
        position: "absolute",
        right: 20,
        bottom: 15,
        zIndex: 0,
        alignItems: 'center',
        justifyContent: "center"
    },
})
export default connect(mapStateToProps)(BasketIcon);