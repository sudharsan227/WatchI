import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  useWindowDimensions,
  Alert,
} from 'react-native';
import Logo from '../../../assets/images/png.png';
import Custominput from '../../components/custominput/';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import axios from 'axios';
import {NativeModules} from 'react-native/Libraries/BatchedBridge/NativeModules';
// function Fetch() {
//   useEffect(() => {
//     fetch('http://192.168.68.161:81/get', {
//       method: 'GET',
//     })
//       .then(resp => resp.json())
//       .then(res => {
//         setDetail(res);
//       });
//   });
// }
const SignInScreen = () => {
  const {state, setName} = require('../../state');

  const {height} = useWindowDimensions();
  const [username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [u_id, setId] = useState('');
  const navigation = useNavigation();
  const [name, setData] = useState([]);

  const {control, handleSubmit} = useForm();
  const [detail, setDetail] = useState([]);
  const [res, setRes] = useState([]);

  const onSigninPressed = detail => {
    // console.warn('Signing In');
    try {
      console.log(detail.username);
      setName(detail.username);
      console.log(state.name);
      var str = 'http://192.168.68.161:81/get/' + detail.username + '/';
      console.log(str);
      axios
        .get(str, {responseType: 'json'})
        .then(response => {
          setRes(response.data);
          console.log(res);
          console.log(res.passwrd);
          //console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
      //console.log(detail.u_id);
      // console.log(data);

      if (detail.password == res.passwrd && res.name != null) {
        if (res.u_role == 'patient') navigation.navigate('Home');
        else navigation.navigate('HomeDoctor');
      } else {
        Alert.alert('Incorrect Password or Username');
        navigation.navigate('SignIn');
      }
    } catch {
      Alert.alert('Network Error');
    }
  };
  const onSignupPressed = () => {
    console.warn('Sign up');
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.5}]}
        resizeMode="contain"
      />

      <Custominput name="username" placeholder="Username" control={control} />
      <Custominput
        name="password"
        placeholder="password"
        control={control}
        secureTextEntry={true}
      />
      {/* <Custominput name="u_id" placeholder="u_id" control={control} /> */}

      <CustomButton
        text="Sign In"
        onpress={handleSubmit(onSigninPressed)}
        type="PRIMARY"
      />
      <CustomButton
        text="Don't have an account? Sign Up "
        onpress={onSignupPressed}
        type="TERTIRARY"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    // backgroundColor: '#b5d2fe',
    marginBottom: '0%',
  },
  logo: {
    width: '90%',
    maxWidth: 500,
    maxHeight: 300,
  },
});

export default SignInScreen;
