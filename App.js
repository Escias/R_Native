import {SafeAreaView, StyleSheet, View} from 'react-native';
import PokemonList from './components/List/PokemonList';
import React, {useCallback, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AppNavigator from './components/navigators/AppNavigator';

const App = () => {
  return (
    <NavigationContainer style={styles.screen}>
      <AppNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
