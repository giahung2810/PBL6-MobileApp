import React, {useState, useEffect, useLayoutEffect, useCallback} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Button, RefreshControl } from 'react-native';
import SearchBar from "../components/Search/SearchBar";
import Topbar from '../components/topbar/Topbar'
import ApplicationCard from '../components/ApplicationCard/ApplicationCard'
import Profile from '../components/profile/Profile';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { getProfile, logoutUser } from '../redux/apiRequest';
import ButtonNavigate from '../components/Button/ButtonNavigate';
import useDecodeTokens from '../hooks/useDecodeToken'

import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

import { useFocusEffect } from '@react-navigation/native';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
const ProfileScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const isFetching = useSelector((state) => state.auth.logout.isFetching);
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(1000).then(() => setRefreshing(false));
    }, []);
    const handleLogout = () => {
        logoutUser(dispatch, navigation);
    }
    const user = useSelector((state) => state.auth.login.currentUser);
    const id = useDecodeTokens(user?.tokens.access)?.user_id;
    const [profile, setProfile] = useState();
    const getProfileAPI = async () => {
      const result = await getProfile(dispatch, id);
      setProfile(result);
    };
    
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
    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        // do something
        getProfileAPI();
      });
      console.log(profile);
      return unsubscribe;
    },[navigation]);
    useFocusEffect(
      React.useCallback(() => {
        getProfileAPI();
        return () => {
          
        };
      }, [])
    );
    // getProfileAPI();
  return (    

      <> 
      <ScrollView 
        style={{flex: 1, backgroundColor: '#fff'}}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <View style={{}}>
          <Profile profile={profile}/>
        </View>
        <ScrollView style={{flex: 1, backgroundColor: '#fff', paddingHorizontal: 18, }}>
          <TouchableOpacity onPress={() =>{navigation.navigate('Education', {profile})}} 
            style={{paddingVertical:18, flexDirection: 'row', alignItems: 'center',borderBottomWidth:1,borderColor: 'rgba(238, 238, 238, 0.5)'}}
          >
              <Ionicons name="school" size={24} color="red" style={styles.icon}/>
              <Text style={{fontFamily: 'Urbanist-SemiBold', fontSize: 18}}>Education</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>{navigation.navigate('Expirence' , {profile})}} 
            style={{paddingVertical:18, flexDirection: 'row', alignItems: 'center',borderBottomWidth:1,borderColor: 'rgba(238, 238, 238, 0.5)'}}
          >
              <MaterialIcons name="work" size={24} color="#246BFD" style={styles.icon}/>
              <Text style={{fontFamily: 'Urbanist-SemiBold', fontSize: 18}}>Expirences</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>{navigation.navigate('Skill' , {profile})}} 
            style={{paddingVertical:18, flexDirection: 'row', alignItems: 'center',borderBottomWidth:1,borderColor: 'rgba(238, 238, 238, 0.5)'}}
          >
              <FontAwesome5 name="brain" size={24} color="pink" style={styles.icon}/>
              <Text style={{fontFamily: 'Urbanist-SemiBold', fontSize: 18}}>Skill</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>{navigation.navigate('Skill' , {profile})}} 
            style={{paddingVertical:18, flexDirection: 'row', alignItems: 'center',borderBottomWidth:1,borderColor: 'rgba(238, 238, 238, 0.5)'}}
          >
              <Ionicons name="settings" size={26} color="#246BFD" style={styles.icon}/>
              <Text style={{fontFamily: 'Urbanist-SemiBold', fontSize: 18}}>Change your password</Text>
          </TouchableOpacity>
        </ScrollView>
        {/* <Button title="Logout" onPress = {handleLogout} /> */}
        </ScrollView>  
        <View style={{  }}>
          <ButtonNavigate title="Logout" color="#F75555" onPress = {handleLogout}/>
        </View>
      
      </>
    
  );
}; 
export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24
  },
  icon:{
    marginRight: 16
  }
})
