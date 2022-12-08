import { Platform,ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View, } from 'react-native'
// import CheckBox from '@react-native-community/checkbox';
// import Checkbox from 'expo-checkbox';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import React from 'react'
import CustomInput from '../CustomInput'
import { useState } from 'react';
import {useForm } from 'react-hook-form'
import { useSelector } from 'react-redux';
import DateOfBirth from '../DatatimePicker/DateofBirth';
import ButtomApply from '../Button/ButtonApply';
import { put_Expirence, post_Expirence } from '../../redux/apiRequest';
import { useNavigation } from '@react-navigation/native';

const ExprirenceModal = ({onPressOut, modalData, profile}) => {
    const [start_date, setStart_date] = useState(modalData?.item.start_date);
    const [complite_date, setComplite_date] = useState(modalData?.item.end_date);
    const [isCheckBox, setCheckBox] = useState(modalData?.item.is_current_job);
    const { register, control, handleSubmit, } = useForm({defaultValues: {
        id: modalData?.item.id,
        is_current_job: modalData?.item.is_current_job,
        job_title: modalData?.item.job_title,
        company_name: modalData?.item.company_name,  
        job_location: modalData?.item.job_location,
        description: modalData?.item.description,
        start_date: modalData?.item.start_date,
        end_date: modalData?.item.end_date,
        seeker: modalData?.item.seeker,
    }});
    const onSave = (data) => {
        console.log(data)
        const put_data = {
            ...data,
            start_date : start_date,
            end_date : complite_date,
            is_current_job : isCheckBox,
            seeker: profile.id,
        }
        if(modalData) {
            console.log('PUT');
            put_Expirence(modalData?.item.id , put_data, onPressOut);
            // onPressOut();
        } else {
            console.log('POST');
            post_Expirence(put_data, onPressOut);
        }
    }
    const [showdate_1, setShowdate_1] = useState(false);
    const [showdate_2, setShowdate_2] = useState(false);
    const onChange_1 = (event, selectedDate) => {
      const completedDate = selectedDate || Date;
      setShowdate_1(Platform.OS === 'ios');
      // console.log(selectedDate.getFullYear());
      setStart_date(`${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${selectedDate.getDate()}`);
      // setStart_date(completedDate); v
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
  return (
    <TouchableOpacity 
        style={styles.container} 
        // activeOpacity={1} 
        onPressOut={onPressOut}
    >
        <TouchableWithoutFeedback>
            <View style={{backgroundColor: '#fff', borderRadius: 20, paddingHorizontal: 12, paddingVertical: 16}}>
                <ScrollView>
                <Text style={styles.title}>Job</Text>
                <CustomInput 
                    name='job_title'
                    control={control}
                    register = {register}
                    placeholder = "Backend" 
                    rules= {{
                        required: 'Job is required',
                        // pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}
                    }}
                    // editable = {false}
                />
                <Text style={styles.title}>Company</Text>
                <CustomInput 
                    name='company_name'
                    control={control}
                    register = {register}
                    placeholder = "Paradox" 
                    rules= {{
                        required: 'Company is required',
                        // pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}
                    }}
                    // editable = {false}
                />
                <Text style={styles.title}>Location</Text>
                <CustomInput 
                    name='job_location'
                    control={control}
                    register = {register}
                    placeholder = "Nguyen Huu Tho, Da Nang" 
                    rules= {{
                        required: 'Location is required',
                        // pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}
                    }}
                    // editable = {false}
                />
                <Text style={styles.title}>Description</Text>
                <CustomInput 
                    name='description'
                    control={control}
                    register = {register}
                    placeholder = "Short description" 
                    rules= {{
                        required: 'Description is required',
                        // pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}
                    }}
                    // editable = {false}
                />
                {Platform.OS === 'ios' ? 
                <View>
                    <View>
                        <Text style={styles.title}>Starting Date</Text>
                        <DateOfBirth setDate_of_birth={setStart_date} date={start_date} />
                    </View>
                    <View>
                        <Text style={styles.title}>Completion Date</Text>
                        <DateOfBirth setDate_of_birth={setComplite_date} date={complite_date}/>
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
                <View style={styles.checkboxContainer}>
                    <BouncyCheckbox
                        style={{ marginRight: 8 }}
                        // ref={(ref: any) => (bouncyCheckboxRef = ref)}
                        isChecked={isCheckBox}
                        text="Is current job"
                        disableBuiltInState
                        disableText
                        onPress={() => setCheckBox(!isCheckBox)}
                        textStyle={{ fontFamily: 'Urbanist-Light' }}
                        iconStyle={{ borderColor: "#0085FF" }}
                        fillColor="#0085FF"
                    />
                    <Text style={styles.checkbox}>is current job</Text>
                </View>
                <View style={{marginHorizontal: 12, marginBottom: 8}}>
                    <ButtomApply text="Save" onPress={handleSubmit(onSave)}/> 
                </View>
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    </TouchableOpacity>
  )
}

export default ExprirenceModal

const styles = StyleSheet.create({
    container:{
        height: '100%',
        justifyContent: 'center',
        // alignItems: 'center',
        width: '100%',
    },
    title:{
        color: '#424242',
        fontFamily: 'Urbanist-Medium',
        fontSize: 16,
        marginVertical:4
    },
    checkboxContainer: {
        flexDirection: "row",
        marginTop: 10,
        alignItems: 'center',
        marginBottom: 12,
    },
    checkbox: {
        // alignSelf: "center",
        fontFamily: 'Urbanist-Medium',
        fontSize: 16,
    },
})