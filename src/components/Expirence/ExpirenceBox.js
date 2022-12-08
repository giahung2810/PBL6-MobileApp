import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 

const ExpirenceBox = ({onPress, item}) => {
  return (
    <TouchableOpacity style={styles.container}  onPress={() => {onPress();}}>
        <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/2344/2344103.png'}} style={styles.image}/>
        <View style={{paddingHorizontal: 8, width: '80%'}}>
            <Text numberOfLines={1} style={styles.job}>{item.job_title}</Text>
            <Text numberOfLines={1} style={styles.company}>{item.company_name}</Text>
        </View>
        <AntDesign name="edit" size={20} color="blue" style={styles.icon}/>
    </TouchableOpacity>
  )
}

export default ExpirenceBox

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