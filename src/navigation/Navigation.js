import { View, Text, Button,StatusBar, SafeAreaView } from 'react-native';
import React,{useContext}  from 'react';
import HomeScreen from '../screens/HomeScreen';
import ApplyFormScreen from '../screens/ApplyFormScreen';
import JobDescription from '../screens/JobDescription';
import ApplicationStatus from '../navigation/ApplicationStatus';
import SaveJobs from '../navigation/SaveJob'
import Notification from '../navigation/Notification';
import Login from '../navigation/Login'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { setNavigator } from '../navigationRef';

import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

import { Provider as AuthProvider } from '../context/AuthContext';
import {Context as AuthContext} from '../context/AuthContext';
import { Provider } from 'react-redux';
import {store} from '../redux/store'

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
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="MainNavigator" component={MainNavigator} options={{headerShown: false}}/>
          <Stack.Screen name="JobDetails" component={JobDescription} options={{headerShown: false}}/>
          <Stack.Screen name="Apply" component={ApplyFormScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}

export default function Navigation() {
    return (
      <Provider store={store}>
        <AuthProvider>
          <NavigationContainer ref= {( navigator ) => { setNavigator(navigator) }} >
              <Navigator />
          </NavigationContainer>
        </AuthProvider>
      </Provider>
      );
} 
