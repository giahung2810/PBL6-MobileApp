import React, {useState, useEffect, useLayoutEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Topbar from '../components/topbar/Topbar'
import { AntDesign } from '@expo/vector-icons'; 
import JobDetailsCard from '../components/JobDetailHeaderCard/JobDetailsCard'
import Space from '../components/Space'
import Tag from '../components/Tag/Tag'
import ButtomApply from '../components/Button/ButtonApply';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';
import AccessToTest from '../components/Modal/AccessToTest';
import TimeInterview from '../components/TimeInterview/TimeInterview';

const ApplicationStages = ({route}) => {
  const navigation = useNavigation();
  const item = route.params.item;
  const job = route.params.job;
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
      }, [])
  return (      
    <View style={{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
            <View style={styles.container}>
            <JobDetailsCard item={job}/>
            <View style={{marginTop: 24, width: '100%'}}>
                <Space />
            </View>
            <Text style={styles.title}>Your Application Status</Text>
            <View style={{marginTop: 16, width: '100%'}}>
                {item.status === "apply" ?
                    <Tag tag={{text: "Just Apply", backgroundColor:'rgba(36, 107, 253, 0.08)', color:'#246BFD', height:54, fontSize:18}}/>
                : item.status === "test" ?
                    <Tag tag = {{text: "Waiting Test", backgroundColor:'rgba(250, 204, 21, 0.12)', color:'#FACC15', height:54, fontSize:18}} />
                : item.status === "set_schedule" ?
                    <Tag tag = {{text: 'Wating company set schedule', backgroundColor:'rgba(255,182,193, 0.4)', color:'rgb(255,20,147)', height:54, fontSize:18}} />
                : item.status === "interview_pending" ?
                    <Tag tag = {{text: 'Chose schedule to interview', backgroundColor:'rgba(255,140,0,0.3)', color:'rgb(255,69,0)', height:54, fontSize:18}} />
                : null
                }
            </View>
            </View>
            {item.status === "interview_pending" ?
              <TimeInterview/>
            : null
            }
            
        </ScrollView>
        <View style={styles.buttonbottom}>
                {item.status === "apply" ?
                  <ButtomApply onPress={() => navigation.goBack()} text="Waiting..."/>
                : item.status === "test" ?
                  <ButtomApply onPress={() => setModalVisible(!modalVisible)} text="Do Test" backgroundColor = 'rgba(250, 204, 21, 0.12)' color = '#FACC15' />
                : item.status === "set_schedule" ?
                  <ButtomApply onPress={() => navigation.goBack()} text="Waiting..." backgroundColor = 'rgba(255,182,193, 0.4)' color = 'rgb(255,20,147)' />
                : item.status === "interview_pending" ?
                  <ButtomApply onPress={() => navigation.goBack()} text="OK" backgroundColor='rgba(255,140,0,0.3)' color='rgb(255,69,0)'/>
                : null}
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
                navigation.navigate('Test', {id_test: job.job.id_test});
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
