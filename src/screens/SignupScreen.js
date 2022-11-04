import { View,Text, Button, StyleSheet, ScrollView, Image,useWindowDimensions } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/Button/CustomButton'
import Space from '../components/Space'
import SocialSignInButton from '../components/SocialSignInButton'
import {useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import { registerUser } from '../redux/apiRequest'
import DateofBirth from '../components/DatatimePicker/DateofBirth'
import { useSelector } from 'react-redux';
import AppLoader from '../components/Loading/AppLoader'
import LogoApp from '../../assets/LogoApp.png'

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignupScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { control, handleSubmit, watch } = useForm();
    const prd = watch('password')
    const [Gender,setGender] = useState(false);
    const [error, setError] = useState();
    const isFetching = useSelector((state) => state.auth.register.isFetching);
    const [date_of_birth, setDate_of_birth] = useState('');
    const {height} = useWindowDimensions();

    const onRegister = (data) => {
        // navigation.navigate('ConfirmEmail');
        // registerUser(data, dispatch, navigation);
        const newdata = {
            ...data,
            gender: Gender,
            date_of_birth: date_of_birth
        }
        registerUser(newdata, dispatch, navigation);
        // console.log(response.errors);
    }
    const onSignin = () => {
        navigation.navigate('SignIn');
    }
  return (
    <>
    <ScrollView showsVerticalScrollIndicator= {false} style={{flex: 1, backgroundColor: '#fff'}}>
    <View style={styles.root}>
        <View style={{alignItems: 'center', width: '100%'}}>
            <Image style={[styles.logo, {height: height * 0.16}]} source={LogoApp}  resizeMode='contain'/>
            <Text style={[styles.title]}>Create an account</Text>
        </View>
        {/* <CustomInput 
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
        /> */}
        <Text style={styles.field}>Email</Text>
        <CustomInput 
            name='email'
            control={control}
            placeholder = "Email" 
            rules= {{
                required: 'Email is required',
                pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}
            }}
        />
        <Text style={styles.field}>Password</Text>
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
            name='password2'
            control={control}
            placeholder = "Repeat Password"
            secureTextEntry
            rules= {{
                validate: value => value === prd || 'Password is not match'
            }}
        />
        {/* <CustomInput 
            name='date_of_birth'
            control={control}
            placeholder = "Day of birth"
        /> */}
        <View>
            <Text style={styles.field}>Date of Birth</Text>
            <DateofBirth setDate_of_birth={setDate_of_birth} />
        </View>
        <Text style={styles.field}>Gender</Text>
        <CustomInput 
            name='gender'
            control={control}
            placeholder = "Gender"
            setValue={setGender}
        />

            
        <CustomButton 
            text= "Register" 
            onPress={handleSubmit(onRegister)} 
            type="PRIMARY"
        />
        {/* {error ? <Text>{error.errors.email[0]}</Text> : null} */}


        <CustomButton 
            text= "Have an account? Sign in" 
            onPress={onSignin} 
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
        // alignItems: 'center',
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
        fontFamily: 'Urbanist-Bold',
        fontSize: 32,
        marginTop: 16,
        marginBottom:32
    },
    logo : {
        width: '80%',
        maxWidth: 110,
        maxHeight: 300,
        marginTop:50
    },
    field:{
        color: '#a8a8a8',
        fontFamily: 'Urbanist-Medium',
        fontSize: 12,
        marginVertical:4
    }
})

export default SignupScreen