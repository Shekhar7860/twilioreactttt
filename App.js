/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme
} from 'react-native';
import React, {useState} from 'react';

import Dialer from './Dialer'
import Form from './Form'
import Home from './Home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Dialer} options={{headerShown: false}}/>
      <Stack.Screen name="Form" component={Form} options={{headerShown: false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
