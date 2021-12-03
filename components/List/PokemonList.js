import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import ListDetail from './ListDetail';

const PokemonList = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokedex/1/')
      .then(response => response.json())
      .then(json => setData(json.pokemon_entries))
      .catch(error => console.error(error));
  }, []);
  useEffect(() => {
    if (search === '') {
      setFilteredList(data);
      return;
    }
    let list;
    list = data.filter(item =>
      item.pokemon_species.name.includes(search.toLowerCase()),
    );
    setFilteredList(list);
  }, [search, data]);
  return (
    <SafeAreaView style={styles.screen}>
      <TextInput
        value={search}
        onChangeText={setSearch}
        style={styles.search}
        placeholder={'Search a pokemon'}
      />
      <View>
        <FlatList
          data={filteredList}
          renderItem={({index, item}) => {
            return <ListDetail item={item} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  search: {
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 30,
    marginHorizontal: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
});

export default PokemonList;
