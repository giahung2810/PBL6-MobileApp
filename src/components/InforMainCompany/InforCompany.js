import { View, Image, Text , StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react'
import AddressCompany from '../Address/AddressCompany'
import Logo from '../../../assets/logo.png'
import { Fontisto } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import moment from 'moment';
import {api} from '../../api/apiJob';
const InforCompany = ({type = true, company}) => {

    const formatDate = (data) => {
        var m = moment(); // Initial moment object
        // Create the new date
        var myDate = new Date(data);
        var newDate = moment(myDate);
        // Inject it into the initial moment object
        m.set(newDate.toObject());
        return m.fromNow();
    };
  return (
    <View>
        {type === true ? <Text style={styles.title}>Information</Text> : <Text style={styles.title}>{company.company_name}</Text>}
            <View style={{paddingHorizontal: type ? 18 : 0}}>
                {type === true ? 
                    <View style={styles.container_child1}>
                        <Image style={styles.image} source={{uri: company.image}}  resizeMode='contain'/>
                        <View style={styles.boxDetail}>
                            <Text style={styles.company}>{company.company_name}</Text> 
                        </View>
                    </View> 
                    : null
                }
                <View style={{alignItems:'flex-start', marginHorizontal: 8, marginBottom: 12}}>
                    <AddressCompany address={company.company_location}/>
                </View>
                <View style={{flexDirection: 'row' , alignItems: 'center',marginHorizontal: 8, marginBottom: 12}}>
                    <Fontisto name="date" size={24} color="#7F879E" />
                    <Text style={{color: '#7F879E',marginLeft: 10}}>{formatDate(company.established_date)}</Text>
                </View>
                <View style={{flexDirection: 'row' , alignItems: 'center',marginHorizontal: 8, marginBottom: 12}}>
                    <AntDesign name="star" size={24} color="yellow"/>
                    <Text style={{color: '#7F879E',marginLeft: 10}}>{company.average_rating}</Text>
                </View>
                <Text style={{color: '#7F879E',marginLeft:8, fontFamily: 'Urbanist-Bold', fontSize: 18}}>Description</Text>
                <Text style={{color: '#7F879E',marginLeft:8, fontFamily: 'Urbanist-Light', fontSize: 14}}>{company.profile_description}</Text>
                <View style={{borderTopWidth: 1, borderColor: 'rgba(238, 238, 238, 0.5)'}}/>
            </View>
    </View>
  )
}

export default InforCompany

const styles = StyleSheet.create({
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
})