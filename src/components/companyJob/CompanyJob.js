import React from 'react';
import { View, Image, Text , StyleSheet, TouchableOpacity } from 'react-native';
import AddressCompany from '../Address/AddressCompany'
import Logo from '../../../assets/logo.png'
import { Fontisto } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import InforCompany from '../InforMainCompany/InforCompany';

const Company = ({item}) => {
    const navigation= useNavigation();
    const company = item.company;
    return (
        <View style={styles.container}>
            <InforCompany company = {company}/>
            <TouchableOpacity style={{alignItems: 'center', marginTop:24}} 
                onPress={() => navigation.navigate('Company', {item : company})}>
                <Text style={{color: '#246BFD',fontFamily: 'Urbanist-Bold',fontSize: 16,}}>
                    View more?
                </Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        // justifyContent: 'flex-start'
    },
    title: {
        fontWeight: '600',
        fontSize: 22,
        lineHeight:24,
        color: '#171716',
        marginHorizontal: 8,
        marginVertical: 16
    },
    boxDetail:{
        flex:1,
        marginLeft:8,
    },
    container_child1: {
        // margin: 16,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12
        // justifyContent: 'space-between',
    },
    image: {
        width: 42,
        height: 42,
        borderRadius: 10,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#EEEEEE'
    },
    company : {
        color: '#212121',
        // fontWeight: 'bold',
        fontSize: 20,
        // marginBottom: 6,
        fontFamily: 'Urbanist-Bold'
    },
});

export default Company;