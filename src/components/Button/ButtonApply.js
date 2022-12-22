import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ButtomApply = ({onPress, text, backgroundColor = '#246BFD', color = '#fff', borderColor = null}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor : backgroundColor,
          borderColor : borderColor ? borderColor: null,
          borderWidth : borderColor ? 1 : 0
        }
      ]}>
      <Text
        style={[
          styles.text,
          {
            color : color
          }
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 18,
    width: '100%',
    // height: '100%',
    paddingVertical: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16
  },


  text: {
    // width: '100%',
    fontFamily: 'Urbanist-Bold',
    fontSize: 16
  },
});

export default ButtomApply;
