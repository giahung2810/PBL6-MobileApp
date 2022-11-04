import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Octicons } from '@expo/vector-icons'; 

const AddressCompany = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flexDirection:'row',}}>
        <Octicons name="location" size={24} color="#7F879E" style={styles.icon} />
        <Text style={styles.title}>California, USA</Text>
    </View>
  )
}

export default AddressCompany

const styles = StyleSheet.create({
    icon: {
        marginLeft: 4
    },  
    title: {
        color: '#7F879E',
        marginLeft: 10
    }
})