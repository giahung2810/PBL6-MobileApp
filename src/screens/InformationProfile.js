import { StyleSheet, Text, View,TouchableOpacity, ScrollView } from 'react-native'
import React, {useLayoutEffect} from 'react'
import Topbar from '../components/topbar/Topbar'
import { AntDesign } from '@expo/vector-icons'; 
import ImageUpload from '../components/FileUpload/ImageUpload';
import CustomInput from '../components/CustomInput'
import {useForm } from 'react-hook-form'
import { useSelector } from 'react-redux';
import ButtomApply from '../components/Button/ButtonApply';


const InformationProfile = ({navigation}) => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const { register, control, handleSubmit, watch } = useForm({defaultValues: {
    email: user.email
  }});
  
  const onSave = (data) => {
    console.log(data)
  }
    useLayoutEffect(() => { 
        navigation.setOptions({ 
          headerTitle: '',
          headerLeft : () => (
            <View style= {{ flexDirection: 'row' , alignItems: 'center'}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <Topbar headerTitle='Informations' icon = {false}/>
            </View>  
          ),
        }) 
      }, []);
  return (
    <>
    <ScrollView style={{flex: 1, backgroundColor: '#fff', paddingHorizontal: 16}}>
       <ImageUpload />
       <View style={{borderTopWidth:1, borderColor:'#EEEEEE', marginTop:8, marginBottom: 20}}/>
       <Text style={styles.title}>Email</Text>
       <CustomInput 
            name='email'
            control={control}
            register = {register}
            placeholder = "Email" 
            rules= {{
                // required: 'Email is required',
                // pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}
            }}
            editable = {false}
        />
        <Text style={styles.title}>Full Name</Text>
       <CustomInput 
            name='fullname'
            control={control}
            // register = {register}
            placeholder = "Full Name" 
            rules= {{
                // required: 'Email is required',
                // pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}
            }}
        />
        <Text style={styles.title}>Current Position</Text>
        <CustomInput 
            name='position'
            control={control}
            // register = {register}
            placeholder = "Current Position" 
            rules= {{
                // required: 'Email is required',
                // pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}
            }}
        />
    </ScrollView>
    <ButtomApply text="Save" onPress={handleSubmit(onSave)}/> 
    </>
  )
}

export default InformationProfile

const styles = StyleSheet.create({
  title:{
    color: '#424242',
    fontFamily: 'Urbanist-Medium',
    fontSize: 16,
    marginVertical:4
  }
})