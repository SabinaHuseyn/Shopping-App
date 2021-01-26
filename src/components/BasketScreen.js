import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, SafeAreaView, FlatList } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { removing, addQuantity, subQuantity } from '../store/action';

const DEVICE_WIDTH = Dimensions.get("window").width * 0.25;
const height = Dimensions.get("window").height * 0.25;

const BasketScreen = ({ items, removing, total, addQuantity, subQuantity }) => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        return (
            items.length > 0 ?
                <View key={(item, index) => index} style={styles.item}>
                    <View style={styles.item}>
                        <Image style={styles.pic} source={item.img} />
                        <Text style={styles.title}>{item.title}</Text>
                        <View style={styles.count}>
                            <TouchableOpacity onPress={() => addQuantity(item)} ><AntDesign name="up" size={24} color="black" /></TouchableOpacity>
                            <Text style={{ fontSize: 20, padding: 7 }}>{item.count}</Text>
                            <TouchableOpacity onPress={() => subQuantity(item)}><AntDesign name="down" size={24} color="black" /></TouchableOpacity>
                        </View>
                        <Text style={styles.title}>{item.price * item.count}{item.value}</Text>
                        <TouchableOpacity
                            style={styles.div}>
                            <Text style={styles.button} onPress={() => removing(item)}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                :
                <View style={styles.item}>
                    <Text style={{ fontSize: 25 }}>No items in your cart</Text>
                </View>
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={(item, index) => index}
                extraData={selectedId}
                numColumns={1}
            />
            <View style={styles.total}><Text style={{ fontSize: 20, color: "#fff" }}>Total:{total}USD</Text></View>
        </SafeAreaView>
    )
}
const mapStateToProps = state => {
    return {
        items: state.cart.items,
        total: state.cart.total
    };
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
    },
    item: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        margin: 5,
        borderRadius: 5,
        borderColor: "black",
    },
    pic: {
        width: DEVICE_WIDTH,
        height: height * 0.5,
        flex: 1,
        margin: 5,
    },
    div: {
        flex: 1,
        borderRadius: 5,
        backgroundColor: '#9c678b',
        margin: 7,
        padding: 7,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
    },
    noItem: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: '100%',
        flex: 1,
        fontSize: 20,
        textAlign: "center",
        color: "#fff",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        width: '100%',
        flex: 1,
    },
    total: {
        width: '100%',
        height: 50,
        flex: 1,
        backgroundColor: "#b8bdbf",
        justifyContent: "center",
        alignItems: 'center',
        borderColor: '#9c678b',
        position: 'absolute',
        top: '93%'
    },
    count: {
        flex: 1,
        fontSize: 20,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 40,
    }
});
export default connect(mapStateToProps, { removing, addQuantity, subQuantity })(BasketScreen);