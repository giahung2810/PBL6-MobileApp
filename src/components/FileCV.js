import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import FileJPG from '../../assets/FileJPG.png'
import FilePDF from '../../assets/FilePDF.png'
import FilePNG from '../../assets/FilePNG.png'

import { AntDesign } from '@expo/vector-icons'; 

 
const FileCV = ({file, removeFunc}) => {
    // const file = {
    //     mimeType: 'image/jpeg',
    //     name: 'Jamet kudasi - CV - UI/UX Designer',
    //     size: '100KB'
    // };
  return (
    <View style={styles.container} >
        <View style={styles.boxCV}>
            {file.mimeType === 'image/jpeg' ? (
                <Image style={styles.image} source={FileJPG}  resizeMode='contain'/>
            ) : file.mimeType === 'application/pdf' ? (
                <Image style={styles.image} source={FilePDF}  resizeMode='contain'/>
            ): (
                <Image style={styles.image} source={FilePNG}  resizeMode='contain'/>
            )
            }
            <View style={styles.boxInfo}>
                <Text style={styles.name}>{file.name}</Text>
                <Text style={styles.info}>{file.size}</Text>
            </View>
        </View>
        {/* <View style={styles.boxRemove}> */}
            <TouchableOpacity style={styles.boxRemove} onPress={removeFunc}>
                <AntDesign name="delete" size={24} color="#FC4646" />
                <Text style={styles.remove}> Remove File</Text>
            </TouchableOpacity>
        {/* </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // padding: 10,
        // flexDirection: 'row'
        borderStyle: 'dotted',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#9D97B5',
        paddingHorizontal: 14,
        paddingVertical: 14,
        marginBottom: 18
    },
    boxCV: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 8
    },
    image: {
        height: 44,
        width: 44,
    }, 
    boxInfo: {
        marginLeft: 16
    },
    name :{ 
        color: '#150B3D',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 16,
        marginBottom: 4
    },
    info: {
        color: '#AAA6B9'
    },
    boxRemove:{
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    remove:{
        color: '#FC4646',
        marginHorizontal: 8
    }
})

export default FileCV;