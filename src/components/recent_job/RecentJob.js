import React, {useState} from 'react';
import { View, Image, Text , StyleSheet, TouchableOpacity } from 'react-native';
import Logo from '../../../assets/logo.png'
import { Fontisto } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import Tag from '../Tag/Tag'
import AddressCompany from '../Address/AddressCompany'
import SalaryJob from '../Salary/SalaryJob'
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import {api} from '../../api/apiJob'
import Modal from 'react-native-modal';
import RemoveSaved from '../Modal/RemoveSaved'
import SaveJob from '../Modal/AddSaved';
import { useDispatch, useSelector } from 'react-redux';
import useDecodeTokens from '../../hooks/useDecodeToken'
import { delete_SaveJobs, get_Jobs_Favorites, post_SaveJobs } from '../../redux/jobRequest';


const RecentJob = ({item, setList_jobs}) => {
    const job = item.job;
    const navigation = useNavigation();
    const [favorite, setFavorite] = useState(job.isFavorite);
    const agregarFavoritos = () => {
        if(job.isFavorite)
        {
            setModalVisible_remove(true);
            setModalVisible_save(false);
        } else {
            setModalVisible_remove(false);
            setModalVisible_save(true);
        }
        // setFavorite(!favorite);
      };
    const formatDate = (data) => {
        var m = moment(); // Initial moment object
        // Create the new date
        var myDate = new Date(data);
        var newDate = moment(myDate);
        // Inject it into the initial moment object
        m.set(newDate.toObject());
        return m.fromNow();
    };
    const [modalVisible_remove, setModalVisible_remove] = useState(false);
    const [modalVisible_save, setModalVisible_save] = useState(false);
    const user = useSelector((state) => state.auth.login.currentUser);
    const id = useDecodeTokens(user.tokens.access).user_id;

    return (
        <TouchableOpacity style={styles.container}  onPress={() => navigation.navigate('JobDetails',{item})}>
            <View style={styles.container_child1}>
                {/* company image */}
                <Image style={styles.image} source={{uri: api + job.company.image}}  resizeMode='contain'/> 
                
                <TouchableOpacity onPress={() => agregarFavoritos()} style={{ borderWidth:1, borderColor: '#F3F3F3', alignItems: 'center' , justifyContent: 'center', borderRadius: 60/2, height: 38, width: 38}}>
                    {   job.isFavorite ? 
                            <FontAwesome name="bookmark" size={24} color="blue" style={styles.icon}/>
                            : <FontAwesome name="bookmark-o" size={24} color="#7F879E" style={styles.icon}/>
                    }
                </TouchableOpacity>
            </View> 
                <View style={styles.boxDetail}>
                    <Text style={styles.title}>{job.name}</Text>    
                </View>
                <View style={styles.boxDetail}>
                    <Text style={styles.text}>{job.description}</Text>    
                </View>
                
                    {job.skills.map((skill, index) => (
                        <View style={styles.tag} key={skill.id}>
                        <Tag tag = {{
                            text: skill.name, 
                            color:'#757575', 
                            borderColor:'#757575', 
                            borderWidth:1, 
                            fontSize:10}} 
                        />
                        <Tag tag = {{
                            text: skill.level_name, 
                            color:'#757575', 
                            borderColor:'#757575', 
                            borderWidth:1, 
                            fontSize:10}} 
                        />
                        </View>
                    ))}
                
                <View style={styles.detaiInfor}>
                    <AddressCompany address={job.company.company_location}/>
                    <SalaryJob salary={job.salary}/>
                </View>
            <View style={styles.container_child2}>
                <Text style={styles.timePost}>{formatDate(job.updated_at)}</Text>
            </View>
            <Modal
                testID={'modal'}
                isVisible={modalVisible_remove}
                onSwipeComplete={() => setModalVisible_remove(false)}
                swipeDirection={['up', 'left', 'right', 'down']}
                style={styles.view}>
                <RemoveSaved funout={() => {
                        // delete_SaveJobs(job.id_favorite);
                        setModalVisible_remove(false);
                    }}
                    fun={() => {
                        delete_SaveJobs(job.id_favorite);
                    }}
                    item = {item}
                    setList_jobs={setList_jobs}
                />
            </Modal>
            <Modal
                testID={'modal'}
                isVisible={modalVisible_save}
                onSwipeComplete={() => setModalVisible_save(false)}
                swipeDirection={['up', 'left', 'right', 'down']}
                style={styles.view}>
                <SaveJob 
                    funout={() => {
                        setModalVisible_save(false);
                    }}
                    fun={() => {
                        const data = {
                            user: id,
                            job: job.id
                        }
                        post_SaveJobs(data);
                    }}
                    item = {item}
                    setList_jobs={setList_jobs}
                />
            </Modal>
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
        // justifyContent: 'space-between',
        marginRight:12
    }
});

export default RecentJob;