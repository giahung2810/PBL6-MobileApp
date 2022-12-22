import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {} from 'react'
import Space from '../Space'
import { useState } from 'react'
import { getListTime_Interview, post_Time_Interview } from '../../redux/jobRequest'
import { useEffect } from 'react'
import ButtomApply from '../Button/ButtonApply'
import { useNavigation } from '@react-navigation/native'

const TimeInterview = ({id_applicant, getApply}) => {
    const navigation = useNavigation();
    const [data, setData] = useState();
    const getListTime = async () => {
        const result = await getListTime_Interview(id_applicant);
        setData(result);
    };
    useEffect(() => {
            // do something
            getListTime();
            // console.log(data)
    },[]);
    const [choose, setChoose] = useState(false);
    const [location,setLocation] = useState({
        row: -1, 
        column: -1,
    });
    const ChoseTime = (row, index, available, day) => {
        if(choose) {
            if(location.row === row && location.column === index)
            {
                setChoose(false);
                setLocation({row: -1, column: -1,});
            }
        } else {
            setChoose(true);
            setLocation({row: row, column: index});
            setPost_data({
                start_time : available.start,
                end_time : available.end,
                day : day
            });
        }
        
    }
    const [post_data,setPost_data] = useState({
        start_time : "",
        end_time : "",
        day : ""
    });
    const Ok_time = (post_data, id_applicant) => {
        if(choose) {
            // setRefreshing(true);
            post_Time_Interview(post_data, id_applicant);
            navigation.goBack();
            // setRefreshing(false);
            // getApply();
        }
        else alert('Please Select Time first');
    }
    // console.log(post_data);
    // console.log(location)
  return (
    <View style={styles.container}>
        <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 12}}>
            <Text style={styles.title}>Please choose 1 time that suits you</Text>
        </View>
        <Space/>
        {data?.map( (item, index) => {
            const row = index;
            return (
                <View key={index} >
                    <Text style={styles.date}>{item.day}</Text>
                    <View style={{flexDirection: 'row' , alignItems: 'center', marginVertical: 8, width: '100%', flexWrap: "wrap",}}>
                    {item.available.map( (available, index) =>{
                        return (
                            <TouchableOpacity style={[styles.boxAvailable, {
                                borderColor: choose  ? location.row === row && location.column === index ? 'rgb(128, 0, 255)' : 'rgba(0,0,0, 0.1)' : 'rgb(128, 0, 255)'
                            }]} key={index} onPress={() =>{ChoseTime(row, index, available, item.day);}}
                            >
                                <Text style={[styles.available, {color: choose  ? location.row === row && location.column === index ? 'rgb(128, 0, 255)' : 'rgba(0,0,0, 0.1)' : 'rgb(128, 0, 255)'}]}>
                                    {available.start} - {available.end}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                    </View>
                </View>
            );
        })}
        <ButtomApply onPress={() => {Ok_time(post_data, id_applicant)}} text="OK with my time" backgroundColor='rgba(209, 163, 255,0.3)' color='rgb(128, 0, 255)'/>
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
        color: 'rgb(128, 0, 255)'
    },
    date: {
        color: 'rgb(128, 0, 255)',
        fontFamily:  'Urbanist-ExtraBold',
        marginLeft:8
    },
    boxAvailable:{
        borderColor: 'rgb(128, 0, 255)',
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