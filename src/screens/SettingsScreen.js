import { View, Text, Button } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export default function SettingsScreen() {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const handleLogout = () => {
        logoutUser(dispatch, navigation);
    }
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Logout</Text>
        <Button title="Logout" onPress = {handleLogout} />
      </View>
    );
}