import React, { useState } from "react";

import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

export default function DateOfBirth({setDate_of_birth, date}) {

  const [dated, setDated] = useState(new Date());
  const time = date?.split('-');

  // const datePass = new Date(time[0], time[1], time[2]);
  // console.log("date", date);
 
  function onDateSelected(event, value) {
    setDate_of_birth(`${value.getFullYear()}-${value.getMonth()+ 1}-${value.getDate()}`);
  }; 

  return (
      <View style={styleSheet.MainContainer}>
        {/* <Text style={styleSheet.text}>{date.getFullYear()}-{date.getMonth()}-{date.getDate()}</Text> */}
        {
        date ? 
            <DateTimePicker
              value={ new Date(time[0], time[1] - 1, time[2]) }
              mode={'date'}
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              is24Hour={true}
              onChange={onDateSelected}
              style={styleSheet.datePicker}
            />
          : 
          <DateTimePicker
              value={ dated }
              mode={'date'}
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              is24Hour={true}
              onChange={onDateSelected}
              style={styleSheet.datePicker}
            />
        }
        {/* {(  
          <DateTimePicker
            value={ dated}
            mode={'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={onDateSelected}
            style={styleSheet.datePicker}
          />
        )} */}
      </View>
  );
}

const styleSheet = StyleSheet.create({

  MainContainer: {
    // padding: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAFAFA',
    borderRadius:20,
    width: '98%',

  },

  // Style for iOS ONLY...
  datePicker: {
    width: '100%',
    height: 80,
    borderRadius: 20
  },

});