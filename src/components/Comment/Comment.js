import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Rating, AirbnbRating } from 'react-native-ratings';
import { AntDesign } from '@expo/vector-icons'; 
import moment from 'moment';

const PROFILE_PICTURE_URI =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png';

const Comment = ({item, type}) => {
    const formatDate = (data) => {
        var m = moment(); // Initial moment object
        // Create the new date
        var myDate = new Date(data);
        var newDate = moment(myDate);
        // Inject it into the initial moment object
        m.set(newDate.toObject());
        return m.fromNow();
    };
  return (
    <View key={item.id} style={styles.tweet}>
        <Image
            source={{
                uri: PROFILE_PICTURE_URI,
            }}
            style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            marginRight: 10,
            }}
        />

        <View style={styles.container}>
            <View style={{ flexDirection: 'row' , alignItems: 'center', justifyContent: 'space-between'}}>
                <Text
                    style={[
                    styles.text,
                    {
                        fontWeight: 'bold',
                        fontSize: 15,
                    },
                    ]}
                >
                    {item.author}{' '}
                    <Text
                    style={{
                        color: 'gray',
                        fontWeight: 'normal',
                    }}
                    >
                        {formatDate(item.created_at)}
                    </Text>
                </Text>
                {type === 'job' 
                ? 
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <AntDesign name="like2" size={24} color="gray" />
                    <Text style={{color: 'gray',marginLeft: 4, fontFamily:'Urbanist-Bold', fontSize: 15}}>10</Text>
                </TouchableOpacity> 
                :
                <Rating
                    // showRating
                    type='custom'
                    ratingColor='yellow'
                    // ratingBackgroundColor='#c8c7c8'       
                    // onFinishRating={ratingCompleted}
                    ratingCount={5}
                    startingValue={item.rating}   // initial value
                    style={{marginLeft: 16}}
                    imageSize={16}
                />}
            </View>
            <Text style={[styles.comment, { fontSize: 15 }]}>
                {item.comment}
            </Text>
            
        </View>
        </View>
  )
}

export default Comment

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: 'black',
        
    },
    comment:{
        fontFamily: 'Urbanist-Medium',
        fontSize: 14,
        color: '#616161',
    },
    tweet: {
        flexDirection: 'row',
        paddingVertical: 10,
        // paddingHorizontal: 20,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: 'rgba(255, 255, 255, 0.25)',
    },
})