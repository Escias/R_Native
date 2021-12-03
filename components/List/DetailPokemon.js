import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import PokemonDescription from './PokemonDescription';

const DetailPokemon = props => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);

  useEffect(() => {
    (async function anyNameFunction() {
      await fetch(
        'https://pokeapi.co/api/v2/pokemon/' + props.route.params.name,
      )
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  if (data.abilities !== undefined) {
    return (
      <SafeAreaView style={styles.screen}>
        <View>
          <TouchableOpacity onPress={goBack}>
            <Image
              style={styles.img}
              source={require('../../assets/back.png')}
            />
          </TouchableOpacity>
        </View>
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
  img: {
    height: 50,
    width: 50,
    borderRadius: 150,
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 10,
  },
});

export default DetailPokemon;
