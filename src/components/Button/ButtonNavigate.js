import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 


const ButtonNavigate = ({title, color, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress = {onPress}>
      {title === "Logout" ? 
        <AntDesign name="logout" size={24} color={color} style={styles.icon} /> : null}
      <Text style={[styles.title, {color: color}]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonNavigate

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    paddingHorizontal: 18,
    paddingVertical: 12
  },
  title: {
    fontFamily: 'Urbanist-SemiBold',
    fontSize: 18,
  },
  icon: {
    marginRight: 20
  }
})