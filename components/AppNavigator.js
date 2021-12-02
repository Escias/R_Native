import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import PokemonList from './List/PokemonList';
import DetailPokemon from './List/DetailPokemon';

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOption={{headerShown: false}}>
      <Stack.Screen name={'pokemonList'} component={PokemonList} />
      <Stack.Screen name={'pokemonDetail'} component={DetailPokemon} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'row',
    justifyItems: 'space-between',
  },
});

export default AppNavigator;
