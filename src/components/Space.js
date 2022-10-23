import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Space = () => {
  return (
    <View style={styles.container}>
        {/* <View style={styles.divide}></View> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 16,
        borderTopWidth:1,
        borderColor: 'rgba(238, 238, 238, 0.5)'
    },

})

export default Space