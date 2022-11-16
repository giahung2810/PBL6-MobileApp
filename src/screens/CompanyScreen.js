import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DynamicPageCompany from '../components/Animation/DynamicPageCompany'
import CommentList from '../components/Comment/CommentList'

const CompanyScreen = ({route}) => {
  const item = route.params.item;
  // console.log(item)
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <DynamicPageCompany company={item}>
        <CommentList list={item.reviews} type="company" company={item}/>
      </DynamicPageCompany>
    </View>
  )
}

export default CompanyScreen

const styles = StyleSheet.create({})