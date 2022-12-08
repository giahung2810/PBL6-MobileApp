import { View, Text, StyleSheet , Image, TouchableOpacity} from 'react-native'
import React, {useCallback, useEffect, useState} from 'react'
import Logo from '../../../assets/logo.png'
import Tag from '../Tag/Tag'
import { AntDesign } from '@expo/vector-icons'; 
import { navigate } from '../../navigationRef';
import Space from '../Space';
import { FontAwesome } from '@expo/vector-icons'; 
import {api} from '../../api/apiJob'
import { delete_SaveJobs, get_SaveJobs } from '../../redux/jobRequest';
import { useSelector } from 'react-redux';
import useDecodeTokens from '../../hooks/useDecodeToken'

const JobCard1 = ({onPress, favorite = false, item, setSaveJob}) => {
    // console.log(job)
    const job = item.job;
    const user = useSelector((state) => state.auth.login.currentUser);
    const id = useDecodeTokens(user?.tokens.access)?.user_id;
    const [favorites, setFavorite] = useState(favorite);
    const agregarFavoritos = () => {
        setFavorite(!favorites);
      };
    // console.log(favorites)
    const [modalVisible, setModalVisible] = useState(false);
    const getSaveJobAPI = async () => {
        const result = await get_SaveJobs(id);
        setSaveJob(result);
      };
    return (
        <>
        <TouchableOpacity style={styles.container} onPress={() => navigate('JobDetails')}>
            <View style={styles.container_child1}>
                <Image style={styles.image} source={{uri: api + job.company.image}}  resizeMode='contain'/>
                <View style={styles.boxDetail}>
                    <Text numberOfLines={1} style={styles.title}>{job.name}</Text> 
                    <Text style={styles.company}>{job.company.company_name}</Text>   
                </View>
                <TouchableOpacity onPress={() => agregarFavoritos()}>
                    {   favorites ? 
                        <TouchableOpacity onPress={() => {setModalVisible(!modalVisible); agregarFavoritos()}} >
                            <FontAwesome name="bookmark" size={28} color="blue" />
                        </TouchableOpacity>
                            : <FontAwesome name="bookmark-o" size={28} color="black" />
                    }
                </TouchableOpacity>
            </View> 
            <Space />
            <View style={styles.container_child2}>
                <Text style={styles.address}>{job.locations[0].location_name}</Text>
                <Text style={styles.salary}>${job.salary} / month</Text>
                {job.skills.map((skill, index) => (
                    <View style={styles.tag} key={skill.id}>
                    <Tag tag = {{
                        text: skill.name, 
                        color:'#757575', 
                        borderColor:'#757575', 
                        borderWidth:1, 
                        fontSize:10}} 
                    />
                    <Tag tag = {{
                        text: skill.level_name, 
                        color:'#757575', 
                        borderColor:'#757575', 
                        borderWidth:1, 
                        fontSize:10}} 
                    />
                    </View>
                ))}
            </View>
            {/* <View style={styles.container_child3}>

            </View> */}
        </TouchableOpacity>

        </>
        )
}
const styles = StyleSheet.create({
    container: {
        // marginLeft: 15
        padding:16,
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
        // margin: 16,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
    },
    container_child2: {
        // marginBottom: 16,
        marginTop: 0,
        marginLeft: 64,
        // flexDirection: 'row',
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
})

export default JobCard1