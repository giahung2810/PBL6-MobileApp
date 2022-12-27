import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React, {useState} from 'react'
import { Rating, AirbnbRating } from 'react-native-ratings';
import TextComment2 from '../Comment/TextComment2';
import { post_Review_Company } from '../../redux/companyRequest';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { createAxios } from '../../api/apiJob';
import { loginUpdate } from '../../redux/authSlice';
import useDecodeTokens from '../../hooks/useDecodeToken'

const ReviewCompany = ({fun, company}) => {
    const [rating, setRating] = useState(1);
    const [comment, setComment] = useState('');
    const user = useSelector((state) => state.auth.login.currentUser);
    const ratingCompleted = (rating) => {
        setRating(rating);
    }
    const dispatch = useDispatch();
  return (
    <TouchableOpacity 
        style={styles.container} 
        // activeOpacity={1} 
        onPressOut={fun}
    >
    <TouchableWithoutFeedback>
    <View style={styles.container_child}>
        <Text>Your Review</Text>
        <Rating
            type='custom'
            defaultRating={1}
            startingValue={rating}
            // count={1}
            ratingCount={5}
            imageSize={30}
            onFinishRating={ratingCompleted}
            style={{ paddingVertical: 10 }}
        />
        <TextComment2 comment={comment} setComment={setComment}/>
        <TouchableOpacity 
            style={styles.button} 
            onPress={() => {
                if(comment == '') {alert('Please input a comment')}
                else {
                const post_Review= {
                    rating : rating,
                    comment : comment,
                    company: company.id,
                    user: useDecodeTokens(user.tokens.access).user_id,
                }
                const api = createAxios(user, dispatch , loginUpdate);
                post_Review_Company(
                    dispatch,
                    post_Review,
                    api,
                    user.tokens.access
                );
                fun();
                }
            }}
        >
            <Text style={{color: 'black', fontWeight: '700', fontSize: 16}}>Comment</Text>
        </TouchableOpacity>
    
    </View>
    </TouchableWithoutFeedback>
    </TouchableOpacity>
  )
}

export default ReviewCompany

const styles = StyleSheet.create({
    container:{
        height: '100%',
        justifyContent: 'center',
        // alignItems: 'center',
        width: '100%',
    },
    container_child: {
        backgroundColor: '#fff',
        paddingHorizontal: 12,
        paddingVertical: 28,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
})