import { SafeAreaView, StyleSheet, TouchableOpacity, View,Platform,StatusBar, ScrollView, Image, Text  } from 'react-native'
import React, {useState} from 'react'
import SearchBar from '../components/Search/SearchBar'
import { AntDesign } from '@expo/vector-icons'; 
import AppLoader2 from '../components/Loading/Apploader2';
import ComponentJob from '../components/Search/ComponentJob';
import Title from '../components/Title';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import useDecodeTokens from '../hooks/useDecodeToken'
import { useEffect } from 'react';
import { getListApplication, get_Jobs_Application, get_Jobs_Favorites, get_Jobs_Search } from '../redux/jobRequest';
import { createAxios } from '../api/apiJob';
import { loginUpdate } from '../redux/authSlice';

const SearchScreen = ({}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.login.currentUser);
    const id = useDecodeTokens(user.tokens.access).user_id;
    const [isFocus,setIsFocus] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults_job, setFilteredResults_job] = useState([]);
    const [filteredResults_application, setFilteredResults_application] = useState([]);
    const [list_jobs, setList_jobs] = useState();
    const [list_Application, setList_Application] = useState();
    const getListApply = async () => {
        const api = createAxios(user, dispatch , loginUpdate);
        const result = await get_Jobs_Application(dispatch, id, api,user.tokens.access);
        // console.log('result',result);
        setList_Application(result);
      };
    const getJobsAPi = async () => {
      // const result = await getJobs(dispatch);
      const result = await get_Jobs_Search(dispatch ,id);
      setList_jobs(result);
    }
    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData_job = list_jobs.filter((item) => {
                return Object.values(item.job).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults_job(filteredData_job)
            const filteredData_application = list_Application.filter((item) => {
                return Object.values(item.job).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults_application(filteredData_application)
        }
        else{
            setFilteredResults_job(list_jobs)
        }
    }
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          // do something
        //   console.log('list_job useEffect', list_jobs);
          getJobsAPi();
          getListApply();
        });
        return unsubscribe;
      },[navigation]);
    // console.log('result',filteredResults_application);
    return (
    // <>
        <SafeAreaView style={[{backgroundColor: '#fff', flex: 1}, styles.container]}>
            <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icon}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <View style={{flex: 1, marginRight: 20}}>
                    <SearchBar 
                        autoFocus={true} 
                        isFocus 
                        setFocus={setIsFocus}
                        term={searchInput}
                        onTermChange={searchItems}
                    />
                </View>
            </View>
            <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
            

            <View style={styles.box}>
                <Title title='Jobs' />
                {filteredResults_job.length == 0 ?
                    <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 12}}>
                        <Image source={{uri : 'https://cdn-icons-png.flaticon.com/512/847/847613.png'}} style={{height: 60, width: 60}}/>
                        <Text style={{fontFamily:'Urbanist-SemiBold', fontSize: 18}}>No Results Found</Text>
                        <Text style={{fontFamily:'Urbanist-Light', fontSize: 18}}>Try a different search</Text>
                    </View>
                : null }
                {filteredResults_job?.map((item, index) =>(
                    <ComponentJob key={index} item={item}/>
                ))}
            </View>
            <View style={styles.box}>
                <Title title='Your Applycation' />
                {filteredResults_application?.map((item, index) =>(
                    <ComponentJob key={index} item={item} title='apply'/>
                ))}
            </View>
            {/* <View style={styles.box}>
                <Title title='Applycation Status' />
                <ComponentJob/>
            </View> */}
            </ScrollView>
            {searchInput === '' ? <View style={styles.loading}>
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
        alignItems: 'center',
    },
    icon:{
        marginHorizontal: 16,
        marginVertical: 28,
    },
    loading:{
        width: '100%',
        height: '100%'
    },
    box: {
        flex:1,
        marginHorizontal: 16
    }
})