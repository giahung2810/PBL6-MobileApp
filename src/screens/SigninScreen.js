import { View, Image, StyleSheet, useWindowDimensions, ScrollView , Text} from 'react-native'
import React, {useState, useContext} from 'react'
import Logo from '../../assets/logo_1.png'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/Button/CustomButton'
import Space from '../components/Space'
import SocialSignInButton from '../components/SocialSignInButton'
import {useForm } from 'react-hook-form'
import {Context as AuthContext} from '../context/AuthContext';
import { useDispatch } from 'react-redux'
// import { NavigationEvents } from "react-navigation";
import { useNavigation } from '@react-navigation/native';
import { loginUser } from '../redux/apiRequest'
import { store } from '../redux/store'
import { useSelector } from 'react-redux';
import AppLoader from '../components/Loading/AppLoader'


const SigninScreen = () => {
    const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const { control, handleSubmit, formState: {errors}, } = useForm();
    const { state, signin, clearErrorMessage } = useContext(AuthContext);
    const {height} = useWindowDimensions();
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const user = useSelector((state) => state.auth.login.message);
    const isFetching = useSelector((state) => state.auth.login.isFetching);
    const onSignin = (data) => {
        // console.log(data.username);
        // navigation.navigate('Home')
        // username = data.username;
        // password = data.password;
        // data.password == 'hung' || data.username == 'hung' ? navigation.navigate('Home') : console.log(data);
        // signin({username, password});
        
        loginUser(data,dispatch, navigation);
    }
    const onForgot = () => {
        navigation.navigate('ForgotPassword')
    }
    const onSignup = () => {
        navigation.navigate('SignUp')
    }
  return (
    <>
    <ScrollView showsVerticalScrollIndicator= {false} style={{flex:1, backgroundColor: '#fff'}}>
    <View style={styles.root}>
        <Image style={[styles.logo, {height: height * 0.3}]} source={Logo} resizeMode='contain' />

        {/* <CustomInput placeholder = "Username" value= {username} setValue={setUsername}/>
        <CustomInput placeholder = "Password" value= {password} setValue={setPassword} secureTextEntry/>
         */}

        {/* <NavigationEvents onWillBlur={clearErrorMessage} /> */}

        <CustomInput 
            placeholder = "Email" 
            name= 'email' 
            control={control}
            rules= {{
                required: 'Email is required',
                pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}
            }}
        />
        <CustomInput  
            placeholder = "Password" 
            name= 'password' 
            control={control} 
            secureTextEntry
            rules= {{
                required: 'Password is required', 
                minLength: {
                    value: 6,
                    message: 'Password must be minimum 6 characters long',
                }
            }}
        />
        
        {user == null ? null
        : <Text style={styles.error}>{user.detail}</Text> }
        <CustomButton 
            text= "Sign In" 
            onPress={handleSubmit(onSignin)} 
            type="PRIMARY"
        />
        <CustomButton 
            text= "Forgot password?" 
            onPress={onForgot} 
            type="TERTIARY"
        />

        <Space />

        <SocialSignInButton/>

        <Space />

        <CustomButton 
            text= "Don't have an account?" 
            onPress={onSignup} 
            type="TERTIARY"
        />

    </View>
    </ScrollView>
    {isFetching ? <AppLoader /> : null}
    </>
  )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        paddingHorizontal:20,
        paddingTop: 20
    },
    logo : {
        width: '80%',
        maxWidth: 300,
        maxHeight: 300,
    },
    error:{
        fontFamily: 'Urbanist-Light',
        fontSize:14,
        color: 'red'
    }
})

export default SigninScreen