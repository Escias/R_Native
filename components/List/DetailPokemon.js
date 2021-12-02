import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const DetailPokemon = props => {
  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <Text>{props.name}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'row',
    justifyItems: 'space-between',
  },
});

export default DetailPokemon;
