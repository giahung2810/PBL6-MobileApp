import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Comment from '../Comment/Comment';
import TextComment from './TextComment';
import CommentBoxCompany from './CommentBoxCompany';
import { useSelector } from 'react-redux';
import AppLoader from '../Loading/AppLoader';

const CommentList = ({list, type, company, job}) => {
  // console.log(list);  
  const company_isFetching = useSelector((state) => state.company.company.isFetching);
  const cmt_isFetching = useSelector((state) => state.job.comment.isFetching);
  return (
        <View>
            {list.map((item,) => (
                <Comment item={item} key={item.id} type={type}/>
            ))}
            {type === 'job' 
            ? <TextComment type={type} job={job} />
            : <CommentBoxCompany company={company}/>
            }
                  
            {company_isFetching || cmt_isFetching ? <AppLoader /> : null}
        </View>
  )
}

export default CommentList

const styles = StyleSheet.create({})