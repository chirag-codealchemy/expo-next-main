import React, { useMemo } from 'react';
import * as Linking from 'expo-linking'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home/Home';
import Login from '../screens/auth/Login';
import Setting from '../screens/settings/Setting';
import { Text, View } from 'react-native';


const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Setting" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App


