import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ListDetail = props => {
  const [img, setImg] = useState([]);
  const navigation = useNavigation();
  const navigateDetail = useCallback(() => {
    navigation.navigate('PokemonDetail', {
      name: props.item.pokemon_species.name,
    });
  }, [navigation, props.item.pokemon_species.name]);

  return (
    <TouchableOpacity style={styles.screen} onPress={navigateDetail}>
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
    </TouchableOpacity>
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
    backgroundColor: 'rgba(210, 210, 210, 0.7)',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default ListDetail;
