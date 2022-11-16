import JobCard from '../JobsCard/JobCard'
import React, {useState} from 'react';
import { View, Image, Text , StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Title from '../Title'
import Company from './Company'

const ListCompany = ({list}) => {
    return (
        <View style={styles.container}>
            <Title title='Popular Company' />
            <FlatList
                showsHorizontalScrollIndicator = {false}
                showsVerticalScrollIndicator = {false}
                horizontal
                data={list}
                keyExtractor = {(item) => item.id}
                renderItem = {({item}) => {
                    return (
                        <Company item={item} key={item.id}/>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // marginBottom: 60,
    },
});

export default ListCompany;