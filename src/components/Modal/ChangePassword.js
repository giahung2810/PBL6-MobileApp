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
import { post_Skill, put_Expirence, put_Skill } from '../../redux/apiRequest';
import { useNavigation } from '@react-navigation/native';

const ChangePassword = ({onPressOut, modalData, profile}) => {
    const { register, control, handleSubmit } = useForm({defaultValues: {
        // skill_name: modalData?.item.skill_name,
        // skill_level: modalData?.item.skill_level,
        // seeker: modalData?.item.seeker,
    }});
    const onSave = (data) => {
        console.log(data)
        // const put_data = {
        //     ...data,
        //     seeker: profile.id
        // }
        // if(modalData) {
        //     console.log('PUT');
        //     put_Skill(modalData?.item.id , put_data, onPressOut);
        //     // onPressOut();
        // } else {
        //     console.log('POST')
        //     post_Skill(put_data, onPressOut);
        // }
    }

  return (
    <TouchableOpacity 
        style={styles.container} 
        // activeOpacity={1} 
        onPressOut={onPressOut}
    >
        <TouchableWithoutFeedback>
            
            <View style={{backgroundColor: '#fff', borderRadius: 20, paddingHorizontal: 12, paddingVertical: 16}}>
            <Text style={{alignSelf: 'center', color:'#246BFD', fontFamily: 'Urbanist-Bold', fontSize: 22}}>Change Password</Text>
                <ScrollView>
                <Text style={styles.title}>Old Password</Text>
                <CustomInput 
                    name='old_password'
                    control={control}
                    register = {register}
                    placeholder = 'old password' 
                    secureTextEntry = {true}
                    rules= {{
                        // required: 'Email is required',
                        // pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}
                    }}
                    // editable = {false}
                />
                <Text style={styles.title}>New Password</Text>
                <CustomInput 
                    name='new_password'
                    control={control}
                    register = {register}
                    placeholder = "new password" 
                    secureTextEntry = {true}
                    rules= {{
                        required: 'password is required',
                        // pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}
                    }}
                    // editable = {false}
                />
                {/* <Text style={styles.title}>Confirm New Password</Text>
                <CustomInput 
                    name='new_password_confirm'
                    control={control}
                    register = {register}
                    placeholder = "Fresher" 
                    rules= {{
                        required: 'password is required',
                        // pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}
                    }}
                    // editable = {false}
                /> */}
                <View style={{marginHorizontal: 12, marginVertical: 8}}>
                    <ButtomApply text="Save" onPress={handleSubmit(onSave)}/> 
                </View>
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    </TouchableOpacity>
  )
}

export default ChangePassword

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