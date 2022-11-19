import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 
import Modal from 'react-native-modal';
import ReviewCompany from '../Modal/ReviewCompany';

const CommentBoxCompany = function ({company}) {
  const [isFocus, setIsFocus] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
        <>
            <TouchableOpacity
                style={[
                styles.container,
                { borderColor: isFocus ? 'blue' : '#e8e8e8' },
                ]}
                onPress={() =>{setModalVisible(!modalVisible)}}
                >
                <EvilIcons name="comment" size={28} color={isFocus ? 'blue' : '#e8e8e8'} />
                <Text style={styles.input}>Comment...</Text> 
            </TouchableOpacity>
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
            >
                <ReviewCompany 
                  fun={() => 
                    {
                        setModalVisible(false);
                        setIsFocus(false);
                    }
                  }
                  company={company}
                />
            </Modal>
        </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row',
    // borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 16,
    alignItems: 'center',
    paddingHorizontal: 15,
    marginVertical: 5,
    marginTop:24,
    paddingVertical: 15,
    marginBottom: 100
  },
  input: {
    fontFamily: 'Urbanist-Light',
    marginLeft: 8,
    fontSize: 16,
    width: '100%',
    height: '100%',
    color: 'gray'
  },
  paperTextInput: {
    padding: 0,
    margin: 0,
  }
});

export default CommentBoxCompany;