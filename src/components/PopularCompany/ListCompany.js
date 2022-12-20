import JobCard from '../JobsCard/JobCard'
import React, {useState} from 'react';
import { View, Image, Text , StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Title from '../Title'
import Company from './Company'
import { getListCompanys } from '../../redux/companyRequest';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const ListCompany = ({list}) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Title title='Popular Company' onPress={() => {
                navigation.navigate('Home', { 
                    screen: 'ListCompany',
                    initial: false,
                  },
                );
                // navigation.navigate('ListCompany');
            }}/>
            {list?.length == 0 ? <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 12}}>
                        <Image source={{uri : 'https://cdn-icons-png.flaticon.com/512/847/847613.png'}} style={{height: 60, width: 60}}/>
                        <Text style={{fontFamily:'Urbanist-SemiBold', fontSize: 18}}>No Results Found</Text>
            </View> : 
            null}
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