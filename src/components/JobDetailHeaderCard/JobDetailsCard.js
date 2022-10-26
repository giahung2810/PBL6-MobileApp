import React from 'react';
import { View, Text , StyleSheet, Image } from 'react-native';
import Logo from '../../../assets/logo.png'
import Tag from '../Tag/Tag'
import Space from '../Space'

const JobDetailsCard = () => {
    return (
        <View style={[styles.container ]}>
            <View style={styles.container_child1}>
                <Image style={styles.image} source={Logo}  resizeMode='contain'/>
            </View> 
            <View style={styles.container_child2}>
                <Text style={styles.jobpost}>Job Position</Text>
                <Text style={styles.company}>Company</Text>
            </View> 
            <Space />
            <View style={styles.container_child3}>
                <Text style={styles.address}>City, Country</Text>
                <Text style={styles.salary}>$5000 - $10,000 / month</Text>
                <View style={styles.tag}>
                    <Tag tag = {{
                        text: 'Employment Type', 
                        color:'#757575', 
                        borderColor:'#757575', 
                        borderWidth:1, 
                        fontSize:10}} 
                    />
                    <Tag tag = {{
                        text: 'Work Type', 
                        color:'#757575', 
                        borderColor:'#757575', 
                        borderWidth:1 , 
                        fontSize:10 }} 
                    />
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        padding: 18,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.65,

        elevation: 3,
    },
    image: {
        width: 92,
        height: 92,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    container_child1: {
        alignItems: 'center',
        paddingBottom: 16,
    },
    container_child2: {
        alignItems: 'center',
        paddingBottom: 16,
    },
    container_child3:{
        alignItems: 'center'
    },
    jobpost: {
        fontFamily:'Urbanist-Bold',
        fontSize:24,
        color: '#212121'
    },
    company: {
        fontFamily:'Urbanist-SemiBold',
        fontSize:18,
        color: '#616161'
    },
    address: {
        fontFamily:'Urbanist-Medium',
        fontSize:18,
        color: '#616161',
        paddingBottom: 12,
    },
    salary: {
        fontFamily: 'Urbanist-SemiBold',
        fontSize: 18,
        color: '#246BFD',
        paddingBottom: 12,
    },
    tag:{
        flexDirection: 'row'
    }
});

export default JobDetailsCard;