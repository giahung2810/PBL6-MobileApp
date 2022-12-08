import React, {useState, useEffect, useLayoutEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import SearchBar from "../components/Search/SearchBar";
import Topbar from '../components/topbar/Topbar'
import JobCard from '../components/JobsCard/JobCard'
import { get_SaveJobs } from '../redux/jobRequest';
import { useFocusEffect } from '@react-navigation/native';
import useDecodeTokens from '../hooks/useDecodeToken'
import { useDispatch, useSelector } from 'react-redux';


const SavedJobs = ({navigation}) => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const id = useDecodeTokens(user?.tokens.access)?.user_id;
  const dispatch = useDispatch();
  const [term, setTerm] = useState('');
  const [savejob, setSaveJob] = useState();
  const getSaveJobAPI = async () => {
    const result = await get_SaveJobs(dispatch, id);
    setSaveJob(result);
  };
    useLayoutEffect(() => { 
        navigation.setOptions({ 
          // headerTitle: 'Applications',
          headerTitle:'',
          headerLeft : () => (
            <View style= {{ flexDirection: 'row' , alignItems: 'center',}}>
              <Topbar headerTitle='Save Jobs'/>
            </View> 
          ),
        }) 
      }, []);
      useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          // do something
          getSaveJobAPI();
        });
        // console.log(profile);
        return unsubscribe;
      },[navigation]);
      useFocusEffect(
        React.useCallback(() => {
          getSaveJobAPI();
          return () => {
            
          };
        }, [])
      );
      console.log("save job",savejob)
  return (      
        <ScrollView style={{flex: 1, backgroundColor: '#fff',}}>
            <View style={styles.container}>
                <SearchBar 
                term= {term} 
                onTermChange = {setTerm}
                // onTermSubmit = {() => searchApi(term)}
                />
                <View style={{height: 8}} />
                {/* <JobCard onPress={() => setModalVisible(!modalVisible)} favorite={true}/>
                <JobCard onPress={() => setModalVisible(!modalVisible)} favorite={true}/>
                <JobCard onPress={() => setModalVisible(!modalVisible)} favorite={true}/>
                <JobCard onPress={() => setModalVisible(!modalVisible)} favorite={true}/>
                <JobCard onPress={() => setModalVisible(!modalVisible)} favorite={true}/>
                <JobCard onPress={() => setModalVisible(!modalVisible)} favorite={true}/> */}
                {/* {savejob?.map((item) => {
                   return (<View key={item.id}><JobCard job={item.job} favorite={true} setSaveJob={setSaveJob}/></View>);
                }
                )} */}
                {savejob?.map( (item, index) =>{
                    return (
                      <View key={index}><JobCard item={item} favorite={true} setSaveJob={setSaveJob}/></View>
                    );
                })}
            </View>
        </ScrollView>
  );
};
export default SavedJobs;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24
  },
  view: {
    margin: 0,
  },
})
