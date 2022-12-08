import React from 'react';
import {Button, StyleSheet, Text, View,TouchableOpacity,Image,TouchableWithoutFeedback} from 'react-native';
import test from '../../../assets/test.png'
const AccessToTest = ({fun, funout}) => (
    <TouchableOpacity 
        style={styles.container} 
        // activeOpacity={1} 
        onPressOut={funout}
    >
        <TouchableWithoutFeedback>
            <View style={styles.content}>
            
            <Image style={styles.image} source={test}  resizeMode='contain'/>
            <Text style={styles.contentTitle}>Do Test!</Text>
            <Text style={styles.contentMessage}>
            You will take a test given by the company, you will have to complete the test within the allotted time. Note don't exit if you don't want to fail the test
            </Text>
            <View style={styles.contentButton}>
                <TouchableOpacity style={styles.button}  onPress={fun} >
                    <Text style={{color: '#fff', fontWeight: '700', fontSize: 16}}>Go to My Test</Text>
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
  
  export default AccessToTest;