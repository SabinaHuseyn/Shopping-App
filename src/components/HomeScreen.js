import React from "react";
import { SafeAreaView, ScrollView, Image, Text, StyleSheet, Dimensions, View } from 'react-native';
// import Constants from 'expo-constants';

const images = [
    {
        id: 1,
        img: require('../../assets/images/slide-1.png')
    },
    {
        id: 2,
        img: require('../../assets/images/slide-2.jpg')
    },
    {
        id: 3,
        img: require('../../assets/images/slide-3.jpg')
    }
]
const DEVICE_WIDTH = Dimensions.get("window").width;
const height = Dimensions.get("window").height * 0.79;

class HomeScreen extends React.Component {
    scrollRef = React.createRef();
    state = {
        selectedIndex: 0
    };

    componentDidMount = () => {
        setInterval(() => {
            this.setState(
                prev => ({
                    selectedIndex:
                        prev.selectedIndex === images.length - 1
                            ? 0
                            : prev.selectedIndex + 1
                }),
                () => {
                    this.scrollRef.current.scrollTo({
                        animated: true,
                        x: DEVICE_WIDTH * this.state.selectedIndex,
                        y: 0
                    });
                }
            );
        }, 3000);
    };
    render() {
        const { selectedIndex } = this.state;
        if (images && images.length) {
            return (
                <SafeAreaView
                    style={styles.scrollContainer}
                >
                    <View style={styles.textBorder}>
                        <Text style={styles.text}>Spring & Summer Collection 2021</Text>
                    </View>
                    <ScrollView
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        ref={this.scrollRef}
                    >
                        {images.map(image => (
                            <Image key={image.id} style={styles.backgroundImage} source={image.img} />
                        ))}
                    </ScrollView>
                </SafeAreaView>
            );
        }
    }
}

const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: '#b8bdbf',
        height: "100%",
        width: "100%",
        alignItems: 'center',
    },
    backgroundImage: {
        height,
        width: DEVICE_WIDTH,
    },
    textBorder: {
        alignItems: 'center',
        justifyContent: 'center',
        position: "absolute",
        zIndex: 1,
        marginVertical: "100%",
    },
    text: {
        fontSize: 25,
        fontWeight: "bold",
        // fontFamily: "Allan-Regular",
        color: 'white',
        textShadowColor: '#73c5af'
    }
});
export default HomeScreen;

