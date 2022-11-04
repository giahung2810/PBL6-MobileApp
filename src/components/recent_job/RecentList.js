import JobCard from '../JobsCard/JobCard'
import React, {useState} from 'react';
import { View, Image, Text , StyleSheet, TouchableOpacity } from 'react-native';
import Title from '../Title'
import RecentJob from './RecentJob';
const RecentList = () => {
    return (
        <View style={styles.container}>
            <Title title='Rencent Job List' />
            <View style={styles.list}>
                <RecentJob /> 
                <RecentJob />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    list: {
        // flexDirection:'row'
    }
});

export default RecentList;