import ApplicationsScreen from '../screens/ApplicationsScreen'
import ApplicationStages from '../screens/ApplicationStages'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const Stack = createNativeStackNavigator();
const ApplicationStatus = () => {
    return (
      //
        <Stack.Navigator screenOptions={{
        }}>
          <Stack.Screen name="ApplicationsScreen" 
            component={ApplicationsScreen} 
            options={{
                // headerStyle: {
                //     height: 48 + getStatusBarHeight(),
                //     paddingTop: 0
                // },
            }}
        />
          <Stack.Screen name="ApplicationStages" component={ApplicationStages} />
        </Stack.Navigator>
    );
}

export default ApplicationStatus;