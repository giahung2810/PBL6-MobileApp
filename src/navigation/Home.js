import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import HomeScreen from '../screens/HomeScreen';
import ListCompanyScreen from '../screens/ListCompanyScreen';
import ListJobScreen from '../screens/ListJobScreen';

const Stack = createNativeStackNavigator();
const Home = () => {
    return (
      //
        <Stack.Navigator screenOptions={{}}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="ListCompany" component={ListCompanyScreen} />
            <Stack.Screen name="ListJob" component={ListJobScreen} />
        </Stack.Navigator>
    );
}

export default Home;