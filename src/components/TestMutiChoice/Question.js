import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Space from '../Space'
import { useState } from 'react';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import BouncyCheckbox from "react-native-bouncy-checkbox";
const Question = ({item,result_exam,setResult_exam}) => {
    const radio_props = item.answers.map((answer) => {
      return {
        label: answer.content,
        value: answer.id, 
        id: answer.id
      }
    });

    // console.log(result_exam)
  return (
    <View style={styles.container}>
      <Text style={styles.titleQuestion}>Question {item.id}:<Text style={styles.question}>{item.content}</Text> </Text>
      <Space />

      <RadioForm
          radio_props={radio_props}
        //   labelColor={'#50C900'}
          initial={-1}
        //   formHorizontal={true}
        // labelHorizontal={false}
        // buttonColor={'#50C900'}
          labelStyle={styles.answer}
          onPress={(value) => {
            // setResult_exam( result_exam.push(
            //   ...result_exam,
            //   { "id": item.id,"answers": [value]}
            // ))
            setResult_exam(prev=>{
              const even = (element) => element.id == item.id;
              if(!prev.some(even)) {
                return [...prev,{ "id": item.id,"answers": [value]}]
              } else {
                const new_prev = prev.filter((element) => element.id != item.id)
                // console.log(new_prev)
                return [...new_prev,{ "id": item.id,"answers": [value]}]
              }
            })
          }}
      />
    </View>
  )
}

export default Question

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 16,
        marginHorizontal: 8,
        marginVertical: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    titleQuestion:{
        fontFamily: 'Urbanist-Bold',
        fontSize: 16,
    },
    question: {
        fontFamily: 'Urbanist-Medium',
        fontSize: 18,
    },
    answer:{
        fontFamily: 'Urbanist-Regular'
    }
})