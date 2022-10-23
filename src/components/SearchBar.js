import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons'; 

const SearchBar= ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style = {styles.backgroundStyle}>
            <Feather name="search" style = {styles.iconStyle}/>
            <TextInput
                autoCapitalize= "none"
                autoCorrect={false}
                style = {styles.inputStyle}
                placeholder="Search"
                value={term}
                // onChangeText = {newTerm => onTermChange(newTerm)}
                // onEndEditing = {() => onTermSubmit()}
                //or
                onChangeText = {onTermChange}
                // onEndEditing = {onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#FFF',
        height: 50,
        borderRadius: 12,
        marginTop: 16,
        // marginHorizontal: 10,
        flexDirection: 'row',
        // alignItems: 'center',
        marginBottom: 8,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.65,

        elevation: 3,
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
    iconStyle: {
        fontSize: 26,
        alignSelf: 'center',
        marginHorizontal: 16,
    }
});

export default SearchBar;