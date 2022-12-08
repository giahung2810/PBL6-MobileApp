import { StyleSheet, Text, View,TouchableOpacity, ScrollView } from 'react-native'
import React, {useLayoutEffect} from 'react'
import Topbar from '../components/topbar/Topbar'
import { AntDesign } from '@expo/vector-icons'; 
import ImageUpload from '../components/FileUpload/ImageUpload';
import CustomInput from '../components/CustomInput'
import {useForm } from 'react-hook-form'
import { useSelector } from 'react-redux';
import ButtomApply from '../components/Button/ButtonApply';
import { useNavigation } from '@react-navigation/native';
import useDecodeTokens from '../hooks/useDecodeToken'
import { post_Profile, put_Profile } from '../redux/apiRequest';

const InformationProfile = ({route }) => {
  const navigation = useNavigation();
  const user = useSelector((state) => state.auth.login.currentUser);
  const id = useDecodeTokens(user.tokens.access).user_id;
  const { register, control, handleSubmit, watch } = useForm({defaultValues: {
    email: user.email,
    first_name: route.params.profile.first_name,
    last_name: route.params.profile.last_name,
  }});
  
  const onSave = (data) => {
    // console.log(data)
    const post_data = {
      ...data,
      user: id
    } 
    if (route.params.profile.id) {
      console.log('PUT');
      put_Profile(route.params.profile.id, data = post_data);
      navigation.goBack();
    } else {
      console.log('POST')
      post_Profile(post_data);
      navigation.goBack();
    }
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
        <Text style={styles.title}>First Name</Text>
       <CustomInput 
            name='first_name'
            control={control}
            // register = {register}
            placeholder = "First Name" 
            rules= {{
                // required: 'Email is required',
                // pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}
            }}
        />
        <Text style={styles.title}>Last Name</Text>
       <CustomInput 
            name='last_name'
            control={control}
            // register = {register}
            placeholder = "Last Name" 
            rules= {{
                // required: 'Email is required',
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