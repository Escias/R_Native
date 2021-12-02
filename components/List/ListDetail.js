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
    fetch('https://pokeapi.co/api/v2/pokemon/' + props.name)
      .then(response => response.json())
      .then(json => setImg(json.sprites.front_default))
      .catch(error => console.error(error));
    return img.toString();
  }, [img, props.name]);

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>{props.name}</Text>
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
