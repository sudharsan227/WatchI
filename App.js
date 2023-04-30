/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import SignUpScreen from './src/screens/Signup/Signup';
import SignInScreen from './src/screens/SignIn/Signin';
import Navigation from './src/navigation';
const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    //backgroundColor: '#b5d2fe',
    backgroundColor: '#F9FBFC',
    //marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'center',
  },
});

export default App;
