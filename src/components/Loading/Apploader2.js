import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Lottie  from 'lottie-react-native'

const AppLoader2 = () => {
  return (
    <View style={[styles.container]}>
        <Lottie  
            source={require('../../../assets/loader2.json')} 
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
        // backgroundColor: 'rgba(0,0,0,0.3)', 
        zIndex: 100,
        // borderWidth: 1,
    },
    load:{
        width: 100,
        height: 100,
        // borderWidth: 1,
        paddingLeft: 12
    }
 })
export default AppLoader2