import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { getListCompanys } from '../redux/companyRequest';
import { useState, useEffect , useLayoutEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Topbar from '../components/topbar/Topbar';
import TopCompany from '../components/PopularCompany/Company';
import { AntDesign } from '@expo/vector-icons'; 
import AppLoader from '../components/Loading/AppLoader';
import { get_Jobs_Favorites } from '../redux/jobRequest';
import JobCard from '../components/JobsCard/JobCard';
import useDecodeTokens from '../hooks/useDecodeToken'
import RecentJob from '../components/recent_job/RecentJob';

const ListJobScreen = () => {
  const [list_jobs, setList_jobs] = useState();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = useSelector((state) => state.auth.login.currentUser);
  const id = useDecodeTokens(user.tokens.access).user_id;
  const job_isFetching = useSelector((state) => state.job.job.isFetching);

  const getJobsAPi = async () => {
    // const result = await getJobs(dispatch);
    const result = await get_Jobs_Favorites(dispatch ,id);
    setList_jobs(result);
  }
  useEffect(() => {
    console.log('list_jobs useEffect', list_jobs);
    getJobsAPi();
  },[]);
  console.log('list_jobs LISTSCREEN', list_jobs);

    useLayoutEffect(() => { 
        navigation.setOptions({ 
        headerTitle: '',
        headerLeft : () => (
            <View style= {{ flexDirection: 'row' , alignItems: 'center'}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Topbar headerTitle='Job' icon = {false}/>
            </View> 
        ),
        })  
    }, []);

  return (
    <View style={styles.container}>
        <FlatList
            showsHorizontalScrollIndicator = {false}
            showsVerticalScrollIndicator = {false}
            data={list_jobs}
            keyExtractor = {(item) => item.job.id}
            style={{paddingHorizontal: 16}}
            renderItem = {({item}) => {
                return (
                    <RecentJob 
                        item={item} 
                        setList_jobs={setList_jobs}
                    />
                );
            }}
        />
      {job_isFetching ? <AppLoader /> : null}
    </View>
  )
}

export default ListJobScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // paddingHorizontal: 16,
    flex:1
  }
})