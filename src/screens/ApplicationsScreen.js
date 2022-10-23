import React, {useState, useEffect, useLayoutEffect, useFocusEffect, useCallback} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import SearchBar from "../components/SearchBar";
import Topbar from '../components/topbar/Topbar'
import ApplicationCard from '../components/ApplicationCard/ApplicationCard'

const ApplicationsScreen = ({navigation}) => {
  const [term, setTerm] = useState('');

    useLayoutEffect(() => { 
        navigation.setOptions({ 
          headerTitle: '',
          headerLeft : () => (
            <View style= {{ flexDirection: 'row' , alignItems: 'center'}}>
              <Topbar headerTitle='Applications'/>
            </View> 
          ),
        }) 
      }, []);
  return (      
        <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
          <View style={styles.container}>
            <SearchBar 
              term= {term} 
              onTermChange = {setTerm}
            // onTermSubmit = {() => searchApi(term)}
            />
            <View style={{height: 8}} />
            <ApplicationCard />
            <ApplicationCard />
            <ApplicationCard />
            <ApplicationCard />
            <ApplicationCard />
            <ApplicationCard />
          </View>
        </ScrollView>
  );
};
export default ApplicationsScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24
  }
})
