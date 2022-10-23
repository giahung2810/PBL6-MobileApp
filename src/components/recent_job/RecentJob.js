import React, {useState} from 'react';
import { View, Image, Text , StyleSheet, TouchableOpacity } from 'react-native';
import Logo from '../../../assets/logo.png'
import HighlightDetail from '../highlight_job/HighlightDetail'
import { Fontisto } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { navigate } from '../../navigationRef';
import { FontAwesome } from '@expo/vector-icons'; 

const RecentJob = ({navigation}) => {
    const [favorite, setFavorite] = useState(false);
    const agregarFavoritos = () => {
        setFavorite(!favorite);
      };
    return (
        <TouchableOpacity style={styles.container}  onPress={() => navigate('JobDetails')}>
            <View style={styles.container_child1}>
                <Image style={styles.image} source={Logo}  resizeMode='contain'/>
                <View style={styles.boxDetail}>
                    <Text style={styles.title}>BackEnd Senior</Text>    
                    <HighlightDetail />
                </View>
                <TouchableOpacity onPress={() => agregarFavoritos()}>
                    {   favorite ? 
                            <FontAwesome name="bookmark" size={28} color="blue" />
                            : <FontAwesome name="bookmark-o" size={28} color="black" />
                    }
                </TouchableOpacity>
            </View> 
            <View style={styles.container_child2}>
                <Text style={styles.salary_Month}><Text style={styles.salary_Price}>$50K</Text>/Month</Text>
                <Text style={styles.timePost}>15 Minute Ago</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        // marginLeft: 15
        backgroundColor: '#ffffff',
        borderRadius: 20,
        // width: 250,
        marginBottom: 8,
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    boxDetail:{
        flex:1,
        marginLeft:8,
    },
    container_child1: {
        margin: 12,
        marginBottom: 6,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container_child2: {
        margin: 12,
        marginTop: 0,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        width: 43,
        height: 43,
        borderRadius: 10,
        marginRight: 10
    },
    salary_Price:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    salary_Month: {
        color: '#727272',
        marginBottom: 12,
        fontSize: 14,
        lineHeight: 19,
        marginTop: 10,
        marginLeft:60
    },
    title : {
        // color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 6,
    },
    address : {
        // color: 'white',
        fontWeight: 'regular',
        fontSize: 14,
        marginBottom: 4,
    },
    company: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    icon: {
        flex:2
    },
    timePost:{
        color: '#727272',
        // marginBottom: 12,
        fontSize: 14,
        lineHeight: 19,
        marginTop: 10,
        marginLeft:60
    }
});

export default RecentJob;