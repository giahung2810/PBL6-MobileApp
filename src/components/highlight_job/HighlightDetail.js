import React from 'react';
import { View, Image, Text , StyleSheet } from 'react-native';

const HighlightDetail = ({ title}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.detail} >{title}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        // marginLeft: 15
        // backgroundColor: '#0085FF',
        // borderRadius: 10,
        // width: 80,
        justifyContent: 'center'
    },
    detail: {
        color: '#171716',
        fontSize:12,
        fontWeight: '400',
        lineHeight:14,
        margin: 8
    }
});

export default HighlightDetail;