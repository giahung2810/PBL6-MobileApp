import React, {useState} from 'react';
import { View, Image, Text , StyleSheet, TouchableOpacity } from 'react-native';
import Logo from '../../../assets/logo.png'
import HighlightDetail from '../highlight_job/HighlightDetail'
import { Fontisto } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import Company from '../../../assets/company.jpg'
import Title from '../Title'

const PopularJob = () => {
    const [favorite, setFavorite] = useState(false);
    const agregarFavoritos = () => {
        setFavorite(!favorite);
      };
    return (

        <TouchableOpacity style={styles.container}>
            <Image style={styles.image} source={Company}  resizeMode='cover'/>
            <View style={styles.container_child1}>
                <View>
                    <Text style={styles.company}>Pessi</Text> 
                </View>
                <TouchableOpacity onPress={() => agregarFavoritos()}>
                    {   favorite ? 
                            <MaterialIcons name="favorite" size={26} color="blue" style={styles.icon}/> 
                            : <MaterialIcons name="favorite-outline" size={26} color="black" style={styles.icon}/>
                    }
                </TouchableOpacity>
            </View>  
            <Text numberOfLines={2} style={styles.description}>Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height) of the image will be equal to or less than</Text> 
            <Text style={styles.address}>Da Nang, VN</Text> 
            <View style={styles.container_child2}>
                <Text style={styles.title}> Senior Project Manager</Text>
                <Text style={styles.salary}>$50 - $75 / Mo</Text> 
                <HighlightDetail />
            </View>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    container: {
        // marginLeft: 15
        backgroundColor: '#ffffff',
        borderRadius: 10,
        width: '90%',
        marginRight: 8,
        borderLeftWidth:3,
        borderBottomWidth:1,
        borderRightWidth:1,
        borderTopWidth:1,
        borderColor: '#0085FF',
        
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
    container_child2: {
        margin: 8,
        marginTop: 0
    },
    image: {
        width: '100%',
        // height: 43,
        borderRadius: 10,
        marginRight: 10
    },
    salary: {
        // color: 'white'
        marginBottom: 12,
        marginLeft:4
    },
    title : {
        // color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
    },
    address : {
        // color: 'white',
        fontWeight: 'regular',
        fontSize: 14,
        marginVertical: 4,
        marginHorizontal: 12,
    },
    company: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#0085FF'
    },
    description: {
        marginHorizontal: 12,
    },
    icon: {
        // alignSelf: 'flex-end',
        // position: 'absolute',
        // left: 15
    }
});

export default PopularJob;