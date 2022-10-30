import React, {useState, useEffect, useLayoutEffect, useFocusEffect, useCallback} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Button } from 'react-native';
import SearchBar from "../components/Search/SearchBar";
import Topbar from '../components/topbar/Topbar'
import ApplicationCard from '../components/ApplicationCard/ApplicationCard'
import Profile from '../components/profile/Profile';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { logoutUser } from '../redux/apiRequest';
import ButtonNavigate from '../components/Button/ButtonNavigate';

const ProfileScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const isFetching = useSelector((state) => state.auth.logout.isFetching);
    const handleLogout = () => {
        logoutUser(dispatch, navigation);
    }
    useLayoutEffect(() => { 
        navigation.setOptions({ 
          headerTitle: '',
          headerLeft : () => (
            <View style= {{ flexDirection: 'row' , alignItems: 'center'}}>
              <Topbar headerTitle='Profile'/>
            </View> 
          ),
        }) 
      }, []);
  return (    
    <>
        <Profile/>
        <ScrollView style={{flex: 1, backgroundColor: '#fff', paddingHorizontal: 18}}>
          
        </ScrollView>
        {/* <Button title="Logout" onPress = {handleLogout} /> */}
        <ButtonNavigate title="Logout" color="#F75555" onPress = {handleLogout}/>
        
    </>  
  );
}; 
export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24
  }
})
