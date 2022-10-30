import { StyleSheet, Text, View } from 'react-native'
import React, {useLayoutEffect} from 'react'
import Topbar from '../components/topbar/Topbar'

const SettingsScreen = ({navigation}) => {
  useLayoutEffect(() => { 
    navigation.setOptions({ 
      headerTitle: '',
      headerLeft : () => (
        <View style= {{ flexDirection: 'row' , alignItems: 'center'}}>
          <Topbar headerTitle='Applications'/>
        </View> 
      ),
    }) 
  }, []);
  return (
    <View>
      <Text>SettingsScreen</Text>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({})