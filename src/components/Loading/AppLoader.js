import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Lottie  from 'lottie-react-native'

const AppLoader = () => {
  return (
    <View style={[styles.container, StyleSheet.absoluteFillObject]}>
        <Lottie  
            source={require('../../../assets/loader.json')} 
            autoPlay
            loop
            style={styles.load}
        />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', 
        zIndex: 100
    },
    load:{
        width: 200,
        height: 200
    }
 })
export default AppLoader