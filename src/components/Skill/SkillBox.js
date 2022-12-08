import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 

const SkillBox = ({onPress, item}) => {
  return (
    <TouchableOpacity style={styles.container}  onPress={() => {onPress();}}>
        <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/3095/3095221.png'}} style={styles.image}/>
        <View style={{paddingHorizontal: 8, width: '80%'}}>
            <Text numberOfLines={1} style={styles.job}>{item.skill_name}</Text>
            <Text numberOfLines={1} style={styles.company}>{item.skill_level}</Text>
        </View>
        <AntDesign name="edit" size={20} color="blue" style={styles.icon}/>
    </TouchableOpacity>
  )
}

export default SkillBox

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        // borderWidth:1
    },
    image:{
        height: 67,
        width: 48,
        // borderWidth:1
    },
    job: {
        marginVertical: 2,
        fontFamily: 'Urbanist-Bold',
        fontSize: 24,
    },
    company:{
        marginVertical: 2,
        fontFamily: 'Urbanist-Light',
        fontSize: 16,
    },
    icon:{
        paddingHorizontal: 3
    }
})