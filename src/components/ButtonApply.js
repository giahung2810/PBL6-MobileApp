import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ButtomApply = ({onPress, text}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
      ]}>
      <Text
        style={[
          styles.text,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#246BFD', 
    // paddingHorizontal
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16
  },


  text: {
    // width: '100%',
    color: '#fff',
    fontFamily: 'Urbanist-Bold',
    fontSize: 16
  },
});

export default ButtomApply;
