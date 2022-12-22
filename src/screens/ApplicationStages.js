import React, {useState, useEffect, useLayoutEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, RefreshControl, Image } from 'react-native';
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
import { cancel_interview, getApplication } from '../redux/jobRequest';
import CancelInterview from '../components/Modal/CancelInterview';
import Change from '../../assets/change.png'
import moment from 'moment';

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
  const [reschedule, setReshedule] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible_cancel, setModalVisible_cancel] = useState(false);
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
      // console.log('refreshing')
    }, [refreshing,modalVisible_cancel]);
    // console.log(Date(Application?.interview_date_official).toLocaleString())
    const date = new  Date(Application?.interview_date_official).getUTCDate() ;
    const month = new  Date(Application?.interview_date_official).getUTCMonth() ;
    const year  = new  Date(Application?.interview_date_official).getUTCFullYear();
    const hours = new  Date(Application?.interview_date_official).getUTCHours();
    const minutes  = new  Date(Application?.interview_date_official).getUTCMinutes() === 0 ? '00' : new  Date(Application?.interview_date_official).getUTCMinutes();
    const Time  = `${hours}:${minutes}, ${date}/${month}/${year}`
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
                    <Tag tag = {{text: 'Chose schedule to interview', backgroundColor:'rgba(209, 163, 255,0.3)', color:'rgb(128, 0, 255)', height:54, fontSize:18}} />
                : Application?.status === "schedule_interview" ?
                    <Tag tag = {{text: 'You have chosen time, please waiting', backgroundColor:'rgb(143, 206, 255)', color:'rgb(0, 0, 255)', height:54, fontSize:18}} />
                : Application?.status === "incomplete" ?
                    <Tag tag = {{text: 'You are FAILE, Good luck later', backgroundColor:'rgb(252, 88, 88)', color:'rgb(0, 0, 0)', height:54, fontSize:18}} />
                : Application?.status === "complete" ?
                    <Tag tag = {{text: 'Congratulation, You are PASS interview', backgroundColor:'rgb(163, 255, 163)', color:'rgb(0, 194, 0)', height:54, fontSize:18}} />
                : Application?.status === "cancel_interview" ?
                    <Tag tag = {{text: 'You are cancelled your interview', backgroundColor:'rgb(252, 88, 88)', color:'rgb(0, 0, 0)', height:54, fontSize:18}} />
                : null
                }
            </View>
            </View>
            
            {Application?.status === "schedule_interview"?
              (
                <View style={{alignItems:'center', marginTop:12, justifyContent: 'center',}}>
                  <Text style={{fontSize: 16, fontFamily: 'Urbanist-SemiBold', color: 'rgb(0, 0, 255)'}}>
                    You have chosen <Text style={{fontSize: 18, fontFamily: 'Urbanist-SemiBold', color: 'rgb(255, 0, 0)'}}>{Time}</Text> before
                  </Text>
                  <View style={{width: '100%',}}
                  >
                  <TouchableOpacity style={[
                    {alignItems:'center', 
                    justifyContent: 'center',
                    marginHorizontal: 56,
                    backgroundColor: '#FFFFFF',
                    flexDirection: 'row',
                    // borderWidth: 1,
                    }]}
                    onPress={() => setReshedule(!reschedule)}
                  >
                    <Image source={Change} style={styles.image} resizeMode='contain' />
                    <Text style={{paddingVertical:20, fontFamily: 'Urbanist-Bold', fontSize:14, color: '#357ebd'}}>Reschedule</Text>
                  </TouchableOpacity>
                  </View>
                </View>
              )
            : null
            }

            {Application?.status === "interview_pending" || reschedule ?  
                <TimeInterview id_applicant={Application?.id} getApply={getApply}/>
            : null
            }
            
            {Application?.status === "interview_pending" || Application?.status === "schedule_interview"?
              <View style={{marginHorizontal: 56,}}>
                <ButtomApply onPress={() => {setModalVisible_cancel(!modalVisible_cancel)}} text="Cancel Interview" backgroundColor='rgb(255, 255, 255)' color='rgb(255, 0, 0)' borderColor='rgb(255, 0, 0)'/>
              </View>
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
                  // <ButtomApply onPress={() => navigation.goBack()} text="OK" backgroundColor='rgba(209, 163, 255, 0.3)' color='rgb(128, 0, 255)'/>
                  null
                : Application?.status === "schedule_interview" ?
                  <ButtomApply onPress={() => navigation.goBack()} text="Waiting Link Interview" backgroundColor='rgb(143, 206, 255)' color='rgb(0, 0, 255)'/>
                : Application?.status === "incomplete" ?
                  <ButtomApply onPress={() => navigation.goBack()} text="Fail Test, Refer to other jobs" backgroundColor='rgb(252, 88, 88)' color='rgb(0, 0, 0)'/>
                : Application?.status === "complete" ?
                  <ButtomApply onPress={() => navigation.goBack()} text="We will connect with you soon" backgroundColor='rgb(163, 255, 163)' color='rgb(0, 194, 0)'/>
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
        <Modal 
          testID={'modal'}
          isVisible={modalVisible_cancel}
          // onSwipeComplete={this.close}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible_cancel(!modalVisible_cancel);
          }}
          useNativeDriverForBackdrop
          swipeDirection={['down']}
          // styles={}
        >
          <CancelInterview
            onPress_cancel={() => {
                cancel_interview(Application?.id);
                setModalVisible_cancel(false);
              }
            }
            onPressOut_cancel={() => {
              setModalVisible_cancel(false);
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
    // height: 60,
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
  image: {
    width: 28,
    height: 28,
    // borderRadius: 10,
    // marginRight: 10,
    // borderWidth: 1,
    // borderColor: '#EEEEEE'
},
})
