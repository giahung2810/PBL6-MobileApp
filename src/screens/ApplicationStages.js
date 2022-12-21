import React, {useState, useEffect, useLayoutEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import Topbar from '../components/topbar/Topbar'
import { AntDesign } from '@expo/vector-icons'; 
import JobDetailsCard from '../components/JobDetailHeaderCard/JobDetailsCard'
import Space from '../components/Space'
import Tag from '../components/Tag/Tag'
import ButtomApply from '../components/Button/ButtonApply';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';
import AccessToTest from '../components/Modal/AccessToTest';
import TimeInterview from '../components/TimeInterview/TimeInterview';
import { useDispatch } from 'react-redux';
import { getApplication } from '../redux/jobRequest';
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
const ApplicationStages = ({route}) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1500).then(() => setRefreshing(false));
  }, []);
  const navigation = useNavigation();
  const item = route.params.item;
  const job = route.params.job;
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
    useLayoutEffect(() => {  
        navigation.setOptions({ 
          // headerTitle: 'Applications',
          headerTitle:'',
          headerLeft : () => (
            <View style= {{ flexDirection: 'row' , alignItems: 'center'}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <Topbar headerTitle='Application Stages' icon = {false}/>
            </View>
          ),
        }) 
      }, []);
    const [Application, setApplication] = useState();
    const getApply = async () => {
      const result = await getApplication(dispatch, item.id);
      setApplication(result);
    };
    useFocusEffect(
      React.useCallback(() => {
        getApply();
        return () => {
          
        };
      }, [])
    );
    useEffect(() => {
      getApply();
    }, [refreshing]);
  return (      
    <View style={{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView style={{flex: 1, backgroundColor: '#fff'}}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        > 
            <View style={styles.container}>
            <JobDetailsCard item={job}/>
            <View style={{marginTop: 24, width: '100%'}}>
                <Space />
            </View>
            <Text style={styles.title}>Your Application Status</Text>
            <View style={{marginTop: 16, width: '100%'}}>
                {Application?.status === "apply" ?
                    <Tag tag={{text: "Just Apply", backgroundColor:'rgba(36, 107, 253, 0.08)', color:'#246BFD', height:54, fontSize:18}}/>
                : Application?.status === "test" ?
                    <Tag tag = {{text: "Waiting Test", backgroundColor:'rgba(250, 204, 21, 0.12)', color:'#FACC15', height:54, fontSize:18}} />
                : Application?.status === "set_schedule" ?
                    <Tag tag = {{text: 'Wating company set schedule', backgroundColor:'rgba(255,182,193, 0.4)', color:'rgb(255,20,147)', height:54, fontSize:18}} />
                : Application?.status === "interview_pending" ?
                    <Tag tag = {{text: 'Chose schedule to interview', backgroundColor:'rgba(255,140,0,0.3)', color:'rgb(255,69,0)', height:54, fontSize:18}} />
                : Application?.status === "schedule_interview" ?
                    <Tag tag = {{text: 'You have chosen time, please waiting', backgroundColor:'rgb(0, 255, 255)', color:'rgb(0, 0, 255)', height:54, fontSize:18}} />
                : Application?.status === "incomplete" ?
                    <Tag tag = {{text: 'You are FAILE, Good luck later', backgroundColor:'rgb(252, 88, 88)', color:'rgb(0, 0, 0)', height:54, fontSize:18}} />
                : Application?.status === "complete" ?
                    <Tag tag = {{text: 'Congratulation, You are PASS interview', backgroundColor:'rgb(163, 255, 163)', color:'rgb(0, 194, 0)', height:54, fontSize:18}} />
                : null
                }
            </View>
            </View>
            {Application?.status === "interview_pending" ?
              <TimeInterview id_applicant={Application?.id}/>
            : null
            }
            
        </ScrollView>
        <View style={styles.buttonbottom}>
                {Application?.status === "apply" ?
                  <ButtomApply onPress={() => navigation.goBack()} text="Waiting..."/>
                : Application?.status === "test" ?
                  <ButtomApply onPress={() => setModalVisible(!modalVisible)} text="Do Test" backgroundColor = 'rgba(250, 204, 21, 0.12)' color = '#FACC15' />
                : Application?.status === "set_schedule" ?
                  <ButtomApply onPress={() => navigation.goBack()} text="Waiting..." backgroundColor = 'rgba(255,182,193, 0.4)' color = 'rgb(255,20,147)' />
                : Application?.status === "interview_pending" ?
                  <ButtomApply onPress={() => navigation.goBack()} text="OK" backgroundColor='rgba(255,140,0,0.3)' color='rgb(255,69,0)'/>
                : Application?.status === "schedule_interview" ?
                  <ButtomApply onPress={() => navigation.goBack()} text="Waiting Link Interview" backgroundColor='rgb(0, 255, 255)' color='rgb(0, 0, 255)'/>
                : Application?.status === "incomplete" ?
                  <ButtomApply onPress={() => navigation.goBack()} text="Fail Test, Refer to other jobs" backgroundColor='rgb(252, 88, 88)' color='rgb(0, 0, 0)'/>
                : Application?.status === "complete" ?
                  <ButtomApply onPress={() => navigation.goBack()} text="Refer to other jobs" backgroundColor='rgb(163, 255, 163)' color='rgb(0, 194, 0)'/>
                : null
                }
        </View>
        <Modal 
          testID={'modal'}
          isVisible={modalVisible}
          // onSwipeComplete={this.close}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
          useNativeDriverForBackdrop
          swipeDirection={['down']}
          // styles={}
        >
          <AccessToTest 
            fun={() => {
                setModalVisible(false);
                navigation.navigate('Test', {id_test: job.job.id_test, id_job: job.job.id});
              }
            }
            funout={() => {
              setModalVisible(false);
            }}
          />
        </Modal>
    </View>
  );
};
export default ApplicationStages;

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
    // width: '95%',
    // position: 'absolute',
    // top:10,
    // bottom: 16,
    // left: 0,
    // zIndex:3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 18,
    
    // zIndex:10
    // alignSelf: 'flex-end',

  },
})
