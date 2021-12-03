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
      <SafeAreaView>
        <View style={styles.screen}>
          <View style={styles.sprites}>
            <Image
              source={{
                uri: props.data.sprites.front_default.toString(),
              }}
              style={{
                width: 300,
                height: 300,
              }}
            />
            <View>
              <Text style={styles.name_pokemon}>{props.data.name}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.title}>Ability</Text>
            <FlatList
              data={props.data.abilities}
              renderItem={({index, item}) => {
                return <Text>{item.ability.name}</Text>;
              }}
            />
          </View>
          <View>
            <Text style={styles.title}>Type</Text>
            <FlatList
              data={props.data.types}
              renderItem={({index, item}) => {
                return <Text>{item.type.name}</Text>;
              }}
            />
          </View>
          <View>
            <Text style={styles.title}>Stats</Text>
            <FlatList
              data={props.data.stats}
              renderItem={({index, item}) => {
                return (
                  <Text>
                    {item.stat.name} : {item.base_stat}{' '}
                  </Text>
                );
              }}
            />
          </View>

          <View />
        </View>
      </SafeAreaView>
    );
  } else {
    return <SafeAreaView style={styles.screen} />;
  }
};

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'column',
  },
  sprites: {
    alignContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  name_pokemon: {
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default PokemonDescription;
