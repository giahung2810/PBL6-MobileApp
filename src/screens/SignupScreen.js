import { View,Text, Button, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import Space from '../components/Space'
import SocialSignInButton from '../components/SocialSignInButton'
import {useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import { registerUser } from '../redux/apiRequest'
import DateofBirth from '../components/DatatimePicker/DateofBirth'
// import 'react-day-picker/dist/style.css';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignupScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { control, handleSubmit, watch } = useForm();
    const prd = watch('password')
    const [Gender,setGender] = useState(false);
    const [error, setError] = useState();

    const [date_of_birth, setDate_of_birth] = useState('');

    const onRegister = (data) => {
        // navigation.navigate('ConfirmEmail');
        // registerUser(data, dispatch, navigation);
        const newdata = {
            ...data,
            gender: Gender,
            date_of_birth: date_of_birth
        }
        registerUser(newdata, dispatch, navigation);
        setError(response);
        // console.log(response.errors);
    }
    const onSignin = () => {
        navigation.navigate('SignIn');
    }
  return (
    <ScrollView showsVerticalScrollIndicator= {false}>
    <View style={styles.root}>
        <Text style={[styles.title]}>Create an account</Text>

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
            <DateofBirth setDate_of_birth={setDate_of_birth} />
        </View>

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