import NotificationScreen from '../screens/NotificationScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {getStatusBarHeight} from 'react-native-status-bar-height';

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
        </Stack.Navigator>
    );
}

export default Notification;