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
import { getExam, postExam } from '../redux/apiExam';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import useDecodeTokens from '../hooks/useDecodeToken'
import moment from 'moment';

import { LogBox } from "react-native";
import SubmitExam from '../components/Modal/SubmitExam';
import AccessToTest from '../components/Modal/AccessToTest';
import ButtonSubmit from '../components/Button/ButtonSubmit';
LogBox.ignoreLogs(["EventEmitter.removeListener"]);

const TestMultipleChoice = ({route}) => {
  const id_test = route.params.id_test;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.login.currentUser);
  const id = useDecodeTokens(user.tokens.access).user_id;
  const exam_isFetching = useSelector((state) => state.exam.exam.isFetching);
  const [exam, setExam] = useState();
  const [questions, setQuestions] = useState();
  const [time, setTime] = useState();
  const [modalVisible, setModalVisible] = useState(false);
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
  const time_start = useRef(moment.utc(new Date()).format());
  // console.log(time_start.current.toISOString());
  const submit = () => {
    const time_done = moment.utc(new Date()).format();
    // console.log(result_exam);
    const post_data = {
      user_id: id,
      questions : result_exam,
      time_done : time_done,
      time_start: time_start.current,
    }
    console.log(post_data);
    postExam(dispatch, id_test, post_data, navigation);
    // navigation.goBack();
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
              onFinish={() => alert('Finished')}
              digitStyle={{ backgroundColor: '#FFF', borderWidth: 2, borderColor: '#2196f3', borderRadius: 20, }}
              digitTxtStyle={{color: '#2196f3'}}
              timeToShow={['M', 'S']}
              timeLabels={{m: null, s: null}}
              showSeparator
              separatorStyle={{color: '#2196f3'}}
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
            <SubmitExam onPress={() => {submit() ; setModalVisible(!modalVisible)}} onPressOut={() =>setModalVisible(!modalVisible) } />
          </Modal>
        </View> 
      </DynamicPageExam>
      : null}
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