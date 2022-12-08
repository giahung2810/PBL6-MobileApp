import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ButtomApply from './ButtonApply';
import Modal from 'react-native-modal';
import SubmitExam from '../Modal/SubmitExam';

const ButtonSubmit = () => {
    const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{marginVertical:20}}>
          <ButtomApply onPress={() => alert('done')} text="Submit your Exam"/>
        </View>

    </View>
  )
}

export default ButtonSubmit

const styles = StyleSheet.create({})