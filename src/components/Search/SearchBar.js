import React,{useState} from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";

const SearchBar= ({term, onTermChange, onTermSubmit,autoFocus, isFocus, setFocus}) => {
    const navigation = useNavigation();
    console.log(typeof(setFocus))
    return (
        <View style = {[styles.backgroundStyle, {borderColor: isFocus ? 'blue' : '#e8e8e8'},]}>
            <Feather name="search" style = {[styles.iconStyle,{color: isFocus ? 'blue' : '#e8e8e8'}]}/>
            <TextInput
                autoCapitalize= "none"
                autoCorrect={false}
                style = {styles.inputStyle}
                placeholder="Search"
                value={term}
                onBlur={() => { 
                    setFocus && setFocus(false);
                }}
                // onChangeText = {newTerm => onTermChange(newTerm)}
                // onEndEditing = {() => onTermSubmit()}
                //or
                onFocus={() => {
                    navigation.navigate('Search');
                    setFocus && setFocus(true);
                }}
                onChangeText = {onTermChange}
                autoFocus={autoFocus}
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
        borderWidth: 1,
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