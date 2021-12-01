import React, {useCallback, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Login = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.text}>Inscription</Text>
      <Image style={styles.img} source={require('../assets/avatar.jpg')} />
      <TextInput
        style={styles.input}
        onChangeText={firstname => setFirstname(firstname)}
        defaultValue={firstname}
        placeholder={'Prénom'}
      />
      <TextInput
        style={styles.input}
        onChangeText={lastname => setLastname(lastname)}
        defaultValue={lastname}
        placeholder={'Nom'}
      />
      <TextInput
        style={[styles.input]}
        secureTextEntry={true}
        onChangeText={password => setPassword(password)}
        defaultValue={password}
        placeholder={'Mot de passe'}
      />
      <TouchableOpacity style={styles.button}>
        <Text>Connexion</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
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
    flex: 1,
    width: 200,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 150,
  },
  input: {
    borderWidth: 2,
    width: '95%',
    height: '12%',
    borderRadius: 10,
    marginVertical: 15,
    backgroundColor: '#DDDDDD',
  },
  button: {
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 100,
  },
  password1: {
    borderColor: 'red',
  },
});

export default Login;
