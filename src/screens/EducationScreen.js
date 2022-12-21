import { StyleSheet, Text, View,TouchableOpacity, ScrollView } from 'react-native'
import React, {useLayoutEffect} from 'react'
import Topbar from '../components/topbar/Topbar'
import { AntDesign } from '@expo/vector-icons'; 
import CustomInput from '../components/CustomInput'
import {useForm } from 'react-hook-form'
import { useSelector } from 'react-redux';
import ButtomApply from '../components/Button/ButtonApply';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import DateofBirth from '../components/DatatimePicker/DateofBirth'
import {KeyboardAvoidingView , Platform, TouchableWithoutFeedback, Keyboard  } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons'; 
import { getEducation, put_Education, post_Education } from '../redux/apiRequest';
import { useEffect } from 'react';
import useDecodeTokens from '../hooks/useDecodeToken'
import { useCallback } from 'react';


const EducationScreen = ({route}) => {
  const profile = route.params.profile;
  const [education, setEducation] = useState();
  const navigation = useNavigation();
  const user = useSelector((state) => state.auth.login.currentUser);
  // const id = useDecodeTokens(user.tokens.access).user_id;
  const [start_date, setStart_date] = useState(education?.length > 0 ? education[0]?.starting_date : null);
  const [complite_date, setComplite_date] = useState(education?.length > 0 ? education[0]?.completion_date : null);
  
  const onSave = (data) => {
    // console.log(data);
    // console.log(start_date);
    // console.log(complite_date);
    const put_data = {
      ...data,
      starting_date : start_date,
      completion_date : complite_date,
      seeker : profile.id
    }
    // console.log(put_data)
    if (education?.length  > 0) {
      console.log('PUT');
      put_Education(education[0].id, put_data);
      navigation.goBack();
    } else {
      console.log('POST',put_data);
      post_Education(put_data);
      navigation.goBack();
    }
  }  
  
  const [showdate_1, setShowdate_1] = useState(false);
  const [showdate_2, setShowdate_2] = useState(false);
  const onChange_1 = (event, selectedDate) => {
    const completedDate = selectedDate || Date;
    setShowdate_1(Platform.OS === 'ios');
    // console.log(selectedDate.getFullYear());
    setStart_date(`${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${selectedDate.getDate()}`);
    // setStart_date(completedDate);
  };
  const onChange_2 = (event, selectedDate) => {
    const completedDate = selectedDate || Date;
    setShowdate_2(Platform.OS === 'ios');
    setComplite_date(`${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${selectedDate.getDate()}`);
    // setComplite_date(completedDate);
  };
  const showDatepicker_1 = () => {
    setShowdate_1(!showdate_1);
    console.log(showdate_1)
  };
  const showDatepicker_2 = () => {
    setShowdate_2(!showdate_2);
  };
  useLayoutEffect(() => { 
    navigation.setOptions({ 
      headerTitle: '',
      headerLeft : () => (
        <View style= {{ flexDirection: 'row' , alignItems: 'center'}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Topbar headerTitle='Education' icon = {false}/>
        </View>  
      ),
    }) 
  }, []);

  const getEducationAPi = async () => {
    const result = await getEducation( profile.id );
    // console.log(result)
    reset({
      id: result?.length > 0 ? result[0].id : null,
      certificate_degree_name: result?.length > 0 ?  result[0].certificate_degree_name : null,
      major: result?.length > 0 ? result[0].major : null,
      university_name: result?.length > 0 ? result[0].university_name : null,
      gpa: result?.length > 0 ? result[0].gpa.toString() : null,
    },
      {keepDefaultValues: true}
    );
    // setStart_date(result[0].starting_date)
    setStart_date(result?.length > 0 ? result[0]?.starting_date : null)
    // setComplite_date(result[0].completion_date)
    setComplite_date(result?.length > 0 ? result[0]?.completion_date : null)
    setEducation(result);
  };
  useEffect(() => {
    getEducationAPi();
  },[]);
  const { register, control, handleSubmit, watch, reset  } = useForm({defaultValues: {
    id: education?.length > 0 ? education[0].id : null,
    certificate_degree_name: education?.length > 0 ?  education[0].certificate_degree_name : null,
    major: education?.length > 0 ? education[0].major : null,
    university_name: education?.length > 0 ? education[0].university_name : null,
    gpa: education?.length > 0 ? education[0].gpa : null,
  }});
  // const resetAsyncForm = useCallback(async () => {
  //   reset(education); 
  // }, [reset]);
  // useEffect(() => {
  //   resetAsyncForm()
  // }, [resetAsyncForm])
  // console.log(education?.length)

  return (
    <View style={{flex: 1,backgroundColor: '#fff'}}>
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        // behavior={Platform.OS === 'ios' ? 'position' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 36 : -16}
        // keyboardVerticalOffset={36}
        style={{flex: 1}}
    >
    <ScrollView style={{flex: 1, backgroundColor: '#fff', paddingHorizontal: 16}}>
       {/* <ImageUpload /> */}
       {/* <View style={{borderTopWidth:1, borderColor:'#EEEEEE', marginTop:8, marginBottom: 20}}/> */}
       <Text style={styles.title}>Certificate Degree Name</Text>
       <CustomInput 
            name='certificate_degree_name'
            control={control}
            register = {register}
            placeholder = "Certificate Degree Name" 
            rules= {{
                required: 'Certificate Degree Name is required',
                // pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}
            }}
            // editable = {false}
        />
        <Text style={styles.title}>Major</Text>
       <CustomInput 
            name='major'
            control={control}
            register = {register}
            placeholder = "Major" 
            rules= {{
                required: 'Major is required',
                // pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}
            }}
        />
        <Text style={styles.title}>University Name</Text>
       <CustomInput 
            name='university_name'
            control={control}
            register = {register}
            placeholder = "University Name" 
            rules= {{
                required: 'University Name is required',
                // pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}
            }}
        />
        {/* <Text style={styles.title}>Current Position</Text>
        <CustomInput 
            name='position'
            control={control}
            // register = {register}
            placeholder = "Current Position" 
            rules= {{
                // required: 'Email is required',
                // pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}
            }}
        /> */}
        {Platform.OS === 'ios' ? 
            <View>
                <View>
                    <Text style={styles.title}>Starting Date</Text>
                    <DateofBirth setDate_of_birth={setStart_date} date={start_date}/>
                </View>
                <View>
                    <Text style={styles.title}>Completion Date</Text>
                    <DateofBirth setDate_of_birth={setComplite_date} date={complite_date}/>
                </View>
            </View>
        : 
            <View>
                <View>
                    <Text style={styles.title}>Starting Date</Text>
                    <TouchableOpacity onPress={() =>{showDatepicker_1()}} style={styles.container}>
                        <Text style={styles.input}>{start_date}</Text>
                        {showdate_1 ? (
                            <View>
                            {(
                                <DateTimePicker
                                testID='dateTimePicker'
                                placeholder='Start Date'
                                value={new Date()}
                                mode='date'
                                display='default'
                                onChange={onChange_1}
                                />
                            )}
                            </View>
                        ) : null}
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.title}>Completion Date</Text>
                    <TouchableOpacity onPress={() =>{showDatepicker_2()}} style={styles.container}>
                        <Text style={styles.input}>{complite_date}</Text>
                        {showdate_2 ? (
                            <View>
                            { (
                                <DateTimePicker
                                testID='dateTimePicker'
                                placeholder='Completed Date'
                                value={new Date()}
                                mode='date'
                                display='default'
                                onChange={onChange_2}
                                />
                            )}
                            </View>
                        ) : null}
                    </TouchableOpacity>
                </View>
            </View>
        }
        <Text style={styles.title}>GPA</Text>
        <CustomInput 
            name='gpa'
            control={control}
            register = {register}
            placeholder = "?/4" 
            rules= {{
                required: 'GPA is required',
                // pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}
            }}
        />
    </ScrollView>
    <View style={{marginHorizontal: 12, marginBottom: 8}}>
      <ButtomApply text="Save" onPress={handleSubmit(onSave)}/> 
    </View>
    </KeyboardAvoidingView>
    </View>
  )
}

export default EducationScreen

const styles = StyleSheet.create({
  title:{
    color: '#424242',
    fontFamily: 'Urbanist-Medium',
    fontSize: 16,
    marginVertical:4
  },
  field:{
    color: '#a8a8a8',
    fontFamily: 'Urbanist-Medium',
    fontSize: 12,
    marginVertical:4
  },
  container: {
    backgroundColor: '#FAFAFA',
    width: '100%',
    flexDirection: 'row',
    // borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#e8e8e8',
    alignItems: 'center',
    // paddingHorizontal: 15,
    // marginVertical: 5,
    marginTop:24,
    paddingVertical: 18,
    // marginBottom: 100
  },
  input: {
    fontFamily: 'Urbanist-Light',
    marginLeft: 8,
    fontSize: 16,
    width: '100%',
    height: '100%',
    // color: 'gray'
  },
})