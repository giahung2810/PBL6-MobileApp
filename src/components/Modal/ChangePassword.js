import { Image, Platform,ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View, } from 'react-native'
// import CheckBox from '@react-native-community/checkbox';
// import Checkbox from 'expo-checkbox';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import React from 'react'
import CustomInput from '../CustomInput'
import { useState } from 'react';
import {useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import DateOfBirth from '../DatatimePicker/DateofBirth';
import ButtomApply from '../Button/ButtonApply';
import { change_password, post_Skill, put_Expirence, put_Skill } from '../../redux/apiRequest';
import { useNavigation } from '@react-navigation/native';
import { loginUpdate } from '../../redux/authSlice';
import { createAxios } from '../../api/apiJob';

const ChangePassword = ({onPressOut, modalData, profile}) => {
    const user = useSelector((state) => state.auth.login.currentUser);
    const dispatch = useDispatch();
    const { register, control, handleSubmit } = useForm({defaultValues: {
        // skill_name: modalData?.item.skill_name,
        // skill_level: modalData?.item.skill_level,
        // seeker: modalData?.item.seeker,
    }});
    const [msg, setMsg] = useState();
    const onSave = (data) => {
        setMsg(null);
        // console.log(data)
        const api = createAxios(user, dispatch , loginUpdate);
        const ChangePassword = async () => { 
            const result = await change_password(
                dispatch,
                data,
                api,
                user.tokens.access
            );
            setMsg(result);
        }
        ChangePassword();
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
    console.log(msg)
  return (
    <TouchableOpacity 
        style={styles.container} 
        // activeOpacity={1} 
        onPressOut={onPressOut}
    >
        <TouchableWithoutFeedback>
        {msg?.hasOwnProperty('status') && msg?.status == 'success' ? 
            <View style={{backgroundColor: '#fff', borderRadius: 20, paddingHorizontal: 12, paddingVertical: 16, justifyContent: 'center'}}>
                <Image style={styles.image} source={{url: 'https://icons.veryicon.com/png/o/miscellaneous/8atour/success-35.png'}}  resizeMode='contain'/>
                <Text style={styles.contentTitle}>{msg?.message}</Text>
                <View style={styles.contentButton}>
                    <TouchableOpacity style={styles.button}  onPress={onPressOut} >
                        <Text style={{color: '#fff', fontWeight: '700', fontSize: 16}}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View> 
        :
            <View style={{backgroundColor: '#fff', borderRadius: 20, paddingHorizontal: 12, paddingVertical: 16}}>
            <Text style={{alignSelf: 'center', color:'#246BFD', fontFamily: 'Urbanist-Bold', fontSize: 22, }}>Change Password</Text>
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
                        required: 'password is required',
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
                {msg?.hasOwnProperty('old_password')? <Text style={[styles.error, {alignSelf: 'center'}]}>{msg?.old_password[0]}</Text> : null}
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
                <View style={{marginHorizontal: 12, marginVertical: 8}}>
                    <ButtomApply text="Cancel" onPress={onPressOut} backgroundColor='#fff' color='#246BFD'/> 
                </View>
                </ScrollView>
            </View>
        }
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
    error:{
        fontFamily: 'Urbanist-Light',
        fontSize:14,
        color: 'red'
    },
    contentTitle: {
        fontSize: 20,
        marginBottom: 12,
        fontWeight: '700',
        color: '#246BFD',
        alignSelf: 'center',
      },
    contentMessage: {
        fontSize: 14,
        fontWeight: '400',
        color: '#212121',
        textAlign: 'center',
        marginVertical:6
    },
    contentButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 18
    },
    button:{
        backgroundColor: '#246BFD',
        borderRadius: 20,
        paddingHorizontal: 28,
        paddingVertical: 16,
    },
    image:{
        height:150,
        marginBottom: 16,
        marginTop: 16
    }
})