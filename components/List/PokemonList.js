import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ListDetail from './ListDetail';

const PokemonList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokedex/1/')
      .then(response => response.json())
      .then(json => setData(json.pokemon_entries))
      .catch(error => console.error(error));
  }, []);
  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <FlatList
          data={data}
          renderItem={({index, item}) => {
            return <ListDetail name={item.pokemon_species.name} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default PokemonList;
