import NotificationScreen from '../screens/NotificationScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import NotificationAboutJob from '../screens/NotificationAboutJob';

const Stack = createNativeStackNavigator();
const Notification = () => {
    return (
      //
        <Stack.Navigator screenOptions={{
        }}>
          <Stack.Screen name="NotificationScreen" 
            component={NotificationScreen} 
            options={{
            }}
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