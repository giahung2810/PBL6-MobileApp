import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import DatImage from '../../assets/dat.jpg'
import { Avatar } from 'react-native-paper'
import SearchBar from "../components/Search/SearchBar";
import RecommendList from '../components/box_job/RecommendList'
import Title from '../components/Title'
import RecentList from '../components/recent_job/RecentList';
import ListCompany from '../components/PopularCompany/ListCompany';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import DynamicHEaderSearch from '../components/Animation/DynamicHeaderSearchbar'
import { getJobs, get_Jobs_Favorites } from '../redux/jobRequest';
import { getTopCompanys } from '../redux/companyRequest';
import { checkToken } from '../redux/apiRequest';
import AppLoader from '../components/Loading/AppLoader';
import useDecodeTokens from '../hooks/useDecodeToken'

const HomeScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [term, setTerm] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.login.currentUser);
  // console.log(user)
  const id = user ? useDecodeTokens(user?.tokens.access).user_id : 0;
  // console.log(id)
  // const [id, setID] = useState(0);
  // if(user) {
  //   setID(useDecodeTokens(user?.tokens.access).user_id);
  // }

  // const list_jobs = useSelector((state) => state.job.job.allJobs);
  const job_isFetching = useSelector((state) => state.job.job.isFetching);
  const company_isFetching = useSelector((state) => state.company.companys.isFetching);
  // const list_companys = useSelector((state) => state.company.companys.allCompanys);
  const [list_companys, setList_companys] = useState();
  const [list_jobs, setList_jobs] = useState();
  
  const getCompanysAPi = async () => {
    const result = await getTopCompanys(dispatch);
    setList_companys(result);
  };
  const getJobsAPi = async () => {
    // const result = await getJobs(dispatch);
    const result = await get_Jobs_Favorites(dispatch ,id);
    setList_jobs(result);
  }
  useEffect(() => {
    if(user === null){
      navigation.navigate('Login');
    } else {
      checkToken(dispatch, navigation, user?.tokens.refresh);
    }
  }, []);
  useEffect(() => {
        getCompanysAPi();
        // console.log('list_companys useEffect', list_companys);
        getJobsAPi();
  }, [id, refreshing]);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // do something
      if(user) {
        getCompanysAPi();
        // console.log('list_companys useEffect', list_companys);
        getJobsAPi();
      }
    });
    return unsubscribe;
  },[navigation]);
  useFocusEffect(
    React.useCallback(() => {
      getJobsAPi();
      getCompanysAPi();
        return () => {

        };
    }, [])
    
);
// useEffect(() => {
//   getCompanysAPi();
//   // console.log('list_companys useEffect', list_companys);
//   getJobsAPi();
// }, [refreshing]);
  return (   
    <>
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <DynamicHEaderSearch username={user?.username} refreshing= {refreshing} setRefreshing={setRefreshing}>
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <View style={styles.boxContainer}>
            <SearchBar 
              term= {term} 
              onTermChange = {setTerm}
              // onTermSubmit = {() => searchApi(term)}
            />
            <ListCompany list={list_companys ? list_companys : []} />
            <RecentList list={list_jobs ? list_jobs : []} setList_jobs={setList_jobs}/>
          </View>
        </View>
      </DynamicHEaderSearch>
      {/* {job_isFetching || company_isFetching ? <AppLoader2 /> : null} */}
    </View>
    {/* {job_isFetching || company_isFetching ? <AppLoader /> : null} */}
    </> 
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  boxHeader: {
    backgroundColor: '#0085FF',
    position: 'absolute',
    width: '100%',
    height: 178,
    left: 0,
    top: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  boxContainer: {
    height: '100%', 
    // backgroundColor: '#FFF',
    marginHorizontal: 24,
    marginTop: 8, 
    flex: 1,
  },
  boxInfor: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  boxName: {
    marginRight: 120,
    
  },
  helloText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: "white",
  },
  nameText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "white",
  },
  Image : {
    // marginLeft: 120,
    marginTop: 4
  },
  joblist: {
    flexDirection: 'row',
    marginBottom: 10
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    marginLeft:6,
    marginVertical: 12
  }
})
