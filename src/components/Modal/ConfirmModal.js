import React from 'react';
import {Button, StyleSheet, Text, View,TouchableOpacity,Image,TouchableWithoutFeedback} from 'react-native';
import Question from '../../../assets/question.png'
const ConfirmModal = ({fun}) => (
    <TouchableOpacity 
        style={styles.container} 
        // activeOpacity={1} 
        onPressOut={fun}
    >
        <TouchableWithoutFeedback>
            <View style={styles.content}>
            <Text style={styles.contentTitle}>You want this job application👋?</Text>
            <Image style={styles.image} source={Question}  resizeMode='contain'/>
            <View style={styles.contentButton}>
                <TouchableOpacity style={styles.button_no}  onPress={fun} ><Text>No</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button_yes}  onPress={() =>  {console.log("YES"); fun()}} ><Text>Yes</Text></TouchableOpacity>
            </View>
            </View>
        </TouchableWithoutFeedback>
    </TouchableOpacity>
    
  );
  
  const styles = StyleSheet.create({
    container:{
        height: '100%',
        justifyContent: 'center',
        // alignItems: 'center',
    },
    scrollModal:{
        justifyContent: 'center',
        // alignItems: 'center',
    },
    content: {
      backgroundColor: 'white',
      padding: 28,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    contentTitle: {
      fontSize: 16,
      marginBottom: 12,
      fontWeight: '500',
    },
    contentButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 12
    },
    button_no:{
        // backgroundColor: 'gray'
    },
    button_yes:{

    },
    image:{
        height:100
    }
  });
  
  export default ConfirmModal;