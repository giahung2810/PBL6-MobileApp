import React from 'react';
import { useState } from 'react';
import { View, Image, Text , StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CommentList from '../Comment/CommentList';

const Description = ({item}) => {
    const job = item.job;
    const comment = item.comments;
    const [view_Comment, setView_Comment] = useState(false);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Description</Text>
            <Text style={styles.description}>{job.description}</Text>
            {view_Comment 
            ?   <View>
                    <View style={{borderTopWidth: 1, borderColor: 'rgba(238, 238, 238, 0.5)', marginTop: 8, marginBottom: 16}}/>
                    <View style={{alignItems: 'center',  flexDirection: 'row', width: '100%'}}>
                        <Text style={{ fontFamily: 'Urbanist-Bold',fontSize: 18, flex:1, color: '#246BFD'}}>Comments</Text>
                        <TouchableOpacity style={{justifyContent: 'flex-end', marginVertical:4, }} 
                            onPress={() => setView_Comment(!view_Comment)}>
                            <Text style={{color: 'gray',fontFamily: 'Urbanist-Bold',fontSize: 16,}}>
                                Hiden...
                            </Text>
                        </TouchableOpacity>
                    </View>
                    
                    <CommentList list={comment} type="job" job={job}/>
                </View>
            :   <TouchableOpacity style={{alignItems: 'center', marginVertical:24}} 
                    onPress={() => setView_Comment(!view_Comment)}>
                    <Text style={{color: '#246BFD',fontFamily: 'Urbanist-Bold',fontSize: 16,}}>
                        View more?
                    </Text>
                </TouchableOpacity>
            }
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        // justifyContent: 'center'
        // borderBottomWidth:20,
        backgroundColor: '#fff',
        // margin: 6
    },
    title: {
        fontWeight: '600',
        fontSize: 22,
        lineHeight:24,
        color: '#171716',
        // marginHorizontal: 8,
        marginVertical: 12,
        fontFamily: 'Urbanist-Bold',
        fontSize: 22
    },
    description:{
        marginHorizontal: 8,
        marginVertical: 4,
        fontFamily: 'Urbanist-Medium',
        fontSize: 16
    },
    highlight: {
        flexDirection: 'row'
    }
});

export default Description;