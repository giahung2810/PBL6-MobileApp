import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Space from '../Space'
const data = [
    {
        day : '2022-12-06',
        available : [
            {
                start : "09:30",
                end : "09:45"
            }
        ]
    },
    {
        day : '2022-12-07',
        available : [
            {
                start : "09:30",
                end : "09:45"
            },
            {
                start : "09:50",
                end : "10:05"
            },
            {
                start : "09:50",
                end : "10:05"
            },
            {
                start : "09:50",
                end : "10:05"
            },
            {
                start : "09:50",
                end : "10:05"
            },
        ]
    },
]
const TimeInterview = () => {
  return (
    <View style={styles.container}>
        <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 12}}>
            <Text style={styles.title}>Please choose 1 time that suits you</Text>
        </View>
        <Space/>
        {data.map( (item, index) => {
            return (
                <View key={index} >
                    <Text style={styles.date}>{item.day}</Text>
                    <View style={{flexDirection: 'row' , alignItems: 'center', marginVertical: 8, width: '100%', flexWrap: "wrap",}}>
                    {item.available.map( (available, index) =>{
                        return (
                            <TouchableOpacity style={styles.boxAvailable} key={index}>
                                <Text style={styles.available}>{available.start} - {available.end}</Text>
                            </TouchableOpacity>
                        );
                    })}
                    </View>
                </View>
            );
        })}
    </View>
  )
}

export default TimeInterview

const styles = StyleSheet.create({
    container: {
        flex:1,
        borderWidth:1,
        borderRadius:20,
        borderColor: '#E0E0E0',
        marginHorizontal:16,
        marginVertical: 12,
        paddingHorizontal:12, 
        paddingVertical: 16,

    },
    title: {
        fontFamily:  'Urbanist-Bold',
        fontSize: 16,
        color: 'rgb(255,69,0)'
    },
    date: {
        color: 'rgb(255,69,0)',
        fontFamily:  'Urbanist-ExtraBold',
        marginLeft:8
    },
    boxAvailable:{
        borderColor: 'rgb(255,69,0)',
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 6,
        paddingVertical: 4,
        marginHorizontal: 6,
        marginVertical: 8
    },
    available:{
        color: 'rgb(255,69,0)'
    }
})