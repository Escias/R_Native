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

const Register = () => {
  const navigation = useNavigation();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  let [isValidPassword, setValidPassword] = useState(false);
  let [isValidConfirmPassword, setValidConfirmPassword] = useState(false);

  const setData = async () => {
    if (firstname.length === 0 || lastname.length === 0 || mail.length === 0) {
      Alert.alert('Warning', 'fill all input');
    } else if (
      password.match(
        '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,20}$',
      ) === false
    ) {
      Alert.alert(
        'Warning',
        'Password must contain 8 character, with at least 1 uppercase, 1 lowercase, 1 number and 1 special character',
      );
    } else {
      let value = [
        {
          firstname: firstname,
          lastname: lastname,
          mail: mail,
          password: password,
        },
      ];
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('user', jsonValue);
        navigateToLogin();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const navigateToLogin = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);

  const pass = useCallback(() => {
    setValidPassword(
      password.match(
        '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,20}$',
      ) === false ||
        password.length === 0 ||
        password === '',
    );
  }, [password]);

  const confPass = useCallback(() => {
    return setValidConfirmPassword(password === confirmPassword);
  }, [confirmPassword, password]);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.title}>
        <Image style={styles.img} source={require('../assets/pika_icon.png')} />
        <Text style={styles.titleText}>Register</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={firstname => setFirstname(firstname)}
        defaultValue={firstname}
        placeholder={'Firstname'}
      />
      <TextInput
        style={styles.input}
        onChangeText={lastname => setLastname(lastname)}
        defaultValue={lastname}
        placeholder={'Lastname'}
      />
      <TextInput
        style={styles.input}
        onChangeText={mail => setMail(mail)}
        defaultValue={mail}
        placeholder={'Mail address'}
      />
      <TextInput
        style={[styles.input, isValidPassword ? undefined : styles.password1]}
        secureTextEntry={true}
        onChangeText={password => setPassword(password)}
        defaultValue={password}
        onEndEditing={pass}
        placeholder={'Password'}
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
        placeholder={'Confirm password'}
      />
      <TouchableOpacity style={styles.button} onPress={setData}>
        <Text>Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  screen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 10,
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
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
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 10,
  },
  input: {
    borderWidth: 2,
    width: '95%',
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

export default Register;
