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
      {item.is_multiple_choice ? 
        item.answers.map((amc) => {
           return (
            <View key={amc.id} style={{flexDirection: 'row' , alignItems: 'center', marginVertical: 3}}>
              {/* <BouncyCheckbox
                size={25}
                fillColor="#2196f3"
                iconStyle={{ borderColor: "#2196f3", borderWidth: 3 }}
                innerIconStyle={{ borderWidth: 2 }}
              /> */}
              <BouncyCheckbox
                iconStyle={{borderColor: '#2196f3', borderRadius: 10}}
                // textStyle={{fontFamily: 'JosefinSans-Regular'}}
                unfillColor="white"
                fillColor="#2196f3"
                onPress={(value) => {
                  setResult_exam(prev => {
                    const even = (element) => element.id == item.id;
                    if(!prev.some(even)) {
                      return [...prev,{ "id": item.id,"answers": [amc.id]}]
                    } else {
                      // const new_prev = prev.filter((element) => element.id != item.id)
                      // console.log(new_prev)
                      // return [...new_prev,{ "id": item.id,"answers": [value]}]
                      
                        const new_prev = prev.filter((element) => element.id == item.id);
                        
                        new_prev[0].answers.map((item) =>
                          item == amc.id ? 0 : 1
                        );
                        // console.log(new_prev)
                        const new_prev_1 = prev.filter((element) => element.id != item.id) 
                        // console.log(result_exam)
                        return new_prev_1.concat(new_prev);
                    }
                  });
                 
                }}
              />
              <Text style={{fontFamily: 'Urbanist-Regular', fontSize: 15}}>{amc.content}</Text>
          </View>
          )
        })
        
      :
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
      }
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