import React from 'react';
import {Button, StyleSheet, Text, View,TouchableOpacity,Image,TouchableWithoutFeedback} from 'react-native';
import Successful from '../../../assets/Successful.png'
const ApplyJobSuccessModal = ({fun}) => (
    <TouchableOpacity 
        style={styles.container} 
        // activeOpacity={1} 
        onPressOut={fun}
    >
        <TouchableWithoutFeedback>
            <View style={styles.content}>
            
            <Image style={styles.image} source={Successful}  resizeMode='contain'/>
            <Text style={styles.contentTitle}>Congratulations!</Text>
            <Text style={styles.contentMessage}>
                Your application has been successfully submitted. You can track the progress of your application through the applications menu.
            </Text>
            <View style={styles.contentButton}>
                <TouchableOpacity style={styles.button}  onPress={fun} >
                    <Text style={{color: '#fff', fontWeight: '700', fontSize: 16}}>Go to My Application</Text>
                </TouchableOpacity>
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
        width: '100%',
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
      fontSize: 24,
      marginBottom: 12,
      fontWeight: '700',
      color: '#246BFD',
    },
    contentMessage: {
        fontSize: 14,
        fontWeight: '400',
        color: '#212121',
        textAlign: 'center',
        marginVertical:6
    },
    contentButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 18
    },
    button:{
        backgroundColor: '#246BFD',
        borderRadius: 20,
        paddingHorizontal: 28,
        paddingVertical: 16,
    },
    image:{
        height:150,
        marginBottom: 12
    }
  });
  
  export default ApplyJobSuccessModal;