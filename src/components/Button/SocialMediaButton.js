import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'; 
import Google from '../../../assets/google.png'
import Apple from '../../../assets/apple.png'


const SocialMediaButton = ({type}) => {
  return (
    <TouchableOpacity style={styles.container}>
        {type === 'facebook'? 
            <FontAwesome5 name="facebook" size={24} color="#007AD9" />
        : type === 'goole'?
            <Image style={styles.image} source={Google} /> 
        : type === 'apple'?
            <Image style={styles.image} source={Apple} /> : null
        }
    </TouchableOpacity>
  )
}

export default SocialMediaButton

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:32,
        paddingVertical:18,
        borderWidth:1,
        borderColor: '#EEEEEE',
        borderRadius: 16,
        marginHorizontal: 8
    },
    image: {
        width: 24, height: 24
    }
})