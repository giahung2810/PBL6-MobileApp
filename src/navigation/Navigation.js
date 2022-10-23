import { View, Text, Button,StatusBar, SafeAreaView } from 'react-native';
import React,{useContext}  from 'react';
import SignupScreen from '../screens/SignupScreen';
import SigninScreen from '../screens/SigninScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import ApplyFormScreen from '../screens/ApplyFormScreen';
import JobDescription from '../screens/JobDescription';
import ApplicationStatus from '../navigation/ApplicationStatus';
import ApplicationsScreen from '../screens/ApplicationsScreen';
import ApplicationStages from '../screens/ApplicationStages';
import SaveJobs from '../navigation/SaveJob'
import SavedJobs from '../screens/SavedJobs'
import Notification from '../navigation/Notification';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as AuthProvider } from '../context/AuthContext';
import {Context as AuthContext} from '../context/AuthContext';
import { setNavigator } from '../navigationRef';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Constants from 'expo-constants';

import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const SettingsScreen = () => {
  const {signout} = useContext(AuthContext);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Logout</Text>
        <Button title="Logout" onPress = {signout} />
      </View>
    );
  }
const MainNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
            <Tab.Screen name="Home" component={HomeScreen} 
                    options={{
                      tabBarIcon: ({color}) => {
                        return <AntDesign name="home" size={24} color={color} />
                      }
                    }} />
            <Tab.Screen name="SaveJobs" component={SaveJobs}   
                    options={{
                      tabBarIcon: ({color}) => {
                        return <MaterialIcons name="bookmark-border" size={26} color={color} />
                      }
                    }}
            />
            <Tab.Screen name="Application" component={ApplicationStatus}  
                    options={{
                      tabBarIcon: ({color}) => {
                        return <MaterialIcons name="work-outline" size={24} color={color} />
                      },
                      headerShown: false
                    }}
            />
            <Tab.Screen name="Notification" component={Notification}   
                    options={{
                      tabBarIcon: ({color}) => {
                        return <Feather name="bell" size={24} color={color} />
                      },
                      tabBarBadge: 3
                    }}
            />
            <Tab.Screen name="Settings" component={SettingsScreen} 
                    options={{
                      tabBarIcon: ({color}) => {
                        return <AntDesign name="setting" size={24} color={color} />
                      }
                    }} 
            />
        </Tab.Navigator>
    );
}
const Navigator = () => {
    return (
      //
        <Stack.Navigator screenOptions={{}}>
          {/* <Stack.Screen name="SignIn" component={SigninScreen} />
          <Stack.Screen name="SignUp" component={SignupScreen} />
          <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
          <Stack.Screen name="NewPassword" component={NewPasswordScreen} /> */}
          <Stack.Screen name="MainNavigator" component={MainNavigator} options={{headerShown: false}}/>
          <Stack.Screen name="JobDetails" component={JobDescription} options={{headerShown: false}}/>
          <Stack.Screen name="Apply" component={ApplyFormScreen} options={{headerShown: false}}/>
          {/* <Stack.Screen name="ApplicationStages" component={ApplicationStages} /> */}
        </Stack.Navigator>
    );
}

export default function Navigation() {
    return (
      <AuthProvider>
        <NavigationContainer ref= {( navigator ) => { setNavigator(navigator) }} >
            <Navigator />
        </NavigationContainer>
      </AuthProvider>
      );
} 
