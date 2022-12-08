import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 
import Modal from 'react-native-modal';
import ReviewCompany from '../Modal/ReviewCompany';
import { Ionicons } from '@expo/vector-icons'; 
import useDecodeTokens from '../../hooks/useDecodeToken'
import { useDispatch, useSelector } from 'react-redux';
import { post_Comment_Job } from '../../redux/jobRequest';
import { createAxios } from '../../api/apiJob';
import { loginUpdate } from '../../redux/authSlice';


const TextComment = function ({job}) {
  const [isFocus, setIsFocus] = useState(false);
  const [comment, setComment] = useState('');
  const user = useSelector((state) => state.auth.login.currentUser);
  const dispatch = useDispatch();
  return (
        <>
            <View
              style={[
                styles.container,
                { borderColor: isFocus ? 'blue' : '#e8e8e8' },
              ]}>
              <EvilIcons name="comment" size={28} color={isFocus ? 'blue' : '#e8e8e8'} />
              <TextInput
                value={comment}
                onChangeText={setComment}
                onBlur={() => { setIsFocus(false); } }
                placeholder={'Comment...'}
                style={styles.input}
                onFocus={() => { 
                  setIsFocus(true); 
                }}
                // editable={type === 'company' ? false : true}
              /> 
              <TouchableOpacity 
                onPress={() => {
                  const post_comment= {
                    job : job.id,
                    comment_body : comment,
                    is_sub_comment: false,
                    parent_id: -1,
                    user: useDecodeTokens(user.tokens.access).user_id,
                  }
                  // console.log(post_comment)
                  const api = createAxios(user, dispatch , loginUpdate);
                  post_Comment_Job(
                    dispatch,
                    post_comment,
                    api,
                    user.tokens.access
                  );
                // fun();
                  setComment('');
              }}>
                <Ionicons name="md-send" size={24} color={comment ? 'blue' : '#e8e8e8'} />
              </TouchableOpacity>
            </View>
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
    marginBottom: 20,
    // paddingVertical: 15
  },
  input: {
    fontFamily: 'Urbanist-Light',
    marginLeft: 8,
    fontSize: 16,
    // width: '100%',
    flex:2,
    height: '100%',
    paddingVertical: 15,
  },
  paperTextInput: {
    padding: 0,
    margin: 0,
  }
});

export default TextComment;