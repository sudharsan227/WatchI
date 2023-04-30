import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/png.png';
import Custominput from '../../components/custominput/';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import axios from 'axios';
import {isSearchBarAvailableForCurrentPlatform} from 'react-native-screens';

const SignUpScreen = () => {
  const {height} = useWindowDimensions();
  const [username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [u_id, setId] = useState('');
  const navigation = useNavigation();
  const {control, handleSubmit} = useForm();

  const onSignupPressed = data => {
    //console.log(data);
    const res = {name: data.name, passwrd: data.passwrd, u_role: data.u_role};
    // console.log(res);
    axios
      .post('http://192.168.43.161:81/add', res)
      .then(response => {
        console.log(response.data);
        //console.log(response.data);
      })
      .catch(error => console.log(error));
    navigation.navigate('SignIn');
  };
  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />

      <Custominput name="name" placeholder="Username" control={control} />
      <Custominput
        name="passwrd"
        placeholder="password"
        control={control}
        secureTextEntry={true}
      />
      <Custominput
        name="u_role"
        placeholder="Role of the User"
        control={control}
      />

      <Custominput name="value" placeholder="FitBit Token" control={control} />

      <CustomButton
        text="Sign Up"
        onpress={handleSubmit(onSignupPressed)}
        type="PRIMARY"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    //  backgroundColor: '#b5d2fe',
    marginBottom: '0%',
  },
  logo: {
    width: '90%',
    maxWidth: 500,
    maxHeight: 300,
  },
});

export default SignUpScreen;
