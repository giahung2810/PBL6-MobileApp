import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import DatImage from '../../assets/dat.jpg'
import { Avatar } from 'react-native-paper'
import SearchBar from "../components/Search/SearchBar";
import RecommendList from '../components/box_job/RecommendList'
import Title from '../components/Title'
import RecentList from '../components/recent_job/RecentList';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import DynamicHEaderSearch from '../components/Animation/DynamicHeaderSearchbar'

const HomeScreen = () => {
  const [term, setTerm] = useState('');
  const navigation = useNavigation();
  const user = useSelector((state) => state.auth.login.currentUser);
  console.log(user?.username);
  useEffect(() => {
    if(!user){
      navigation.navigate('Login');
    }
  })
  return (      
    <>
    <DynamicHEaderSearch username={user?.username}>
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      {/* <View style={styles.boxHeader}></View> */}
    <View style={styles.boxContainer}>
      <SearchBar 
        term= {term} 
        onTermChange = {setTerm}
        // onTermSubmit = {() => searchApi(term)}
      />
      {/* <Title title='Recomendation'/> */}
        {/* <RecommendList />  */}
      {/* <Title title='Recent Job List'/> */}
      <RecentList />
      <RecentList />
      <RecentList />
      <RecentList />
      <RecentList />
    </View>
    </ScrollView>
    </DynamicHEaderSearch>
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
    marginTop: 8
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
