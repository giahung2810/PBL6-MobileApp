import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 


const TextComment2 = function ({comment, setComment}) {
  const [isFocus, setIsFocus] = useState(false);
  return (
        <>
          <View
            style={[
              styles.container,
              { borderColor: isFocus ? 'blue' : '#e8e8e8' },
            ]}>
            <EvilIcons name="comment" size={28} color={isFocus ? 'blue' : '#e8e8e8'} />
            <TextInput
              value={comment}
              onChangeText={setComment}
              onBlur={() => { setIsFocus(false); } }
              placeholder={'Comment...'}
              style={styles.input}
              onFocus={() => { 
                setIsFocus(true); 
              }}
            /> 
          </View>
        </>
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
    alignItems: 'center',
    paddingHorizontal: 15,
    marginVertical: 5,
    marginTop:24,
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

export default TextComment2;