import { View, Text, StyleSheet , Image, TouchableOpacity} from 'react-native'
import React, {useCallback, useEffect, useState} from 'react'
import Logo from '../../../assets/logo.png'
import Tag from '../Tag/Tag'
import { AntDesign } from '@expo/vector-icons'; 
import { navigate } from '../../navigationRef';
import { getJobbyID } from '../../redux/jobRequest';
import {api} from '../../api/apiJob';
const ApplicationCard = ({item}) => {
    // console.log('ApplicationCard',item)
    const [job, setJob] = useState();
    const getJobAPi = async () => {
      const result = await getJobbyID(item.job);
      setJob(result);
    };
    useEffect(() => { 
        getJobAPi();
    }, [item.job]);
    return (
        <TouchableOpacity style={styles.container} onPress={() => { navigate('ApplicationStages', {item: item, job: job})}}>
            <View style={styles.container_child1}>
                <Image style={styles.image} source={{uri:api + job?.job.company.image}}  resizeMode='contain'/>
                <View style={styles.boxDetail}>
                    <Text numberOfLines={1} style={styles.title}>{job?.job.name}</Text> 
                    <Text style={styles.company}>{job?.job.company.company_name}</Text>   
                </View>
                <AntDesign name="right" size={20} color="rgba(33, 33, 33, 1)" />
            </View> 
            <View style={styles.container_child2}>
                {item.status === "apply" ?
                    <Tag tag = {{text: 'Application Sent', backgroundColor:'rgba(36, 107, 253, 0.08)', color:'#246BFD'}} />
                : item.status === "test" ?
                    <Tag tag = {{text: 'Wating you do exam', backgroundColor:'rgba(250, 204, 21, 0.12)', color:'#FACC15'}} />
                : item.status === "set_schedule" ?
                    <Tag tag = {{text: 'Wating company set schedule', backgroundColor:'rgba(255,182,193, 0.4)', color:'rgb(255,20,147)'}} />
                : item.status === "interview_pending" ?
                    <Tag tag = {{text: 'Chose schedule to interview', backgroundColor:'rgba(209, 163, 255,0.3)', color:'rgb(128, 0, 255)'}} />
                :  item.status === "schedule_interview" ?
                    <Tag tag = {{text: 'Have chosen time', backgroundColor:'rgb(143, 206, 255)', color:'rgb(0, 0, 255)'}} />
                : item.status === "incomplete" ?
                    <Tag tag = {{text: 'You are Faile', backgroundColor:'rgb(252, 88, 88)', color:'rgb(0, 0, 0)'}} />
                : item.status === "complete" ?
                    <Tag tag = {{text: 'Congratulation', backgroundColor:'rgb(163, 255, 163)', color:'rgb(0, 194, 0)'}} />
                : item.status === "cancel_interview" ?
                    <Tag tag = {{text: 'You are cancelled', backgroundColor:'rgb(252, 88, 88)', color:'rgb(0, 0, 0)'}} />
                : null
                }
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