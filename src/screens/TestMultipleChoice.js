import { AppState, BackHandler, StyleSheet, Text, View,Modal } from 'react-native'
import React from 'react'
import Question from '../components/TestMutiChoice/Question'
// import Modal from 'react-native-modal';
import CountDown from 'react-native-countdown-component';
import { useEffect } from 'react';
import DynamicPageExam from '../components/Animation/DynamicPageExam';
import ButtomApply from '../components/Button/ButtonApply';
import { useNavigation } from '@react-navigation/native';
import AppLoader from '../components/Loading/AppLoader';
import { getExam, postExam, postResult } from '../redux/apiExam';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import useDecodeTokens from '../hooks/useDecodeToken'
import moment from 'moment';

import { LogBox } from "react-native";
import SubmitExam from '../components/Modal/SubmitExam';
import SubmitExam_overtime from '../components/Modal/SubmitExam_overtime';
import AccessToTest from '../components/Modal/AccessToTest';
import ButtonSubmit from '../components/Button/ButtonSubmit';
import { createAxios } from '../api//apiJob';
import { loginUpdate } from '../redux/authSlice';
LogBox.ignoreLogs(["EventEmitter.removeListener"]);

const TestMultipleChoice = ({route}) => {
  const isFetching = useSelector((state) => state.exam.exam.isFetching);
  const id_test = route.params.id_test;
  const id_job = route.params.id_job;
  // console.log(id_job)
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.login.currentUser);
  const id = useDecodeTokens(user.tokens.access).user_id;
  const exam_isFetching = useSelector((state) => state.exam.exam.isFetching);
  const [exam, setExam] = useState();
  const [questions, setQuestions] = useState();
  const [time, setTime] = useState();
  const [time_pause, setTime_pause] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible_1, setModalVisible_1] = useState(false);

  const getExamAPi = async () => {
    const result = await getExam(dispatch, id_test);
    setQuestions(result[0]?.questions);
    setTime(result[0]?.time_limit * 60);
    setExam(result);
  }
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
    return () => backHandler.remove()
  }, [])
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // do something
      // getCompanysAPi();
      console.log("exam useEffect", exam);
      getExamAPi();
    });
    return unsubscribe;
  },[navigation]);
  // console.log("exam", exam);
  const [result_exam, setResult_exam] = useState([]);
  const [result, setResult] = useState();
  const [msg, setMsg] = useState();
  const time_start_F = moment(new Date()).format();
  // console.log(time_start_F);
  const time_start = useRef(moment.parseZone(time_start_F).utc(true).format());
  // console.log(time_start.current.toISOString());
  const submit = () => {
    const time_done_F = moment(new Date()).format();
    // console.log(time_done_F);
    const time_done = moment.parseZone(time_done_F).utc(true).format();
    // console.log(result_exam);
    const post_data = {
      user_id: id,
      job_id : id_job,
      questions : result_exam,
      time_start: time_start.current,
      time_done : time_done,
    }
    console.log(post_data);
    const fun = async () => { 
      const api = createAxios(user, dispatch , loginUpdate);
      const [result, msg] = await postExam(dispatch, id_test, post_data, navigation, api, user.tokens.access);
      setResult(result);
      setMsg(msg);
    }
    // setResult(result);
    // navigation.goBack();
    fun();
  }

  return (
    // <View style={styles.container}>
      <>        
      {exam ? 
      <DynamicPageExam exam={exam}>
        <View style={{  alignItems: 'center',marginBottom: 24}}>

            <CountDown
              until={time}
              size={30}
              onFinish={() => {setModalVisible_1(!modalVisible_1)}}
              digitStyle={{ backgroundColor: '#FFF', borderWidth: 2, borderColor: '#2196f3', borderRadius: 20, }}
              digitTxtStyle={{color: '#2196f3'}}
              timeToShow={['M', 'S']}
              timeLabels={{m: null, s: null}}
              showSeparator
              separatorStyle={{color: '#2196f3'}}
              running={time_pause}
            /> 

        </View>
        {questions?.map((item, index) => (
            <Question key={item.id} item={item} result_exam={result_exam} setResult_exam={setResult_exam}/>
        ))}
        <View style={{marginVertical:20}}>
          <ButtomApply onPress={() => {setModalVisible(!modalVisible)}} text="Submit your Exam"/>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <SubmitExam onPress_submit={() => {submit(); setTime_pause(false);}} 
              onPressOut_submit={() => setModalVisible(!modalVisible)} 
              onPress_result={() => {
                const data = {
                  job: id_job,
                  user : id,
                  result: result.result
                }
                // postResult(dispatch , data ,navigation);
                navigation.goBack();
              }}
              onPressOut_result={() => {setModalVisible(!modalVisible) ;navigation.goBack();}}
              result={result} 
              msg={msg}
            />
          </Modal>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible_1}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible_1(!modalVisible_1);
            }}
          >
            <SubmitExam_overtime onPress_submit={() => {submit();setTime_pause(false);}} 
              // onPressOut_submit={() => setModalVisible_1(!modalVisible)} 
              onPress_result={() => {
                const data = {
                  job: id_job,
                  user : id,
                  result: result.result
                }
                // postResult(dispatch , data ,navigation);
                navigation.goBack();
              }}
              onPressOut_result={() => {setModalVisible(!modalVisible) ;navigation.goBack();}}
              result={result} 
              msg={msg}
            />
          </Modal>
        </View> 
      </DynamicPageExam>
      : null}
      {isFetching ? <AppLoader /> : null}
      </>    
  )
}

export default TestMultipleChoice

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
})