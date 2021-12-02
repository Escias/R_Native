import React, {useEffect, useState} from 'react';
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

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/' + props.name)
      .then(response => response.json())
      .then(json => setImg(json.sprites.front_default))
      .catch(error => console.error(error));
  }, []);
  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <Text>{props.name}</Text>
      </View>
      <View>
        <Image
          source={{
            uri: img.toString(),
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default ListDetail;
