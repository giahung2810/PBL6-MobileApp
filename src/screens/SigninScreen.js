import { View, Image, StyleSheet, useWindowDimensions, ScrollView , TextInput} from 'react-native'
import React, {useState, useContext} from 'react'
import Logo from '../../assets/logo_1.png'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import Space from '../components/Space'
import SocialSignInButton from '../components/SocialSignInButton'
import {useForm } from 'react-hook-form'
import {Context as AuthContext} from '../context/AuthContext';
// import { NavigationEvents } from "react-navigation";



const SigninScreen = ({navigation}) => {
    const { control, handleSubmit, formState: {errors}, } = useForm();
    const { state, signin, clearErrorMessage } = useContext(AuthContext);

    const {height} = useWindowDimensions();

    const onSignin = (data) => {
        // console.log(data.username);
        // navigation.navigate('Home')
        username = data.username;
        password = data.password;
        // data.password == 'hung' || data.username == 'hung' ? navigation.navigate('Home') : console.log(data);
        signin({username, password});
        // console.log(state.token);
    }
    const onForgot = () => {
        navigation.navigate('ForgotPassword')
    }
    const onSignup = () => {
        navigation.navigate('SignUp')
    }
  return (
    <ScrollView showsVerticalScrollIndicator= {false}>
    <View style={styles.root}>
        <Image style={[styles.logo, {height: height * 0.3}]} source={Logo} resizeMode='contain' />

        {/* <CustomInput placeholder = "Username" value= {username} setValue={setUsername}/>
        <CustomInput placeholder = "Password" value= {password} setValue={setPassword} secureTextEntry/>
         */}

        {/* <NavigationEvents onWillBlur={clearErrorMessage} /> */}

        <CustomInput 
            placeholder = "Username" 
            name= 'username' 
            control={control}
            rules= {{required: 'Username is required'}}
        />
        <CustomInput 
            placeholder = "Password" 
            name= 'password' 
            control={control} 
            secureTextEntry
            rules= {{
                required: 'Password is required', 
                minLength: {
                    value: 4,
                    message: 'Password must be minimum 4 characters long',
                }
            }}
        />
        

        <CustomButton 
            text= "Sign In" 
            onPress={handleSubmit(signin)} 
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
    }
})

export default SigninScreen