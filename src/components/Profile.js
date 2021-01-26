import React, { useState } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, SafeAreaView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { adding, disliking } from '../store/action';

const DEVICE_WIDTH = Dimensions.get("window").width * 0.25;
const height = Dimensions.get("window").height * 0.25;

const Profile = ({ items, adding, disliking }) => {
    const [selectedId, setSelectedId] = useState(null);

    const Item = ({ item }) => (
        items.length > 0 ?
            <View key={(item, index) => index} style={styles.item}>
                <TouchableOpacity style={styles.item}>
                    <Image style={styles.pic} source={item.img} />
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.title}>{item.price}{item.value}</Text>
                    <MaterialCommunityIcons name='heart' onPress={() => disliking(item)} size={30} color="#9c678b" />
                    <TouchableOpacity onPress={() => adding(item)} style={styles.div}>
                        <Text style={styles.button}>Add</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
            :
            <View style={styles.noItem}>
                <Text style={{ fontSize: 25 }}>No items you saved</Text>
            </View>
    );

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? '#418c8b' : '#b5c5c1';

        return <Item item={item} onPress={() => setSelectedId(item.id)} style={{ backgroundColor }} />;
    }
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={(item, index) => index}
                extraData={selectedId}
                numColumns={1}
            />
        </SafeAreaView>
    )
}
const mapStateToProps = state => {
    return { items: state.like };
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
    noItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        borderColor: 'black',
        borderWidth: 50
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
        margin: 5,
        padding: 5,
        height: 35,
    },
    button: {
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
        margin: 5
    }
});
export default connect(mapStateToProps, { adding, disliking })(Profile);
