import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PokemonDescription from './PokemonDescription';

const DetailPokemon = props => {
  const [data, setData] = useState([]);
  const [abilites, setAbilites] = useState([]);

  useEffect(() => {
    (async function anyNameFunction() {
      await fetch(
        'https://pokeapi.co/api/v2/pokemon/' + props.route.params.name,
      )
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    })();
  }, []);
  if (data.abilities !== undefined) {
    return (
      <SafeAreaView style={styles.screen}>
        <View>
          <PokemonDescription data={data} />
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView>
        <ActivityIndicator hidesWhenStopped={true} />
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'row',
    justifyItems: 'space-between',
  },
});

export default DetailPokemon;
