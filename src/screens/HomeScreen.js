import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import DatImage from '../../assets/dat.jpg'
import { Avatar } from 'react-native-paper'
import SearchBar from "../components/SearchBar";
import RecommendList from '../components/box_job/RecommendList'
import Title from '../components/Title'
import RecentList from '../components/recent_job/RecentList';
import PopularList from '../components/Popular_job/PopularList'

const HomeScreen = () => {
  const [term, setTerm] = useState('');
  return (      
    <>
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.boxHeader}></View>
    <View style={styles.boxContainer}>
      <View style={styles.boxInfor}>
        <View style={styles.boxName}>
          <Text style={styles.helloText}>Hello</Text>
          <Text style={styles.nameText}>GIA HWNG</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Avatar.Image style={styles.Image} size={60} source={require('../../assets/dat.jpg')} />
          </TouchableOpacity>
        </View>
      </View>
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
    marginTop:58,
    marginHorizontal: 24
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
