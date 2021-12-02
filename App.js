import {SafeAreaView, StyleSheet, View} from 'react-native';
import PokemonList from './components/List/PokemonList';
import React, {useCallback, useState} from 'react';

const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <PokemonList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
