import { StyleSheet, Text, View,TouchableOpacity, ScrollView } from 'react-native'
import React, {useLayoutEffect} from 'react'
import Topbar from '../components/topbar/Topbar'
import { AntDesign } from '@expo/vector-icons'; 
import { useSelector } from 'react-redux';
import ButtomApply from '../components/Button/ButtonApply';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import ExpirenceBox from '../components/Expirence/ExpirenceBox';
import Modal from 'react-native-modal';
import { useState } from 'react';
import ExprirenceModal from '../components/Modal/ExprirenceModal';
import { useEffect } from 'react';
import { getExpirence } from '../redux/apiRequest';
import useDecodeTokens from '../hooks/useDecodeToken'
import { useCallback } from 'react';


const ExpirenceScreen = ({route}) => {
  const profile = route.params.profile;
  const [modalData, setModalData] = useState(); 
    const passDataToModal=(item)=>{
      setModalData({item});
      setModalVisible(!modalVisible);
   };
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const user = useSelector((state) => state.auth.login.currentUser);
  // const id = useDecodeTokens(user.tokens.access).user_id;
  useLayoutEffect(() => { 
      navigation.setOptions({ 
          headerTitle: '',
          headerLeft : () => (
              <View style= {{ flexDirection: 'row' , alignItems: 'center'}}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                      <AntDesign name="arrowleft" size={24} color="black" />
                  </TouchableOpacity>
                  <Topbar headerTitle='Expirences' icon = {false}/>
              </View>  
          ),
          // headerRight: () => {
          //     <View style= {{ flexDirection: 'row' , alignItems: 'center'}}>
          //         <TouchableOpacity onPress={() => {}} style={{alignItems: 'center', justifyContent: 'center'}}>
          //             <Ionicons name="add" size={24} color="black" />
          //             {/* <Ionicons name="add-outline" size={24} color="black" /> */}
          //         </TouchableOpacity>
          //     </View>
          // },
          headerRight: () => (
              <TouchableOpacity 
                onPress={() => {
                  setModalData(null);
                  setModalVisible(!modalVisible);
                }} 
                style={{alignItems: 'center', justifyContent: 'center'}}
              >
                  <Ionicons name="add" size={26} color="black" />
              </TouchableOpacity>
          ),
      })
  }, []);
  const [expirence, setExpirence] = useState();

  const getExpirenceAPi = async () => {
    const result = await getExpirence( profile.id );
    setExpirence(result);
  };
  useEffect(() => {
    getExpirenceAPi();
  },[]);
  return (
    <View style={{flex: 1,backgroundColor: '#fff'}}>
    <ScrollView style={{flex: 1, backgroundColor: '#fff', }}>
       {expirence?.map((item, index) => (
            <ExpirenceBox item={item} key={item.id} onPress={() => passDataToModal(item)}/>
        ))}
    </ScrollView>
    <Modal
      testID={'modal'}
      isVisible={modalVisible}
      // onSwipeComplete={this.close}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
      useNativeDriverForBackdrop
      swipeDirection={['down']}
      // styles={}
      // modalData={modalData}
    >
      <ExprirenceModal modalData={modalData} profile={profile} onPressOut={() => {setModalVisible(!modalVisible);getExpirenceAPi();}}/>
    </Modal>
    </View>
  )
}

export default ExpirenceScreen

const styles = StyleSheet.create({
  title:{
    color: '#424242',
    fontFamily: 'Urbanist-Medium',
    fontSize: 16,
    marginVertical:4
  },
  field:{
    color: '#a8a8a8',
    fontFamily: 'Urbanist-Medium',
    fontSize: 12,
    marginVertical:4
  },
  container: {
    backgroundColor: '#FAFAFA',
    width: '100%',
    flexDirection: 'row',
    // borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#e8e8e8',
    alignItems: 'center',
    // paddingHorizontal: 15,
    // marginVertical: 5,
    marginTop:24,
    paddingVertical: 18,
    // marginBottom: 100
  },
  input: {
    fontFamily: 'Urbanist-Light',
    marginLeft: 8,
    fontSize: 16,
    width: '100%',
    height: '100%',
    // color: 'gray'
  },
})