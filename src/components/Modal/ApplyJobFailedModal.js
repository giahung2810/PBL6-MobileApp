import React from 'react';
import {Button, StyleSheet, Text, View,TouchableOpacity,Image,TouchableWithoutFeedback} from 'react-native';
import Faile from '../../../assets/Faile.png'
const ApplyJobSuccessModal = ({fun, err}) => (
    <TouchableOpacity 
        style={styles.container} 
        // activeOpacity={1} 
        onPressOut={fun}
    >
        <TouchableWithoutFeedback>
            <View style={styles.content}>
            
            <Image style={styles.image} source={Faile}  resizeMode='contain'/>
            <Text style={styles.contentTitle}>Oops, Failed!</Text>
            <Text style={styles.contentMessage}>
                {err}
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
      color: '#246BFD',
      fontFamily: 'Urbanist-Bold'
    },
    contentMessage: {
        fontSize: 16,
        color: '#212121',
        textAlign: 'center',
        marginVertical:6,
        fontFamily: 'Urbanist-Light'
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