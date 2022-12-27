import React from 'react';
import { View, Text , StyleSheet, Image } from 'react-native';
import Logo from '../../../assets/logo.png'
import Tag from '../Tag/Tag'
import Space from '../Space'
import moment from 'moment';
import {api} from '../../api/apiJob'
const JobDetailsCard = ({item}) => {
    const job =item.job;
    const comment = item.comment;
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
        <View style={[styles.container ]}>
            <View style={styles.container_child1}>
                <Image style={styles.image} source={{uri: job.company.image}}  resizeMode='contain'/>
            </View>
            <View style={styles.container_child2}>
                <Text numberOfLines={1} style={styles.jobpost}>{job.name}</Text>
                <Text style={styles.company}>{job.company.company_name}</Text>
            </View> 
            <Space />
            <View style={styles.container_child3}>
                <Text style={styles.address}>{job.company.company_location}</Text>
                <Text style={styles.salary}>{job.salary}$ / month</Text>
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
                <Text style={styles.updated_at}>{formatDate(job.updated_at)}</Text>
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

        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 1,
        // },
        // shadowOpacity: 0.2,
        // shadowRadius: 1.65,

        // elevation: 3,
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
    updated_at:{
        fontFamily:'Urbanist-Medium',
        fontSize:18,
        color: '#616161',
        marginTop: 12,
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