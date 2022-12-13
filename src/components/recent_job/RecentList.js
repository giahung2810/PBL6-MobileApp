import JobCard from '../JobsCard/JobCard'
import React, {useState} from 'react';
import { View, Image, Text , StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Title from '../Title'
import RecentJob from './RecentJob';
import { useNavigation } from '@react-navigation/native';

const RecentList = ({list, setList_jobs}) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Title title='Rencent Job List' onPress={() => {
                // const list_company = getListCompanys(dispatch);
                navigation.navigate('Home', { 
                    screen: 'ListJob',
                    initial: false,
                  },)
            }}/>
            {list.map((item, index) => (
                <RecentJob 
                    item={item} 
                    key={item.job.id} 
                    setList_jobs={setList_jobs}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 60,
    },
});

export default RecentList;