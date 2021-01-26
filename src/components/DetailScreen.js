import React, { useState } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { adding, liking, disliking } from './../store/action';

const DEVICE_WIDTH = Dimensions.get("window").width;
const height = Dimensions.get("window").height * 0.6;

const DetailScreen = ({ route, like, adding, liking, disliking }) => {
    let { item } = route.params;
    const isLike = like.some(el => el === item)

    return (
        <ScrollView style={styles.container}>
            <Image style={styles.pic} source={item.img} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.title}>{item.price}{item.value}</Text>
            <View style={styles.heart}>
                <MaterialCommunityIcons style={{ flex: 1, margin: 10 }} name={!isLike ? 'heart-outline' : 'heart'} onPress={() => !isLike ? liking(item) : disliking(item)} size={45} color="#9c678b" />
            </View>
            <TouchableOpacity
                style={{ flex: 1 }}
                onPress={() => adding(item)}
                style={styles.div}>
                <Text style={styles.button} >Add</Text>
            </TouchableOpacity>
            <Text style={styles.title}>{item.detail}</Text>
        </ScrollView>
    );
};

const mapStateToProps = state => {
    return { like: state.like };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
    },
    pic: {
        height,
        width: DEVICE_WIDTH,
    },
    heart: {
        flex: 1,
        position: "absolute",
        left: '85%'
    },
    pick: {
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        flex: 1,
        margin: 10,
        alignItems: "center",
        width: "50%",
        borderRadius: 8
    },
    div: {
        marginVertical: 20,
        borderRadius: 5,
        backgroundColor: '#9c678b',
        width: '30%',
        marginLeft: 10,
        flex: 1
    },
    title: {
        fontSize: 20,
        // fontWeight: "600",
        // fontFamily: "Allan-Regular",
        textShadowColor: '#73c5af',
        width: "90%",
        marginLeft: 10,
        flex: 1
    },
    button: {
        fontSize: 20,
        textAlign: "center",
        color: "#fff",
        flex: 1
    },
});

export default connect(mapStateToProps, { adding, liking, disliking })(DetailScreen);