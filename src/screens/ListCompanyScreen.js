import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { getListCompanys } from '../redux/companyRequest';
import { useState, useEffect , useLayoutEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Topbar from '../components/topbar/Topbar';
import TopCompany from '../components/PopularCompany/Company';
import { AntDesign } from '@expo/vector-icons'; 
import AppLoader from '../components/Loading/AppLoader';

const ListCompanyScreen = () => {
  const [list_companys, setList_companys] = useState();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const company_isFetching = useSelector((state) => state.company.companys.isFetching);

  const getCompanysAPi = async () => {
    const result = await getListCompanys(dispatch);
    setList_companys(result);
  };
  useEffect(() => {
    // console.log('list_companys useEffect', list_companys);
    getCompanysAPi();
  },[]);
  // console.log('list_companys LISTSCREEN', list_companys);

  useLayoutEffect(() => { 
    navigation.setOptions({ 
      headerTitle: '',
      headerLeft : () => (
        <View style= {{ flexDirection: 'row' , alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Topbar headerTitle='Company' icon = {false}/>
        </View> 
      ),
    })  
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
          showsHorizontalScrollIndicator = {false}
          showsVerticalScrollIndicator = {false}
          data={list_companys?.results}
          keyExtractor = {(item) => item.id}
          renderItem = {({item}) => {
              return (
                  <TopCompany item={item} key={item.id}/>
              );
          }}
      />
      {company_isFetching ? <AppLoader /> : null}
    </View>
  )
}

export default ListCompanyScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    flex:1
  }
})