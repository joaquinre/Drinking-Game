import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Questions from './screens/Questions'
import Home from "./home";
import Players from "./screens/Players";

const Stack = createStackNavigator()
  
  export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home'}} />
          <Stack.Screen
          name="Questions"
          component={Questions}
          options={{ title: 'Jugar'}} />
          <Stack.Screen
          name="Players"
          component={Players}
          options={{ title: 'Add player'}} />
        </Stack.Navigator>
      </NavigationContainer>
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