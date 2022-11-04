import { View, Text, Button,StatusBar, SafeAreaView } from 'react-native';
import React,{useContext}  from 'react';
import HomeScreen from '../screens/HomeScreen';
import ApplyFormScreen from '../screens/ApplyFormScreen';
import JobDescription from '../screens/JobDescription';
import ApplicationStatus from '../navigation/ApplicationStatus';
import SaveJobs from '../navigation/SaveJob'
import Notification from '../navigation/Notification';
import Login from '../navigation/Login'
import SearchScreen from '../screens/SearchScreen';
import Profile from '../navigation/Profile'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { setNavigator } from '../navigationRef';

import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Provider as AuthProvider } from '../context/AuthContext';
import {Context as AuthContext} from '../context/AuthContext';
import { Provider } from 'react-redux';
import {store, persistor} from '../redux/store'
import { PersistGate } from 'redux-persist/lib/integration/react';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ tabBarShowLabel: false}}>
            <Tab.Screen name="Home" component={HomeScreen} 
                    options={{
                      tabBarIcon: ({color}) => {
                        return <AntDesign name="home" size={24} color={color} />
                      },
                      headerShown: false
                    }} />
            <Tab.Screen name="SaveJobs" component={SaveJobs}   
                    options={{
                      tabBarIcon: ({color}) => {
                        return <MaterialIcons name="bookmark-border" size={26} color={color} />
                      },
                      headerShown: false
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
                      tabBarBadge: 3,
                      headerShown: false
                    }}
            />
            <Tab.Screen name="Profile" component={Profile} 
                    options={{
                      tabBarIcon: ({color}) => {
                        return <Ionicons name="person" size={24} color={color} />
                      },
                      headerShown: false
                    }}
            />
        </Tab.Navigator>
    );
}
const Navigator = () => {
    return (
      //
        <Stack.Navigator screenOptions={{}}>
          <Stack.Screen name="MainNavigator" component={MainNavigator} options={{headerShown: false}}/>
          <Stack.Screen name="JobDetails" component={JobDescription} />
          <Stack.Screen name="Apply" component={ApplyFormScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="Search" component={SearchScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}

export default function Navigation() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
          <AuthProvider>
            <SafeAreaProvider>
              <NavigationContainer ref= {( navigator ) => { setNavigator(navigator) }} >
                  <Navigator />
              </NavigationContainer>
            </SafeAreaProvider>
          </AuthProvider>
        </PersistGate>
      </Provider>
      );
} 
