import React, { useState } from 'react';
// Import core components
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import Company from '../../assets/company.jpg'
import { Avatar } from 'react-native-paper'
const HeaderCompanyDescription = () => {
    return (
    <>
        <Image style={styles.image} source={Company}  resizeMode='cover'/>
            <View style={styles.boxContainer}>
          <Avatar.Image style={styles.Image} size={90} source={require('../../assets/logo.png')} />
          <Text style={styles.title}>Product Designer</Text>
          <Text style={styles.address}>California, USA</Text>
        </View>
    </>
)
}
const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 200,
        zIndex: 1
      },
      boxContainer: {
        width: '95%',
        height: 100,
        backgroundColor: '#fff',
        justifyContent: 'center', 
        alignItems: 'center',
        zIndex: 3,
        borderRadius:20,
        marginHorizontal: 8,
        paddingHorizontal: 8,
        position: 'absolute',
        top: 150,
        flex: 1,
        padding: 20,
    
        shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
    
            elevation: 6,
      },
      Image : {
        position: 'absolute',
        bottom: 70,
        zIndex: 3
      },
      boxAvatar: {
        justifyContent: 'center', 
        alignItems: 'center',
        zIndex: 1
      },
      title :{
        fontSize: 24,
        fontWeight: '600',
        marginTop: 8
      },
      address:{
        marginTop: 4
      },
})

export default HeaderCompanyDescription;