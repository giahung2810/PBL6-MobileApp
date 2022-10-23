import * as Font from "expo-font";
 
export default useFonts = async () =>
  await Font.loadAsync({
    'Urbanist-Black': require('../../assets/font/Urbanist-Black.ttf'),
    'Urbanist-Bold': require('../../assets/font/Urbanist-Bold.ttf'),
    'Urbanist-SemiBold': require('../../assets/font/Urbanist-SemiBold.ttf'),
    'Urbanist-ExtraBold': require('../../assets/font/Urbanist-ExtraBold.ttf'),
    'Urbanist-ExtraLight': require('../../assets/font/Urbanist-ExtraLight.ttf'),
    'Urbanist-Light': require('../../assets/font/Urbanist-Light.ttf'),
    'Urbanist-Medium': require('../../assets/font/Urbanist-Medium.ttf'),
    'Urbanist-Regular': require('../../assets/font/Urbanist-Regular.ttf'),
    'Urbanist-Thin': require('../../assets/font/Urbanist-Thin.ttf'),
  });