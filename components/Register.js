import React, {useCallback, useState} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Register = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  let [isValidPassword, setValidPassword] = useState(false);
  let [isValidConfirmPassword, setValidConfirmPassword] = useState(false);

  const message = useCallback(() => {
    Alert.alert(
      `Bonjour ${firstname} ${lastname}, votre mot de passe est ${password}`,
    );
  }, [firstname, lastname, password]);

  const pass = useCallback(() => {
    setValidPassword(password.length >= 3 || password.length === 0);
  }, [password]);

  const confPass = useCallback(() => {
    return setValidConfirmPassword(password === confirmPassword);
  }, [confirmPassword, password]);

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.text}>Inscription</Text>
      <Image style={styles.img} source={require('./assets/avatar.jpg')} />
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
        style={[styles.input, isValidPassword ? undefined : styles.password1]}
        secureTextEntry={true}
        onChangeText={password => setPassword(password)}
        defaultValue={password}
        onEndEditing={pass}
        placeholder={'Mot de passe'}
      />
      <TextInput
        style={[
          styles.input,
          isValidConfirmPassword ? undefined : styles.password1,
        ]}
        secureTextEntry={true}
        onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
        defaultValue={confirmPassword}
        onEndEditing={confPass}
        placeholder={'Confirmation du mot de passe'}
      />
      <TouchableOpacity style={styles.button} onPress={message}>
        <Text>Envoyer</Text>
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

export default Register;
