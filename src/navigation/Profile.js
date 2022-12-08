import ProfileScreen from '../screens/ProfileScreen'
import SettingsScreen from '../screens/SettingsScreen'
import InformationProfile from '../screens/InformationProfile'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EducationScreen from '../screens/EducationScreen';
import ExpirenceScreen from '../screens/ExpirenceScreen';
import SkillScreen from '../screens/SkillScreen';

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
            <Stack.Screen name="Education" component={EducationScreen} />
            <Stack.Screen name="Expirence" component={ExpirenceScreen} />
            <Stack.Screen name="Skill" component={SkillScreen} />
        </Stack.Navigator>
    );
}

export default Profile;