import React from 'react';
import {Button, StyleSheet, Text, View,TouchableOpacity,Image,TouchableWithoutFeedback} from 'react-native';
import test from '../../../assets/test.png'
const SubmitExam = ({onPress_submit, onPressOut_submit , result, onPress_result, onPressOut_result, msg}) => {
    // console.log(result)
    return (<TouchableOpacity 
        style={styles.container} 
        // activeOpacity={1} 
        onPressOut={!result ? onPressOut_submit : onPressOut_result }
    >
        <TouchableWithoutFeedback>
            {!result ?
                < View style={styles.content}>
                    
                    <Image style={styles.image} source={test}  resizeMode='contain'/>
                    <Text style={styles.contentTitle}>Submit Your Exam</Text>
                    <Text style={styles.contentMessage}>
                    You will take a test given by the company, you will have to complete the test within the allotted time. Note don't exit if you don't want to fail the test
                    </Text>
                    <View style={styles.contentButton}>
                        <TouchableOpacity style={styles.button}  onPress={onPress_submit} >
                            <Text style={{color: '#fff', fontWeight: '700', fontSize: 16}}>OK</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            : result.meta? 
                <View style={styles.content}>
                    <Text style={[styles.contentTitle, {color:'red'}]}>{result.meta?.message}</Text> 
                    <View style={styles.contentButton}>
                        <TouchableOpacity style={styles.button}  onPress={onPressOut_result} >
                            <Text style={{color: '#fff', fontWeight: '700', fontSize: 16}}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            :
            < View style={styles.content}>
                <View style={styles.border_point_1}>
                <View style={styles.border_point}>
                    <Text style={styles.Point}>{result.result} <Text style={styles.Point_100}>/ 100</Text></Text>
                </View>
                </View>
                <Text style={styles.contentMessage}>
                    {msg.msg}
                </Text>
                <View style={styles.contentButton}>
                    <TouchableOpacity style={styles.button}  onPress={onPress_result} >
                        <Text style={{color: '#fff', fontWeight: '700', fontSize: 16}}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
            }
        </TouchableWithoutFeedback>
    </TouchableOpacity>
    )
};
  
  const styles = StyleSheet.create({
    container:{
        height: '100%',
        justifyContent: 'center',
        // alignItems: 'center',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
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
        fontSize: 16,
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
    },
    Point: {
        fontSize: 36,
        marginBottom: 12,
        fontWeight: '700',
        color: '#246BFD',
        fontfamily: 'Urbanist-Bold',
        alignItems: 'center',
        justifyContent: 'center',
        // padding: 100,
        top: 56,
        left: 14,
    },
    Point_100:{
        fontSize: 24,
        marginBottom: 12,
        fontWeight: '700',
        color: 'gray',
        fontfamily: 'Urbanist-Bold',
        alignItems: 'center',
        justifyContent: 'center',
    },
    border_point:{
        // backgroundColor:#fff;
        borderWidth: 1,   
        height:160,
        borderRadius:'80%',
        // -moz-border-radius:50%;
        // -webkit-border-radius:50%;
        width:160,
        margin: 4,
        borderColor: 'red',
    },
    border_point_1:{
        // backgroundColor:#fff;
        borderWidth: 4,   
        borderColor: 'red',
        borderRadius:'80%',
        // -moz-border-radius:50%;
        // -webkit-border-radius:50%;
    }
  });
  
  export default SubmitExam;