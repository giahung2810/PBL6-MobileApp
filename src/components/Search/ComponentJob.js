import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import {api} from '../../api/apiJob'
import Tag from '../Tag/Tag';
import { useNavigation } from '@react-navigation/native';
const ComponentJob = ({item, title}) => {
    const navigation = useNavigation();
    const image = item.job.company.image;
    // console.log(item);
  return (
    <TouchableOpacity style={styles.container} 
        onPress={() => { 
            title == 'apply' ?
            // navigation.navigate('ApplicationStages', {item: item.application, job: item})
                navigation.navigate('Application', { 
                    screen: 'ApplicationStages',
                    params: {item: item.application, job: item},
                    initial: false,
                })
            :   navigation.navigate('JobDetails', {item : item})
        }}
    >
    <View style={styles.container_child1}>
        {/* <Image style={styles.image} source={{}}  resizeMode='contain'/> */}
        {   typeof(image) === "string" ? 
                    image.includes(api) ?
                        <Image style={styles.image} 
                            source={{
                                uri: image,
                            }}
                            resizeMode='contain'
                        /> 
                    : 
                        <Image style={styles.image} 
                            source={{
                                uri: api + image,
                            }}
                            resizeMode='contain'
                        />
                        
            :
            <Image style={styles.image} 
                source={{
                    uri: api + item.image,
                }}
                resizeMode='contain'
            />
            }
        <View style={styles.boxDetail}>
            <Text numberOfLines={1} style={styles.title}>{item.job.name}</Text> 
            <Text style={styles.company}>{item.job.company_name}</Text>   
        </View>
        <AntDesign name="right" size={20} color="rgba(33, 33, 33, 1)" />
    </View> 
    {title == 'apply' ?
    <View style={styles.container_child2}>
        {item.application.status === "apply" ?
            <Tag tag = {{text: 'Application Sent', backgroundColor:'rgba(36, 107, 253, 0.08)', color:'#246BFD'}} />
        : item.application.status === "test" ?
            <Tag tag = {{text: 'Wating you do exam', backgroundColor:'rgba(250, 204, 21, 0.12)', color:'#FACC15'}} />
        : item.application.status === "set_schedule" ?
            <Tag tag = {{text: 'Wating company set schedule', backgroundColor:'rgba(255,182,193, 0.4)', color:'rgb(255,20,147)'}} />
        : item.application.status === "interview_pending" ?
            <Tag tag = {{text: 'Chose schedule to interview', backgroundColor:'rgba(255,140,0,0.3)', color:'rgb(255,69,0)'}} />
        :null
        }
    </View>
    : null}
    {/* <View style={styles.container_child3}>

    </View> */}
</TouchableOpacity>
  )
}

export default ComponentJob

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