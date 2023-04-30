import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';
const Custominput = ({control, name, placeholder, secureTextEntry}) => {
  return (
    <View style={style.container}>
      <Controller
        control={control}
        name={name}
        render={({field: {value, onChange, onBlur}}) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            style={style.input}
            secureTextEntry={secureTextEntry}
          />
        )}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    color: 'black',
  },
  input: {},
});
export default Custominput;
