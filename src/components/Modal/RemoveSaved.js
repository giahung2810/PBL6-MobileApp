import React from 'react';
import {Button, StyleSheet, Text, View,TouchableOpacity,Image,TouchableWithoutFeedback} from 'react-native';
import Successful from '../../../assets/Successful.png'
import Space from '../Space'
import JobCard from '../JobsCard/JobCard'

const ApplyJobSuccessModal = ({fun}) => (
    <TouchableOpacity 
        style={styles.container} 
        // activeOpacity={1} 
        onPressOut={fun}
    >
        <TouchableWithoutFeedback>
            <View style={styles.content}>
                <Text style={styles.title}>Remove from Saved</Text>
                <Space />
                <JobCard onPress={() => {}}/>
            </View>
        </TouchableWithoutFeedback>
    </TouchableOpacity>
    
  );
  
  const styles = StyleSheet.create({
    container:{
        height: '100%',
        justifyContent: 'flex-end',
        // alignItems: 'center',
        width: '100%',
    },
    content: {
      backgroundColor: 'white',
      padding: 28,
      borderRadius: 20,
    },
    title:{
        justifyContent: 'center',
        alignItems: 'center',
        color: '#212121',
        fontSize: 24,
        fontFamily: 'Urbanist-Bold',
        paddingBottom: 24,
    }
  });
  
  export default ApplyJobSuccessModal;