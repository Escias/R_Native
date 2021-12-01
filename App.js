import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  return <SafeAreaView style={styles.screen} />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default App;
