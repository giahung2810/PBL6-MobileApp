import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Octicons } from '@expo/vector-icons'; 

const AddressCompany = ({address}) => {
  return (
    <View style={{ alignItems: 'center', flexDirection:'row', width: '70%'}}>
        <Octicons name="location" size={24} color="#7F879E" style={styles.icon} />
        <Text numberOfLines={1} style={styles.title}>{address}</Text>
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