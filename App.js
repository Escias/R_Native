import React, {useCallback, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
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
