import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Notifyempty from '../../../assets/notifyempty.png';


const NotifyEmpty = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image style={styles.image} source={Notifyempty}  resizeMode='contain'/>
        <Text style={styles.title}>Empty</Text>
        <Text style={styles.text}>You don't have any notifications at this time</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    image: {
        height: 240,
        width: 240,
    },
    title:{ 
        color: '#212121',
        fontFamily: 'Urbanist-Bold',
        fontSize: 24,
        marginTop: 60,
        marginBottom:12
    },
    text:{  
        color: '#212121',
        fontFamily: 'Urbanist-ExtraLight',
        fontSize: 18,
    }
});

export default NotifyEmpty;
