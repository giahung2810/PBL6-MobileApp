import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Title = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.link}>View all</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    link: {
        // width: '100%',
        color: '#0085FF',
        marginLeft:6,
        marginTop: 16,
        fontWeight: '400',
        fontSize: 16,
    },
    title: {
        fontWeight: '700',
        fontSize: 20,
        marginLeft:6,
        marginVertical: 12
    }
})

export default Title