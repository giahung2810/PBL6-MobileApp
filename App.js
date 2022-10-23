// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
// import Navigation from './src/navigation/Navigation'
// import AppLoading from 'expo-app-loading';
// import { useFonts } from "@use-expo/font";
// import * as Font from "expo-font";

// const customFonts = {
//   Montserrat: require("./assets/fonts/montserrat.ttf"),
// };
// export default function App() {

//   const [isLoaded] = useFonts(customFonts);

//   return (
//     // <SafeAreaView >
//       <Navigation />
//     // </SafeAreaView>
//   );
// }
import Navigation from './src/navigation/Navigation'
import React, { useState, useEffect, useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { View} from 'react-native'


import useFonts from './src/hooks/useFonts';

export default function App() {
  const [IsReady, SetIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await useFonts();
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        SetIsReady(true);
      }
    }

    prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (IsReady) {
      await SplashScreen.hideAsync();
    }
  }, [IsReady]);

  if (!IsReady) {
    return null;
  }

  return (<View style={{flex: 1}} onLayout={onLayoutRootView}><Navigation /></View>);
}