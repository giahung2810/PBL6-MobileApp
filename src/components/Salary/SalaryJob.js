import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Foundation } from '@expo/vector-icons'; 

const SalaryJob = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flexDirection:'row',}}>
        <Foundation name="dollar" size={24} color="#7F879E" style={styles.icon} />
        <Text style={styles.salary_Month}><Text style={styles.salary_Price}>50K</Text>/Month</Text>
    </View>
  )
}

export default SalaryJob

const styles = StyleSheet.create({
    icon: {
        marginLeft: 4
    },  
    salary_Price:{
        color: 'black',
        fontFamily: 'Urbanist-Bold',
        fontSize: 16,
    },
    salary_Month: {
        color: '#7F879E',
        fontSize: 14,
        alignItems: 'center',
        fontFamily: 'Urbanist-Light',
    },
})