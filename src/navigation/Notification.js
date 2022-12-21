import NotificationScreen from '../screens/NotificationScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import NotificationAboutJob from '../screens/NotificationAboutJob';
import { useState } from 'react';

const Stack = createNativeStackNavigator();
const Notification = ({route}) => {
  // useLayoutEffect(() => {
  //   navigation.getParent().setOptions({
  //     tabBarBadge: reportesNot,
  //   });
  // }, [reportesNot])
  // const currentCity = route.params.currentCity;
    return (
      //
        <Stack.Navigator screenOptions={{
        }}>
          <Stack.Screen name="NotificationScreen" 
            component={NotificationScreen} 
            options={{
            }}
            // initialParams={{currentCity: currentCity}}
          />
          <Stack.Screen name="NotificationAboutJob"
            component={NotificationAboutJob}
            options={{

            }}
          />
        </Stack.Navigator>
    );
}

export default Notification;