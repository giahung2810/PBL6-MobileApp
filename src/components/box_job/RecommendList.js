import Recommend from './RecommendJob'
import React, {useState} from 'react';
import { View, Image, Text , StyleSheet, TouchableOpacity } from 'react-native';
import Title from '../Title'

const RecommendList = () => {
    return (
        <View style={styles.container}>
            <Title title='Recomendation'/>
            <View style={styles.list}>
                <Recommend /> 
                <Recommend />
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

export default RecommendList;