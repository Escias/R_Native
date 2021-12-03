import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Login';
import Register from '../Register';
import PokemonList from '../List/PokemonList';
import DetailPokemon from '../List/DetailPokemon';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Login'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="list" component={PokemonList} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="PokemonList" component={PokemonList} />
      <Stack.Screen name="PokemonDetail" component={DetailPokemon} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
