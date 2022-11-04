import React, {useState} from 'react';
import { View, Image, Text , StyleSheet, TouchableOpacity } from 'react-native';
import Logo from '../../../assets/logo.png'
import { Fontisto } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { navigate } from '../../navigationRef';
import { FontAwesome } from '@expo/vector-icons'; 
import Tag from '../Tag/Tag'
import AddressCompany from '../Address/AddressCompany'
import SalaryJob from '../Salary/SalaryJob'
const RecentJob = ({navigation}) => {
    const [favorite, setFavorite] = useState(false);
    const agregarFavoritos = () => {
        setFavorite(!favorite);
      };
    return (
        <TouchableOpacity style={styles.container}  onPress={() => navigate('JobDetails')}>
            <View style={styles.container_child1}>
                <Image style={styles.image} source={Logo}  resizeMode='contain'/>
                
                <TouchableOpacity onPress={() => agregarFavoritos()} style={{ borderWidth:1, borderColor: '#F3F3F3', alignItems: 'center' , justifyContent: 'center', borderRadius: 60/2, height: 38, width: 38}}>
                    {   favorite ? 
                            <FontAwesome name="bookmark" size={24} color="blue" style={styles.icon}/>
                            : <FontAwesome name="bookmark-o" size={24} color="#7F879E" style={styles.icon}/>
                    }
                </TouchableOpacity>
            </View> 
                <View style={styles.boxDetail}>
                    <Text style={styles.title}>BackEnd Senior</Text>    
                </View>
                <View style={styles.boxDetail}>
                    <Text style={styles.text}>We are looking for a Illustrator Director who would work close with our team at https://kulga.co/ to continue the website design</Text>    
                </View>
                <View style={styles.tag}>
                    <Tag tag = {{
                        text: 'Employment Type', 
                        color:'#757575', 
                        borderColor:'#757575', 
                        borderWidth:1, 
                        fontSize:10}} 
                    />
                    <Tag tag = {{
                        text: 'Work Type', 
                        color:'#757575', 
                        borderColor:'#757575', 
                        borderWidth:1 , 
                        fontSize:10 }} 
                    />
                </View>
                <View style={styles.detaiInfor}>
                    <AddressCompany/>
                    <SalaryJob/>
                </View>
            <View style={styles.container_child2}>
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
        paddingHorizontal: 4,
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
        marginLeft:20,
    },
    container_child1: {
        margin: 12,
        marginBottom: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    container_child2: {
        margin: 12,
        marginTop: 0,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    image: {
        width: 56,
        height: 56,
        // padding:12,
        borderRadius: 10,
        marginRight: 10,
        borderWidth:1,
        borderColor: '#F3F3F3'
    },
    title : {
        // color: 'white',
        fontFamily: 'Urbanist-Bold',
        fontSize: 16,
        marginVertical: 12,
    },
    text:{
        fontFamily: 'Urbanist-Light',
        fontSize: 14,
        color: '#7F879E',
    },
    icon: {
        // flex:2,
        paddingHorizontal:8,
    },
    timePost:{
        color: '#727272',
        // marginBottom: 12,
        fontSize: 14,
        fontFamily: 'Urbanist-Light',
        fontSize: 14,
    },
    tag:{
        flexDirection: 'row',
        marginLeft:20,
        marginVertical: 8
    },
    detaiInfor:{
        flexDirection: 'row',
        marginLeft:20,
        marginVertical: 8,
        justifyContent: 'space-around'
    }
});

export default RecentJob;