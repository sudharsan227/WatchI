import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const Custombutton = ({onpress, text, type}) => {
  return (
    <Pressable
      onPress={onpress}
      style={[style.container, style['container_' + type]]}>
      <Text style={style.text}>{text}</Text>
    </Pressable>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  container_SYNC: {
    width: '40%',
    marginTop: '70%',
    marginLeft: '30%',
    backgroundColor: '#3B71F3',
  },
  container_PRIMARY: {
    width: '100%',
    backgroundColor: '#3B71F3',
  },
  container_TERTIARY: {
    width: '100%',
    fontWeight: 'bold',
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Custombutton;
