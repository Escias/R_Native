import {ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import AppNavigator from './components/navigators/AppNavigator';

const App = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

  return (
    <ImageBackground
      style={styles.center}
      source={require('./assets/pokemon_background.png')}
      resizeMode="cover">
      <NavigationContainer theme={MyTheme}>
        <AppNavigator />
      </NavigationContainer>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
  },
});

export default App;
