import { View, Text, StyleSheet , Image} from 'react-native'
import React, {useCallback, useEffect, useState} from 'react'
import LogoApp from '../../../assets/LogoApp.png'

const Topbar = ({headerTitle, icon=true}) => {
    return (
        <View style={styles.container} >
            {icon ? <Image style={styles.image} source={LogoApp}  resizeMode='contain'/>: null}
            
            <Text style={[styles.headerTitle ]}>{headerTitle}</Text>
        </View>
        )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        height: 28,
        width: 28,
        // marginLeft: 16,
    },
    headerTitle: {
        fontSize: 24,
        marginLeft: 8,
        fontFamily: 'Urbanist-Bold',
    }
})

export default Topbar