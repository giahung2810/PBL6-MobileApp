import SavedJobs from '../screens/SavedJobs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const Stack = createNativeStackNavigator();
const SaveJobs = () => {
    return (
      //
        <Stack.Navigator screenOptions={{
        }}>
          <Stack.Screen name="SavedJobs" 
            component={SavedJobs} 
            options={{
                // headerStyle: {
                //     height: 48 + getStatusBarHeight(),
                //     paddingTop: 0
                // },
            }}
        />
        </Stack.Navigator>
    );
}

export default SaveJobs;