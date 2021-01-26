import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StackFAQ, StackContact, BottomTabBar } from './src/components/Navigation';
import reducers from './src/store/reducers';

const store = createStore(
  reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer >
          <Drawer.Navigator options={{
            activeTintColor: '#418c8b',
            inactiveTintColor: 'grey',
          }}>
            <Drawer.Screen name="Let Shop" component={BottomTabBar} />
            <Drawer.Screen name="Contact" component={StackContact} />
            <Drawer.Screen name="FAQ" component={StackFAQ} />
          </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}
export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });