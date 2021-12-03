import {ImageBackground, StyleSheet} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import AppNavigator from './components/navigators/AppNavigator';
import React from 'react';

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
