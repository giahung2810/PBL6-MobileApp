import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Logo from '../../../assets/logo.png'
import { AntDesign } from '@expo/vector-icons'; 
import Tag from '../Tag/Tag'
const Notify = () => {
    const navigation = useNavigation();
    return (
    <TouchableOpacity  style={[styles.container]} 
        onPress={() => {navigation.navigate('Notification', { 
            screen: 'NotificationAboutJob',
            initial: false,
        })}}
    >
        <View style={[styles.container_child1]}>
            <Image style={styles.image} source={Logo}  resizeMode='contain'/>
        </View>
        <View style={[styles.container_child2]}>
            <Text style={styles.title}>Application sent</Text>
            <Text style={styles.infor}>
                Applications for 
                    <Text style={styles.company_name}> Google inc </Text> 
                have entered for company review
            </Text>
            <Tag tag = {{
                text: 'Application Sent', 
                backgroundColor:'rgba(36, 107, 253, 0.08)', 
                color:'#246BFD'}} 
            />
        </View>
        <TouchableOpacity style={[styles.container_child3]}>
            <AntDesign name="delete" size={24} color="red" />
        </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container:{
        padding:16,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        // borderColor: '#EEEEEE',
        marginHorizontal: 24,
        // borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.65,

        elevation: 3,
        marginVertical: 8,

        flexDirection:'row'
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 10,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#EEEEEE'
    },
    container_child2: {
        flex: 2
    },
    container_child3: {
        padding: 8
    },
    title: {
        color: '#212121',
        fontFamily: 'Urbanist-Bold',
        fontSize: 18,
        marginBottom: 8
    },
    company_name: {
        color: '#212121',
        fontFamily: 'Urbanist-Bold',
        fontSize: 14,
    },
    infor:{
        color: '#212121',
        fontFamily: 'Urbanist-Light',
        fontSize: 14,
        marginBottom: 12
    }
});

export default Notify;
