import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ListDetail from './ListDetail';

const PokemonDescription = props => {
  if (props.data) {
    return (
      <View style={styles.screen}>
        <Image
          source={{
            uri: props.data.sprites.front_default.toString(),
          }}
          style={styles.image}
        />
        <Text style={styles.name_pokemon}>{props.data.name}</Text>
        <Text style={styles.title}>Ability</Text>
        <FlatList
          data={props.data.abilities}
          renderItem={({index, item}) => {
            return <Text style={styles.content}>{item.ability.name}</Text>;
          }}
        />
        <Text style={styles.title}>Type</Text>
        <FlatList
          data={props.data.types}
          renderItem={({index, item}) => {
            return <Text style={styles.content}>{item.type.name}</Text>;
          }}
        />
        <Text style={styles.title}>Stats</Text>
        <FlatList
          data={props.data.stats}
          renderItem={({index, item}) => {
            return (
              <Text style={styles.content}>
                {item.stat.name} : {item.base_stat}{' '}
              </Text>
            );
          }}
        />
      </View>
    );
  } else {
    return <SafeAreaView style={styles.screen} />;
  }
};

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '95%',
    margin: 10,
    marginLeft: 35,
    marginRight: 100,
  },
  sprites: {
    backgroundColor: 'red',
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: 'stretch',
  },
  name_pokemon: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    borderWidth: 1,
  },
  content: {
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
});

export default PokemonDescription;
