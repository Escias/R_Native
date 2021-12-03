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

  const image = useCallback(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/' + props.name)
      .then(response => response.json())
      .then(json => setImg(json.sprites.front_default))
      .catch(error => console.error(error));
    return img.toString();
  }, [img, props.name]);

  const navigateDetail = useCallback(() => {
    navigation.navigate('pokemonDetail', {name: props.name});
  }, [navigation]);

  return (
    <SafeAreaView style={styles.screen}>
      <TouchableOpacity onPress={navigateDetail}>
        <View>
          <Text>{props.name}</Text>
        </View>
        <View>
          <Image
            source={{
              uri: image()
                ? image()
                : 'https://www.pokepedia.fr/images/e/e2/Pok%C3%A9_Ball-RS.png',
            }}
            style={{
              width: 150,
              height: 150,
            }}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default ListDetail;
