import React, {useState, useEffect, useLayoutEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Topbar from '../components/topbar/Topbar'
import { AntDesign } from '@expo/vector-icons'; 
import NotifyEmpty from '../components/Empty/NotifyEmpty'
import Notify from '../components/NotifyJob/Notify'
const NotificationScreen = ({navigation}) => {
    useLayoutEffect(() => { 
        navigation.setOptions({
          // headerTitle: 'Applications',
          headerTitle:'',
          headerLeft : () => (
            <View style= {{ flexDirection: 'row' , alignItems: 'center'}}>
                <Topbar headerTitle='Notification' />
            </View> 
          ),
        }) 
      }, [])
  return (      
        <ScrollView style={{ flex: 1 , backgroundColor: '#fff'}} contentContainerStyle={{ flexGrow: 1 }}>
            {/* <NotifyEmpty/> */}
            <Notify />
            <Notify />
            <Notify />
            <Notify />
            <Notify />
            <Notify />
        </ScrollView>
  );
};
export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  view: {
    margin: 0,
  },
})
