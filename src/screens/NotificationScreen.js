import React, {useState, useEffect, useLayoutEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, RefreshControl } from 'react-native';
import Topbar from '../components/topbar/Topbar'
import { AntDesign } from '@expo/vector-icons'; 
import NotifyEmpty from '../components/Empty/NotifyEmpty'
import Notify from '../components/NotifyJob/Notify'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const NotificationScreen = () => {
  axios({
    method: "get",
    url: "https://api.quangdinh.me/reviews/reviews",
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function (response) {
      //handle success
      // console.log(response.data)
      setReportesNot(response.data.count)
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });

  const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(1000).then(() => setRefreshing(false));
    }, []);
  // console.log(route)
  const navigation = useNavigation();
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

  const [reportesNot, setReportesNot] = useState(6);
  useLayoutEffect(() => {
    navigation.getParent().setOptions({
      tabBarBadge: reportesNot,
    });
  }, [reportesNot])
  return (      
        <ScrollView style={{ flex: 1 , backgroundColor: '#fff'}} 
          contentContainerStyle={{ flexGrow: 1 }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        >
            {/* <NotifyEmpty/> */}
            {/* <Notify />
            <Notify />
            <Notify />
            <Notify />
            <Notify />
            <Notify /> */}
            {/* <Text>{route.params.currentCity.time}</Text> */}
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
