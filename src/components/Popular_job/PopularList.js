import React, {useState} from 'react';
import { View, Image, Text , StyleSheet, TouchableOpacity } from 'react-native';
import Title from '../Title'
import Popular from '../Popular_job/PopularJob'

const PopularList = () => {
    return (
        <View style={styles.container}>
            <Title title='Recomendation'/>
            <View style={styles.list}>
                <Popular /> 
                <Popular />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    list: {
        flexDirection:'row'
    }
});

export default PopularList;