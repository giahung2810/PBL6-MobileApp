import { SafeAreaView, StyleSheet, TouchableOpacity, View,Platform,StatusBar  } from 'react-native'
import React, {useState} from 'react'
import SearchBar from '../components/Search/SearchBar'
import { AntDesign } from '@expo/vector-icons'; 
import AppLoader2 from '../components/Loading/Apploader2';

const SearchScreen = ({navigation}) => {
    const [isFocus,setIsFocus] = useState(false);
    return (
    // <>
        <SafeAreaView style={[{backgroundColor: '#fff', flex: 1}, styles.container]}>
            <View style={styles.header}>
                 <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icon}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <View style={{flex: 1, marginRight: 20}}>
                    <SearchBar autoFocus={true} isFocus setFocus={setIsFocus}/>
                </View>
            </View>
            {isFocus ? <View style={styles.loading}>
                <AppLoader2/>
            </View>: null}
        </SafeAreaView>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    header:{
        flexDirection: 'row',
        width: '100%',
        // justifyContent: 'space-around'
    },
    icon:{
        marginHorizontal: 16,
        marginVertical: 28,
    },
    loading:{
        width: '100%',
        height: '100%'
    }
})