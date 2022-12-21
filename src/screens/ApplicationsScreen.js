import React, {useState, useEffect, useLayoutEffect, useCallback} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Platform, StatusBar, RefreshControl } from 'react-native';
import SearchBar from "../components/Search/SearchBar";
import Topbar from '../components/topbar/Topbar'
import ApplicationCard from '../components/ApplicationCard/ApplicationCard'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { getListApplication } from '../redux/jobRequest';
import { useDispatch, useSelector } from 'react-redux';
import useDecodeTokens from '../hooks/useDecodeToken'
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
const ApplicationsScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1500).then(() => setRefreshing(false));
  }, []);
  const [term, setTerm] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [list_Application, setList_Application] = useState();
  const user = useSelector((state) => state.auth.login.currentUser);
  const id = user ? useDecodeTokens(user?.tokens.access).user_id : 0;
  useLayoutEffect(() => { 
      navigation.setOptions({ 
        headerTitle: '',
        headerLeft : () => (
          <View style= {{ flexDirection: 'row' , alignItems: 'center'}}>
            <Topbar headerTitle='Applications'/>
          </View> 
        ),
        headerTopInsetEnabled: false
      }) 
  }, []);
  const getListApply = async () => {
    const result = await getListApplication(dispatch, id);
    setList_Application(result);
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // do something
      getListApply();
      // console.log('ApplicationsScreen useEffect', list_Application);
    });
    return unsubscribe;
  },[navigation]);
  useFocusEffect(
    React.useCallback(() => {
      getListApply();
      return () => {
        
      };
    }, [])
  );
  // console.log('ApplicationsScreen ', list_Application);
  useEffect(() => {
    getListApply();
  }, [refreshing]);
  return (                    
    
        <View style={styles.container}>
        <ScrollView style={{flex: 1, backgroundColor: '#fff',paddingHorizontal: 24,}}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        >
            <View style={{height:12}}/>
            <SearchBar 
              term= {term} 
              onTermChange = {setTerm}
            // onTermSubmit = {() => searchApi(term)}
            />
            {/* <View style={{height: 8}} /> */}
            {/* <ApplicationCard item = {item}/>
            <ApplicationCard item = {item2}/> */}
            <View style={{height:10}}/>
            {list_Application?.map((item, index) => (
                <ApplicationCard item = {item} key={item.id}/>
            ))}

          
        </ScrollView></View>
  );
};
export default ApplicationsScreen;

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 24,
    flex:1,
    backgroundColor: '#fff'
  }
})
