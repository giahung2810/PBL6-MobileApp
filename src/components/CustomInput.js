import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';


import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { SelectGender } from './SelectPicker/SelectGender';

const CustomInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
  setValue
}) => {
  const [isFocus,setIsFocus] = useState(false);
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.container,
              {borderColor: error ? 'red' : isFocus ? 'blue' : '#e8e8e8'},
              // {borderColor: isFocus ? 'blue' : '#e8e8e8'},
            ]}>
              {name === 'email' ? 
                <MaterialIcons name="email" size={20} color={isFocus ? 'blue' : '#e8e8e8'}/> : 
                name === 'password' ? 
                <MaterialIcons name="lock" size={20} color={isFocus ? 'blue' : '#e8e8e8'} />: 
                name==='password2'? 
                <MaterialIcons name="lock" size={20} color={isFocus ? 'blue' : '#e8e8e8'} />: 
                name==='date_of_birth' ? 
                <MaterialCommunityIcons name="calendar-month-outline" size={20} color={isFocus ? 'blue' : '#e8e8e8'} />:
                name==='gender' ? 
                <AntDesign name="caretdown" size={20} color={isFocus ? 'blue' : '#e8e8e8'} /> : null
              }
            {name!=='gender' ?<TextInput
              value={value} 
              onChangeText={onChange}
              onBlur={() => { setIsFocus(false)}}
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
              onFocus={() =>{setIsFocus(true)}}
            />: <View style={styles.input}><SelectGender setValue={setValue}/></View>}
          </View>
          {error && (
            <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message || 'Error'}</Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row',
    // borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 16,

    paddingHorizontal: 15,
    marginVertical: 5,
    paddingVertical: 15
  },
  input: {
    fontFamily: 'Urbanist-Light',
    marginLeft: 8,
    fontSize: 16,
    width: '100%',
    height: '100%',
  },
  paperTextInput: {
    padding: 0,
    margin: 0,
  }
});

export default CustomInput;