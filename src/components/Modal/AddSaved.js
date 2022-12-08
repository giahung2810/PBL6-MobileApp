import React from 'react';
import {Button, StyleSheet, Text, View,TouchableOpacity,Image,TouchableWithoutFeedback} from 'react-native';
import Successful from '../../../assets/Successful.png'
import Space from '../Space'
import JobCard from '../JobsCard/JobCard'
import { useFocusEffect } from '@react-navigation/native';
import { get_Jobs_Favorites } from '../../redux/jobRequest';
import { useDispatch, useSelector } from 'react-redux';
import useDecodeTokens from '../../hooks/useDecodeToken'

const SaveJob = ({funout, item, fun,setList_jobs}) => {    
    const job = item.job;
    const dispatch = useDispatch();  
    const user = useSelector((state) => state.auth.login.currentUser);
    const id = useDecodeTokens(user.tokens.access).user_id;
    const getJobsAPi = async () => {
        // const result = await getJobs(dispatch);
        const result = await get_Jobs_Favorites(dispatch , id);
        setList_jobs(result);
    }
    useFocusEffect(
        React.useCallback(() => {
            
            return () => {
                console.log("Close", job);
                fun();
                getJobsAPi();
            };
        }, [])
      );
    return (
        <TouchableOpacity 
            style={styles.container} 
            // activeOpacity={1} 
            onPressOut={funout}
        >
            <TouchableWithoutFeedback>
                <View style={styles.content}>
                    <Text style={styles.title}>Saved Job</Text>
                    <Space />
                    <JobCard onPress={() => {}} item={item} />
                </View>
            </TouchableWithoutFeedback>
        </TouchableOpacity>
    )
    };
  
  const styles = StyleSheet.create({
    container:{
        height: '100%',
        justifyContent: 'flex-end',
        // alignItems: 'center',
        width: '100%',
    },
    content: {
      backgroundColor: 'white',
      padding: 28,
      borderRadius: 20,
    },
    title:{
        justifyContent: 'center',
        alignItems: 'center',
        color: '#212121',
        fontSize: 24,
        fontFamily: 'Urbanist-Bold',
        // paddingBottom: 24,
    }
  });
  
  export default SaveJob;