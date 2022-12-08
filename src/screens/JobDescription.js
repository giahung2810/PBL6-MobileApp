// import * as React from 'react';
import React, {useState, useRef, useLayoutEffect, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image,ScrollView, Animated } from 'react-native';
import DescriptionScreen from '../components/DescriptionScreen/DescriptionScreen';
import { MaterialIcons } from '@expo/vector-icons'; 
import HeaderCompanyDescription from '../components/HeaderCompanyDescription'
import ButtomApply from '../components/Button/ButtonApply';
import DynamicHeader from '../components/Animation/DynamicHeaderDecription';
import Topbar from '../components/topbar/Topbar'
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import JobDetailsCard from '../components/JobDetailHeaderCard/JobDetailsCard'
import { Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import {KeyboardAvoidingView , Platform, TouchableWithoutFeedback, Keyboard  } from 'react-native';
import TextComment from '../components/Comment/TextComment';
import { useDispatch, useSelector } from 'react-redux';
import { getJob } from '../redux/jobRequest';

// import { navigate } from '../../navigationRef';

const JobDescription = ({route}) => {
  const item = route.params.item;
  const job =item.job;
  const comment = item.comment;
  const getjob = useSelector((state) => state.job.job.job);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(false);
  const agregarFavoritos = () => {
      setFavorite(!favorite);
    };
  useEffect(() => { 
    getJob(dispatch,job.id);
  }, [job.id]);
  useLayoutEffect(() => { 
    navigation.setOptions({ 
      headerTitle: '',
      headerLeft : () => (
        <View style= {{ flexDirection: 'row' , alignItems: 'center'}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Topbar headerTitle={job.company.company_name} icon = {false}/>
        </View> 
      ), 
      headerRight: () => (
        <View style={{flexDirection: 'row' , alignItems: 'center'}}>
          <TouchableOpacity onPress={() => agregarFavoritos()} style={{ paddingVertical:4, paddingHorizontal:8 }}>
              {   favorite ? 
                  <TouchableOpacity onPress={() => { agregarFavoritos()}} >
                      <FontAwesome name="bookmark" size={28} color="blue" />
                  </TouchableOpacity>
                      : <FontAwesome name="bookmark-o" size={28} color="black" />
              }
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("SEND")} style={{ paddingVertical:4, paddingHorizontal:8 }}>
            <Feather name="send" size={24} color="black" />
          </TouchableOpacity>
        </View> 
      ),
    }) 
  }, [favorite]);
    return (      
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{flex: 1, paddingBottom: 10}}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 16 : null}
        >
        <ScrollView style={styles.detail} >
          <View style={{marginVertical:8}}>
            <JobDetailsCard item = {getjob || item}/>
          </View>
          <DescriptionScreen item = {getjob || item}/>
        </ScrollView>
        <View style={styles.buttonbottom}>
          <View style={styles.boxButton_apply}>
            <ButtomApply onPress={() => navigation.navigate('Apply', {item})} text='Apply'/>
          </View>
        </View>
        </KeyboardAvoidingView>
      </View>
    );
  };
export default  JobDescription;
  
const styles = StyleSheet.create({
  detail:{
    height: 990,
    flex:1,
    paddingHorizontal:12
  },
  image:{
    width: '100%',
    height: 200,
    zIndex: 1
  },
  boxContainer: {
    width: '95%',
    height: 100,
    backgroundColor: '#fff',
    justifyContent: 'center', 
    alignItems: 'center',
    zIndex: 3,
    borderRadius:20,
    marginHorizontal: 8,
    paddingHorizontal: 8,
    position: 'absolute',
    top: 150,

    shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
  },
  Image : {
    position: 'absolute',
    bottom: 70,
    zIndex: 3
  },
  boxAvatar: {
    justifyContent: 'center', 
    alignItems: 'center',
    zIndex: 1
  },
  title :{
    fontSize: 24,
    fontWeight: '600',
    marginTop: 8
  },
  address:{
    marginTop: 4
  },
  buttonStyle: {
    height: 90,
    width: 90,
    backgroundColor: 'black',
    borderRadius: 100,
    zIndex: 4
  },
  space: {
    height: 55,
    backgroundColor: '#fff'
  },
  boxButton_apply:{
    // backgroundColor: '#0085FF',
    // height: 80
    // padding: 12,
    alignItems: 'center',
    justifyContent: 'center', 
    // borderRadius: 20,
    flex:2,
    marginHorizontal: 16
  },
  buttonbottom:{
    // height: 80
    width: '100%',
    // position: 'absolute',
    // bottom: 40,
    zIndex:4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginLeft: 12,
    marginBottom: 20
  },
  boxButton_save:{
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center', 
    borderWidth:2,
    borderColor: '#0085FF',
    borderRadius: 20,
    flexDirection: 'row',
  },
  buttonText_save :{
    color: '#0085FF',
    fontSize: 16,
    fontWeight: '500',
  },
  icon:{
    color: '#0085FF',
    marginLeft: 6
  }
})
  