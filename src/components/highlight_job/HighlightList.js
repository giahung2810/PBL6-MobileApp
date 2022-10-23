import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultDetail from './ResultDetail';

const HighlightList = ({ title, results, navigation }) => {
    if(!results.length) return null;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                showsHorizontalScrollIndicator = {false}
                showsVerticalScrollIndicator = {false}
                horizontal
                data={results}
                keyExtractor = {(result) => result.id}
                renderItem = {({item}) => {
                    return (
                        <TouchableOpacity 
                            onPress={() => {
                                navigation.navigate('ResultsShow', { id: item.id})
                            }}
                        >
                            <ResultDetail result={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 4
    },
    container: {
        marginBottom: 10
    }
});

export default HighlightList;