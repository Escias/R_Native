import {SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './components/AppNavigator';

export default function App() {
  return (
    <NavigationContainer style={styles.screen}>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
});
