import { View, Text, StyleSheet , Image, TouchableOpacity} from 'react-native'
import React, {useCallback, useEffect, useState} from 'react'
import Logo from '../../../assets/logo.png'
import Tag from '../Tag/Tag'
import { AntDesign } from '@expo/vector-icons'; 
import { navigate } from '../../navigationRef';

const ApplicationCard = () => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => { navigate('ApplicationStages')}}>
            <View style={styles.container_child1}>
                <Image style={styles.image} source={Logo}  resizeMode='contain'/>
                <View style={styles.boxDetail}>
                    <Text style={styles.title}>BackEnd Senior</Text> 
                    <Text style={styles.company}>Pessi LLC</Text>   
                </View>
                <AntDesign name="right" size={20} color="rgba(33, 33, 33, 1)" />
            </View> 
            <View style={styles.container_child2}>
                <Tag tag = {{text: 'Application Sent', backgroundColor:'rgba(36, 107, 253, 0.08)', color:'#246BFD'}} />
            </View>
            {/* <View style={styles.container_child3}>

            </View> */}
        </TouchableOpacity>
        )
}
const styles = StyleSheet.create({
    container: {
        // marginLeft: 15
        backgroundColor: '#ffffff',
        borderRadius: 20,
        marginBottom: 8,
        // flexDirection: 'row',
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.65,

        elevation: 3,
    },
    boxDetail:{
        flex:1,
        marginLeft:8,
    },
    container_child1: {
        margin: 16,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
    },
    container_child2: {
        marginBottom: 16,
        marginTop: 0,
        marginLeft: 78,
        flexDirection: 'row',
        // justifyContent: 'space-between'
    },
    container_child3: {
    },
    image: {
        width: 54,
        height: 54,
        borderRadius: 10,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#EEEEEE'
    },
    title : {
        color: '#212121',
        // fontWeight: 'bold',
        fontSize: 20,
        // marginBottom: 6,
        fontFamily: 'Urbanist-Bold'
    },
    company: {
        fontSize: 16,
        fontFamily: 'Urbanist-Medium',
        color: '#616161'
    },
})

export default ApplicationCard