import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import NullAvatar from '../../../assets/nullavatar.png'

const Profile = ({profile}) => {
    const navigation = useNavigation();
    const user = useSelector((state) => state.auth.login.currentUser);
  return (
    <TouchableOpacity style={styles.container}  onPress={() => {
        navigation.navigate('Profile', { 
            screen: 'InformationProfile',
            initial: false,
            params: { profile },
        });
    }}>
      <Avatar.Image style={styles.Image} size={60} source={require('../../../assets/nullavatar.png')} />
      <View style={styles.container_child1}>
            <Text style={styles.name}>{profile?.first_name} {profile?.last_name}</Text>
            
            <Text style={styles.position}>{user?.email}</Text>
      </View>
      <View>
        <AntDesign name="edit" size={20} color="blue" />
      </View>
    </TouchableOpacity>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: 18,
        paddingVertical: 12,
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center'
    },
    container_child1: {
        flex:1,
        marginLeft: 10,
    },
    name: {
        marginVertical: 2,
        fontFamily: 'Urbanist-Bold',
        fontSize: 24,
    },
    position:{
        marginVertical: 2,
        fontFamily: 'Urbanist-Light',
        fontSize: 16,
    }
})