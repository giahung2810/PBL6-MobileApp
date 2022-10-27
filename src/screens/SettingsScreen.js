import { View, Text, Button } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { logoutUser } from '../redux/apiRequest';
import AppLoader from '../components/Loading/AppLoader';
import { useSelector } from 'react-redux';

export default function SettingsScreen() {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const isFetching = useSelector((state) => state.auth.logout.isFetching);
    const handleLogout = () => {
        logoutUser(dispatch, navigation);
    }
    return (
      <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Logout</Text>
        <Button title="Logout" onPress = {handleLogout} />
      </View>
      {isFetching ? <AppLoader/> : null }
      </>
    );
}