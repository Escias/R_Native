import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const ListDetail = props => {
  const [img, setImg] = useState([]);

  const image = useCallback(() => {
    fetch(
      'https://pokeapi.co/api/v2/pokemon/' + props.item.pokemon_species.name,
    )
      .then(response => response.json())
      .then(json => setImg(json.sprites.front_default))
      .catch(error => console.error(error));
    return img.toString();
  }, [img, props.name]);

  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <Text style={styles.text}>{props.item.pokemon_species.name}</Text>
      </View>
      <View>
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
              props.item.entry_number +
              '.png',
          }}
          style={{
            width: 150,
            height: 150,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 2,
    borderRadius: 15,
    margin: 7,
    backgroundColor: '#D3D3D3',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default ListDetail;
