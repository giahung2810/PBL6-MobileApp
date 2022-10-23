import React from 'react';
import { View, Text , StyleSheet } from 'react-native';

const Tag = ({ tag }) => {
    return (
        <View style={[styles.container , {
            backgroundColor: tag.backgroundColor, 
            borderColor: tag.borderColor, 
            borderWidth: tag.borderWidth,
            height: tag.height,
        }]}>
            <Text style={[styles.text, {color: tag.color, fontSize: tag.fontSize}]} >{tag.text}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 2,
    },
    text: {
        // fontSize:10,
        fontFamily: 'Urbanist-SemiBold',
        // lineHeight:14,
        paddingHorizontal: 10,
        paddingVertical: 6
    }
});

export default Tag;