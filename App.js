// In App.js in a new project

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen'
import SingleNewsScreen from './src/screens/SingleNewsScreen'
import AdminScreen from './src/screens/AdminScreen';
import NewNewsScreen from './src/screens/NewNewsScreen';
import UpdateNewsScreen from './src/screens/UpdateNewsScreen';


const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Admin" component={AdminScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="News" component={SingleNewsScreen} />
      <Stack.Screen name="NewNews" component={NewNewsScreen} />
      <Stack.Screen name="UpdateNews" component={UpdateNewsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}