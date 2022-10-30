import ProfileScreen from '../screens/ProfileScreen'
import SettingsScreen from '../screens/SettingsScreen'
import InformationProfile from '../screens/InformationProfile'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Profile = () => {
    return (
      //
        <Stack.Navigator screenOptions={{
        }}>
          <Stack.Screen name="ProfileScreen" 
            component={ProfileScreen} 
            options={{
                // headerStyle: {
                //     height: 48 + getStatusBarHeight(),
                //     paddingTop: 0
                // },
            }}
        />
            <Stack.Screen name="InformationProfile" component={InformationProfile} />
            <Stack.Screen name="Setting" component={SettingsScreen} />
        </Stack.Navigator>
    );
}

export default Profile;