import React, {useState, useEffect, useLayoutEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Topbar from '../components/topbar/Topbar'
import { AntDesign } from '@expo/vector-icons'; 
import JobDetailsCard from '../components/JobDetailHeaderCard/JobDetailsCard'
import Space from '../components/Space'
import Tag from '../components/Tag/Tag'
import ButtomApply from '../components/Button/ButtonApply';

const NotificationAboutJob = ({navigation}) => {

    useLayoutEffect(() => {  
        navigation.setOptions({ 
          // headerTitle: 'Applications',
          headerTitle:'',
          headerLeft : () => (
            <View style= {{ flexDirection: 'row' , alignItems: 'center'}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <Topbar headerTitle='Notification' icon = {false}/>
            </View> 
          ),
        }) 
      }, [])
  return (      
    <View style={{flex: 1, height: '100%'}}>
        <ScrollView style={{flex: 1, backgroundColor: '#fff', height: '100%'}}>
            <View style={styles.container}>
            {/* <JobDetailsCard /> */}
            <View style={{marginTop: 24, width: '100%'}}>
                <Space />
            </View>
            <Text style={styles.title}>Your Application Status</Text>
            <View style={{marginTop: 16, width: '100%'}}>
                <Tag tag={{text: 'Application Status', backgroundColor:'rgba(36, 107, 253, 0.08)', color:'#246BFD', height:54, fontSize:18}}/>
            </View>
            </View>
        </ScrollView>
        <View style={styles.buttonbottom}>
            <ButtomApply onPress={() => navigation.goBack()} text="Waiting..."/>
        </View>
    </View>
  );
};
export default NotificationAboutJob;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    alignItems: 'center',
    marginTop: 16
  },
  title:{
    marginTop: 10,
    fontFamily: 'Urbanist-SemiBold',
    fontSize:18,
    color: '#424242'
  },
  buttonbottom:{
    height: 60,
    width: '95%',
    position: 'absolute',
    // top:10,
    bottom: 16,
    left: 0,
    zIndex:3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 8,
    // alignSelf: 'flex-end',

  },
})
