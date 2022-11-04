import React, {useState, useEffect, useLayoutEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import SearchBar from "../components/Search/SearchBar";
import Topbar from '../components/topbar/Topbar'
import JobCard from '../components/JobsCard/JobCard'
import Modal from 'react-native-modal';
import RemoveSaved from '../components/Modal/RemoveSaved'
const SavedJobs = ({navigation}) => {
  const [term, setTerm] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
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
      }, [])
  return (      
        <ScrollView style={{flex: 1, backgroundColor: '#fff',}}>
            <View style={styles.container}>
                <SearchBar 
                term= {term} 
                onTermChange = {setTerm}
                // onTermSubmit = {() => searchApi(term)}
                />
                <View style={{height: 8}} />
                <JobCard onPress={() => setModalVisible(!modalVisible)} favorite={true}/>
                <JobCard onPress={() => setModalVisible(!modalVisible)} favorite={true}/>
                {/* <JobCard onPress={() => setModalVisible(!modalVisible)} favorite={true}/>
                <JobCard onPress={() => setModalVisible(!modalVisible)} favorite={true}/>
                <JobCard onPress={() => setModalVisible(!modalVisible)} favorite={true}/>
                <JobCard onPress={() => setModalVisible(!modalVisible)} favorite={true}/> */}
            </View>
            <Modal
                testID={'modal'}
                isVisible={modalVisible}
                onSwipeComplete={() => setModalVisible(false)}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
                swipeDirection={['up', 'left', 'right', 'down']}
                style={styles.view}>
                <RemoveSaved fun={() => 
                {
                    setModalVisible(false);
                    // navigation.navigate('Application', { 
                    // screen: 'ApplicationsScreen',
                    // initial: false,
                    // });
                }
                }/>
            </Modal>
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
