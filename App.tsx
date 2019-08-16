import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';

import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation'

import Home from './pages/home/Home'

const AppNavigator = createStackNavigator(
  {
    Home
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: '首页',
      headerStyle: {
        backgroundColor: '#ee7530',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
)


export default function App() {
  return (
    <View style={styles.container}>
      <Text>React native app start</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
