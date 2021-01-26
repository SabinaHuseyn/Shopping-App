import React, { useState, useEffect } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView, View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import Data from "../assets/Data";
import { adding, liking, disliking } from './../store/action';

const DEVICE_WIDTH = Dimensions.get("window").width * 0.25;
const height = Dimensions.get("window").height * 0.25;

const ShopScreen = ({ navigation, adding, liking, disliking, like }) => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const isLike = like.some(el => el === item)
        return (
            < View style={[styles.item]} >
                <TouchableOpacity onPress={() => navigation.navigate('Details', { item })} >
                    <Image key={item.id} style={styles.pic} source={item.img} onPress={() => setSelectedId(item.id)} />
                </TouchableOpacity>
                <View>
                    <MaterialCommunityIcons name={!isLike ? 'heart-outline' : 'heart'} onPress={() => !isLike ? liking(item) : disliking(item)} size={30} color="#9c678b" />
                </View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.title}>{item.price}{item.value}</Text>
                <TouchableOpacity onPress={() => adding(item)} style={styles.div}>
                    <Text style={styles.button}>Add</Text>
                </TouchableOpacity>
            </View >
        )
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={Data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
                numColumns={2}
            />
        </SafeAreaView>
    );
}
const mapStateToProps = state => {
    return { like: state.like };
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        margin: 15,
        borderRadius: 5,
        padding: 5,
        width: DEVICE_WIDTH * 1.7,
        height: height * 1.7,
        backgroundColor: '#b8bdbf',
    },
    // pick: {
    //     backgroundColor: 'green',
    //     // alignItems: 'center',
    //     // justifyContent: 'center',
    //     flex: 1,
    //     marginTop: 20,
    //     alignItems: "center",
    //     // width: "100%"
    // },
    pic: {
        width: '100%',
        height: '100%',
        marginBottom: -120,
    },
    div: {
        marginVertical: 20,
        borderRadius: 5,
        backgroundColor: '#9c678b',
        width: '50%',
    },
    button: {
        fontSize: 20,
        textAlign: "center",
        color: "#fff",
        // flex: 1
    },
    title: {
        fontSize: 18,
        width: '100%',
        // flex: 1,
    }
});

export default connect(mapStateToProps, { adding, liking, disliking })(ShopScreen);