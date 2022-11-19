import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Comment from '../Comment/Comment';
import TextComment from './TextComment';
import CommentBoxCompany from './CommentBoxCompany';

const CommentList = ({list, type, company}) => {
  return (
        <View>
            {list.map((item,) => (
                <Comment item={item} key={item.id} type={type}/>
            ))}
            {type === 'job' 
            ? <TextComment type={type}/>
            : <CommentBoxCompany company={company}/>
            }
        </View>
  )
}

export default CommentList

const styles = StyleSheet.create({})