import { StyleSheet, Text, View , ScrollView, } from 'react-native'
import React, {useEffect, useLayoutEffect} from 'react'
import useDeepCompareEffect from 'use-deep-compare-effect'
import DynamicPageCompany from '../components/Animation/DynamicPageCompany'
import CommentList from '../components/Comment/CommentList'
import { getCompany } from '../redux/companyRequest'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { useIsFocused } from '@react-navigation/native';
import { useState } from 'react'
import AppLoader from '../components/Loading/AppLoader'

const CompanyScreen = ({route}) => {
  const item = route.params.item;
  const dispatch = useDispatch();
  const id = item.id;
  const getcompany = useSelector((state) => state.company.company.company);
  useEffect(() => { 
    getCompany(dispatch,id);
  }, [id]);
  return (
    <>
      {getcompany === null ? 
        <DynamicPageCompany company={item}>
          <CommentList list={item.reviews} type="company" company={item}/>
        </DynamicPageCompany>
        :
        <DynamicPageCompany company={getcompany}>
          <CommentList list={getcompany.reviews} type="company" company={getcompany}/>
        </DynamicPageCompany>
      }
    </>
  );
};

export default CompanyScreen

const styles = StyleSheet.create({})