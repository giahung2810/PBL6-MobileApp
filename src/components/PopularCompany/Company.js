import { StyleSheet, Text, View, TouchableOpacity, Image, Platform } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import Space from '../Space';
import AddressCompany from '../Address/AddressCompany';
import { useNavigation } from '@react-navigation/native';

const TopCompany = ({item}) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container}  onPress={() => navigation.navigate('Company',{item})}>
        <View style={styles.container_child1}>
            <View style={styles.companyBox}>
            <Image style={styles.image} 
                source={{
                    uri: item.image,
                }}
                resizeMode='contain'
            />
                <Text numberOfLines={2} style={styles.company}>{item.company_name}</Text>   
            </View>
            <View style={{flexDirection: 'row' , alignItems: 'center',marginHorizontal: 8, marginBottom: 12}}>
                <AntDesign name="star" size={24} color="yellow"/>
                <Text style={{color: '#7F879E',marginLeft: 10}}>{item.average_rating.rating__avg}</Text>
            </View>
        </View> 
        <Space/>
        <Text numberOfLines={3} style={styles.description}>{item.profile_description}</Text>
        <View style={{alignItems:'flex-start', marginHorizontal: 8, marginBottom: 12}}>
            <AddressCompany address={item.company_location}/>
        </View>
    </TouchableOpacity>
  )
}

export default TopCompany

const styles = StyleSheet.create({
    container: {
        marginRight: 8,
        marginTop: 4,
        marginLeft: 4,
        marginBottom: 8,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,

        // width: 280,
    },
    container_child1: {
        // margin: 16,
        marginBottom: 12,
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        width: 54,
        height: 54,
        borderRadius: 10,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#EEEEEE'
    },
    company: {   
        fontSize: 16,
        fontFamily: 'Urbanist-Bold',
        marginTop: 4,
        width: 140,
        maxHeight: 50,
    },
    companyBox:{
        flexDirection: 'row',
    },
    description:{
        width: 240,
        height: 60,
        marginLeft: 12,
        fontSize: 14,
        fontFamily: 'Urbanist-Medium',
        color: '#616161'
    }
})