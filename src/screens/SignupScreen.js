import { View,Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import Space from '../components/Space'
import SocialSignInButton from '../components/SocialSignInButton'
import {useForm } from 'react-hook-form'

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignupScreen = ({navigation}) => {

    const { control, handleSubmit, watch } = useForm();
    const prd = watch('password')

    const onRegister = () => {
        navigation.navigate('ConfirmEmail');
    }
    const onTermOfUse = () => {
        console.warn('TermOfUse ')
    }
    const onPrivacy = () => {
        console.warn('Privacy ')
    }
    const onSignin = () => {
        navigation.navigate('SignIn');
    }
  return (
    <ScrollView showsVerticalScrollIndicator= {false}>
    <View style={styles.root}>
        <Text style={[styles.title]}>Create an account</Text>

        <CustomInput 
            name='username'
            control={control}
            placeholder = "Username" 
            rules={{
                required: 'Username is required', 
                minLength: {
                    value: 3,
                    message: 'Username should be at least 3 characters long'
                },
                maxLength: {
                    value: 24,
                    message: 'Username should be at least 24 characters long'
                }
            }}
        />
        <CustomInput 
            name='email'
            control={control}
            placeholder = "Email" 
            rules= {{
                required: 'Email is required',
                pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}
            }}
        />
        <CustomInput 
            name='password'
            control={control}
            placeholder = "Password" 
            secureTextEntry
            rules={{
                required: 'Password is required', 
                minLength: {
                    value: 4,
                    message: 'Password should be at least 4 characters long'
                },
            }}
        />
        <CustomInput 
            name='password_repeat'
            control={control}
            placeholder = "Repeat Password" 
            secureTextEntry
            rules= {{
                validate: value => value === prd || 'Password is not match'
            }}
        />


        <CustomButton 
            text= "Register" 
            onPress={handleSubmit(onRegister)} 
            type="PRIMARY"
        />
        <Text style={styles.text}>
            By registering, you confirm that you accept our 
            <Text style= {styles.link} onPress={onTermOfUse}>Terms of Use </Text> 
             and 
            <Text style= {styles.link} onPress={onPrivacy}> Privacy Policy.</Text> 
        </Text>

        <Space />
        <SocialSignInButton/>
        <Space />

        <CustomButton 
            text= "Have an account? Sign in" 
            onPress={onSignin} 
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
    text: {
        color: 'gray',
        marginVertical: 10
    },
    link: {
        color: '#FDB075'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3B71F3',
        margin: 10,
        paddingVertical: 30
    }
})

export default SignupScreen