import React from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from '../Login';
import Register from '../Register';
import PokemonList from '../List/PokemonList';

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="PokemonList" component={PokemonList} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default AppNavigator;
