import React, { useState } from "react";

import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

export default function DateOfBirth({setDate_of_birth}) {


  const [date, setDate] = useState(new Date());


  function onDateSelected(event, value) {
    setDate_of_birth(`${value.getFullYear()}-${value.getMonth() + 1}-${value.getDate()}`);
  }; 

  return (
      <View style={styleSheet.MainContainer}>
        {/* <Text style={styleSheet.text}>{date.getFullYear()}-{date.getMonth()}-{date.getDate()}</Text> */}
        {(
          <DateTimePicker
            value={date}
            mode={'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={onDateSelected}
            style={styleSheet.datePicker}
          />
        )}
      </View>
  );
}

const styleSheet = StyleSheet.create({

  MainContainer: {
    // padding: 6,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius:20,
    width: 370,

  },

  // Style for iOS ONLY...
  datePicker: {
    width: '100%',
    height: 80,
    borderRadius: 20
  },

});