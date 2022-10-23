import React, {useState} from 'react';
import { View, Image, Text , StyleSheet, TouchableOpacity } from 'react-native';
import Logo from '../../../assets/logo.png'
import HighlightDetail from '../highlight_job/HighlightDetail'
import { Fontisto } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import ButtomApply from '../ButtonApply';

const RecommendJob = () => {
    const [favorite, setFavorite] = useState(false);
    const agregarFavoritos = () => {
        setFavorite(!favorite);
      };
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.container_child1}>
                <Image style={styles.image} source={Logo}  resizeMode='contain'/>
                <View style={styles.boxName}>
                    <Text style={styles.company}>Pessi</Text> 
                    <Text style={styles.address}>Da Nang, VN</Text> 
                </View>
                <TouchableOpacity onPress={() => agregarFavoritos()}>
                    {   favorite ? 
                            <MaterialIcons name="favorite" size={26} color="blue" style={styles.icon}/> 
                            : <MaterialIcons name="favorite-outline" size={26} color="black" style={styles.icon}/>
                    }
                </TouchableOpacity>
            </View> 
            <View style={styles.space}/>
            <View style={styles.container_child2}>
                <Text style={styles.title}>Senior Project Manager</Text>
                {/* <HighlightDetail /> */}
            </View>
            <View style={styles.container_child3}>
                <ButtomApply onPress={()=> {}} text="Apply Now" />
                <Text style={styles.salary_Month}><Text style={styles.salary_Price}>$50K</Text>/Month</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        // marginLeft: 15
        backgroundColor: '#ffffff',
        borderRadius: 20,

        marginRight: 20,
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    container_child1: {
        margin: 12,
        marginBottom: 6,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    boxName: {
        flex:1,
        marginLeft:8,
    },
    container_child2: {
        margin: 12,
        marginTop: 0,
        marginLeft: 16
    },
    container_child3: {
        // margin: 12,
        // marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 190,
    },
    image: {
        width: 43,
        height: 43,
        borderRadius: 10,
        margin: 4
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
        // marginLeft:4
    },
    title : {
        // color: 'white',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 19,
        marginBottom: 8,
        // marginLeft: 4
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
        flex: 2,
        marginTop: 8,
    },
    space: {
        height: 36,
        width:'100%'
    }
});

export default RecommendJob;