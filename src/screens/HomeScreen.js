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
import { useNavigation } from '@react-navigation/native';
import DynamicHEaderSearch from '../components/Animation/DynamicHeaderSearchbar'
import { getJobs } from '../redux/jobRequest';
import { getTopCompanys } from '../redux/companyRequest';

const HomeScreen = () => {
  const [term, setTerm] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.login.currentUser);
  const list_jobs = useSelector((state) => state.job.job.allJobs);
  const list_companys = useSelector((state) => state.company.company.allCompanys);
  useEffect(() => {
    if(user === null){
      navigation.navigate('Login');
    } else {
      getJobs(dispatch);
      getTopCompanys(dispatch);
    }
  }, [user]);
  return (      
    <View style={{flex: 1, backgroundColor: '#fff'}}>
    <DynamicHEaderSearch username={user?.username}>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.boxContainer}>
          <SearchBar 
            term= {term} 
            onTermChange = {setTerm}
            // onTermSubmit = {() => searchApi(term)}
          />
          <ListCompany list={list_companys}/>
          <RecentList list={list_jobs? list_jobs.results : []}/>
        </View>
      </View>
    </DynamicHEaderSearch>
    </View>
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
