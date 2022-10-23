import React from 'react';
import { View, Image, Text , StyleSheet } from 'react-native';
import HighlightDetail from '../highlight_job/HighlightDetail'

const Company = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Information</Text>
            <Text style={styles.description}>Exceptional with communication skills and team working skill.
            {"\n"}
            {"\n"}
            Formulate good design ideas and propose solutions to increased product.
            {"\n"}
            {"\n"}

            You have at least 3 years of experience in a similar role.
            {"\n"}
            {"\n"}
            </Text>
            <Text style={styles.title}>Skills Needed</Text>
            <View style={styles.highlight}>
                <HighlightDetail title={'Full Time'}/>
                <HighlightDetail title={'UX Design'}/>
                <HighlightDetail title={'Senior'}/>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        // justifyContent: 'center'
    },
    title: {
        fontWeight: '600',
        fontSize: 22,
        lineHeight:24,
        color: '#171716',
        marginHorizontal: 8,
        marginVertical: 16
    },
    description:{
        marginHorizontal: 8,
        marginVertical: 4
    },
    highlight: {
        flexDirection: 'row'
    }
});

export default Company;