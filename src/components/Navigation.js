import React from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ShopScreen from './ShopScreen';
import Profile from './Profile';
import Faq from './Faq';
import Contact from './Contact';
import DetailScreen from './DetailScreen';
import BasketScreen from './BasketScreen';
import BasketIcon from './BasketIcon';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

export const StackMenu = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerTitleStyle: { color: '#9c678b' },
            headerStyle: { backgroundColor: '#b8bdbf' },
            headerTintColor: '#418c8b',
        }}>
            <Stack.Screen name="Home" component={HomeScreen} options={{
                headerLeft: () => <MaterialCommunityIcons style={{ paddingLeft: 10 }}
                    name="menu"
                    size={30}
                    color="#9c678b"
                    onPress={() => navigation.openDrawer()}
                />
            }} />
            <Stack.Screen name="Shop" component={ShopScreen} />
            <Stack.Screen name="Details" component={DetailScreen} />
            <Stack.Screen name="Basket" component={BasketScreen} />
            <Stack.Screen name="Contact" component={Contact} />
            <Stack.Screen name="FAQ" component={Faq} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
}
export const StackContact = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={{
            headerTitleStyle: { color: '#9c678b' },
            headerStyle: { backgroundColor: '#b8bdbf' },
            headerTintColor: '#9c678b',
        }}>
            <Stack.Screen name="Contact" component={Contact} options={{
                headerLeft: () => <MaterialCommunityIcons style={{ paddingLeft: 10 }}
                    name="keyboard-backspace"
                    size={30}
                    color="#9c678b"
                    onPress={() => navigation.goBack()}
                />
            }} />
        </Stack.Navigator>
    );
}
export const StackFAQ = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={{
            headerTitleStyle: { color: '#9c678b' },
            headerStyle: { backgroundColor: '#b8bdbf' },
            headerTintColor: '#9c678b',
            headerLeft: () => <MaterialCommunityIcons style={{ paddingLeft: 10 }}
                name="keyboard-backspace"
                size={30}
                color="#9c678b"
                onPress={() => navigation.goBack()}
            />
        }}>
            <Stack.Screen name="FAQ" component={Faq} />
        </Stack.Navigator>
    );
}
const StackShop = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={{
            headerTitleStyle: { color: '#9c678b' },
            headerStyle: { backgroundColor: '#b8bdbf' },
            headerTintColor: '#9c678b',
            headerRight: () => <BasketIcon onPress={() => navigation.navigate('Basket')} />
        }}>
            <Stack.Screen name="Shop" component={ShopScreen} options={{
                headerLeft: () => <MaterialCommunityIcons style={{ paddingLeft: 10 }}
                    name="menu"
                    size={30}
                    color="#9c678b"
                    onPress={() => navigation.openDrawer()}
                />,
            }} />
            <Stack.Screen name="Details" component={DetailScreen} />
            <Stack.Screen name="Basket" component={BasketScreen} />
        </Stack.Navigator>
    );
}
const StackProfile = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={{
            headerTitleStyle: { color: '#9c678b' },
            headerStyle: { backgroundColor: '#b8bdbf' },
            headerTintColor: '#9c678b',
            headerRight: () => <BasketIcon onPress={() => navigation.navigate('Basket')} />
        }}>
            <Stack.Screen name="Profile" component={Profile} options={{
                headerLeft: () => <MaterialCommunityIcons style={{ paddingLeft: 10 }}
                    name="menu"
                    size={30}
                    color="#9c678b"
                    onPress={() => navigation.openDrawer()}
                />,
            }} />
            <Stack.Screen name="Basket" component={BasketScreen} options={{
                headerLeft: () => <MaterialCommunityIcons style={{ paddingLeft: 10 }}
                    name="keyboard-backspace"
                    size={30}
                    color="#9c678b"
                    onPress={() => navigation.goBack()}
                />,
            }} />
        </Stack.Navigator>
    );
}
export const BottomTabBar = () => {
    return (<BottomTab.Navigator initialRouteName="Home" tabBarOptions={{
        activeTintColor: '#9c678b',
        inactiveTintColor: '#fff',
        showLabel: false,
        style: {
            backgroundColor: '#b8bdbf',
            borderTopColor: "transparent"
        }
    }}>
        <BottomTab.Screen name="Home" component={StackMenu} options={{
            tabBarIcon: ({ color }) => (
                <AntDesign name="home" color={color} size={30} />
            ),
        }} />
        <BottomTab.Screen name="Shop"
            component={StackShop}
            options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="storefront-outline" size={30} color={color} />
                ),
            }} />
        <BottomTab.Screen name="Profile" component={StackProfile} options={{
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account-outline" size={30} color={color} />
            ),
        }} />
    </BottomTab.Navigator>
    )
};

export default {
    StackMenu,
    BottomTabBar,
    StackFAQ,
    StackContact
};

