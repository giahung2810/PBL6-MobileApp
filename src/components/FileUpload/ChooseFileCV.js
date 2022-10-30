import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'; 


const ChooseFileCV = ({selectFile}) => {
  return (
    <TouchableOpacity style={styles.container}  onPress={selectFile}>
        <Feather name="upload" size={24} color="black" style={styles.icon}/>
        <Text style={styles.text}>Upload CV/Resume</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'dotted',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#9D97B5',
        height:75,
        marginBottom: 18,
        backgroundColor: '#FAFAFA',
    },
    icon: {
        
    },
    text: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 16,
        marginLeft: 14,
    }

})

export default ChooseFileCV;