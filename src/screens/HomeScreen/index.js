import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomButton from '../../components/CustomButton';
import axios from 'axios';
const HomeScreen = () => {
  const {state, setName} = require('../../state');
  const [res, setRes] = useState([]);
  onSigninPressed = () => {
    console.log(state.name);
    var str = 'http://192.168.68.161:81/get_token/' + state.name + '/';
    axios
      .get(str, {responseType: 'json'})
      .then(response => {
        setRes(response.data);
        console.log(res);
        console.log(res.value);
        //console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <View>
      <CustomButton text="Sync Data" onpress={onSigninPressed} type="SYNC" />
    </View>
  );
};

export default HomeScreen;
