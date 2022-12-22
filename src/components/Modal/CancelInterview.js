import React from 'react';
import {Button, StyleSheet, Text, View,TouchableOpacity,Image,TouchableWithoutFeedback} from 'react-native';
import cancel from '../../../assets/cancel.png'
const CancelInterview = ({onPress_cancel , onPressOut_cancel}) => {
    // console.log(result)
    return (<TouchableOpacity 
        style={styles.container} 
        // activeOpacity={1} 
        onPressOut={onPressOut_cancel }
    >
        <TouchableWithoutFeedback>
                < View style={styles.content}>
                    
                    <Image style={styles.image} source={cancel}  resizeMode='contain'/>
                    <Text style={styles.contentTitle}>Cancel Schedule Interview</Text>
                    <Text style={styles.contentMessage}>
                        Do you really want to cancel the interview?
                    </Text>
                    <View style={styles.contentButton}>
                        <TouchableOpacity style={styles.button}  onPress={onPress_cancel} >
                            <Text style={{color: '#fff', fontWeight: '700', fontSize: 16, fontFamily: 'Urbanist-Bold',}}>OK</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contentButton}>
                        <TouchableOpacity style={[styles.button, {backgroundColor: '#fff',paddingVertical: 2,}]}  onPress={onPressOut_cancel} >
                            <Text style={{color: '#246BFD', fontWeight: '700', fontSize: 16, fontFamily: 'Urbanist-Light',}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
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
        // backgroundColor: 'rgba(0, 0, 0, 0.6)'
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
      fontFamily: 'Urbanist-Bold',
      fontWeight: '700',
      color: '#246BFD',
    },
    contentMessage: {
        fontSize: 16,
        fontFamily: 'Urbanist-Light',
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
  
  export default CancelInterview;