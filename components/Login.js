import React, {useCallback, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Login = () => {
  const navigation = useNavigation();
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const getData = () => {
    try {
      AsyncStorage.getItem('user').then(value => {
        if (value != null) {
          value = JSON.parse(value);
          console.log(typeof value);
          console.log(value[0].mail);
          if (value[0].mail === mail && value[0].password === password) {
            navigateToPokemonList();
          } else {
            Alert.alert('Warning', 'Email or password incorrect');
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const navigateToPokemonList = useCallback(() => {
    navigation.navigate('PokemonList');
  }, [navigation]);

  const navigateToRegister = useCallback(() => {
    navigation.navigate('Register');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.title}>
        <Image style={styles.img} source={require('../assets/pika_icon.png')} />
        <Text style={styles.titleText}>Login</Text>
      </View>
      <View style={styles.contents}>
        <TextInput
          style={styles.input}
          onChangeText={mail => setMail(mail)}
          defaultValue={mail}
          placeholder={'Mail address'}
        />
        <TextInput
          style={[styles.input]}
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
          defaultValue={password}
          placeholder={'Password'}
        />
        <TouchableOpacity style={styles.button} onPress={getData}>
          <Text>Connexion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToRegister}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  contents: {
    flex: 10,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 10,
  },
  screen: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 10,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: 150,
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 10,
  },
  input: {
    borderWidth: 2,
    width: 350,
    height: '12%',
    borderRadius: 10,
    marginVertical: 15,
    backgroundColor: 'rgba(240, 240, 240, 0.7)',
  },
  button: {
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 100,
    backgroundColor: 'rgba(150, 150, 150, 0.8)',
  },
  password1: {
    borderColor: 'red',
  },
});

export default Login;
