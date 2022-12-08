import React, { useRef, useState } from 'react';
import {Animated,Image,ImageBackground,ScrollView,StatusBar,StyleSheet,Text,View, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';
import {SafeAreaProvider,useSafeAreaInsets,} from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import InforCompany from '../InforMainCompany/InforCompany';
import Banner from '../../../assets/background_Company.jpg'
import Logo from '../../../assets/logo.png'
import { useNavigation } from '@react-navigation/native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import CountDown from 'react-native-countdown-component';

const HEADER_HEIGHT_EXPANDED = 80;
const HEADER_HEIGHT_NARROWED = 100;

const AnimatedImageBackground = Animated.createAnimatedComponent(
  ImageBackground
);

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

export default function DynamicPageExam({children, exam}) {
  // Keeps notches away
  return (
    <SafeAreaProvider>
      <App exam={exam}>{children}</App>
    </SafeAreaProvider>
  );
}

function App({children, exam}) {
  const insets = useSafeAreaInsets();
  const scrollY = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const [time, setTime] = useState(exam ? exam[0]?.time_limit * 60 : null );
  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle="light-content" /> */}

      {/* Back button */}
      {/* <TouchableOpacity
        style={{
          zIndex: 6,
          position: 'absolute',
          top: insets.top + 10,
          left: 20,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          height: 30,
          width: 30,
          borderRadius: 15,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => {navigation.goBack()}}
      >
        <Feather name="chevron-left" color="white" size={26} />
      </TouchableOpacity> */}

      {/* Refresh arrow */}
      {/* <Animated.View
        style={{
          zIndex: 2,
          position: 'absolute',
          top: insets.top + 13,
          left: 0,
          right: 0,
          alignItems: 'center',
          opacity: scrollY.interpolate({
            inputRange: [-20, 0],
            outputRange: [1, 0],
          }),
          transform: [
            {
              rotate: scrollY.interpolate({
                inputRange: [-45, -35],
                outputRange: ['180deg', '0deg'],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}
      >
        <Feather name="arrow-down" color="white" size={25} />
      </Animated.View> */}

      {/* Name + Comment count */}
      <Animated.View
        style={{
          zIndex: 2,
          position: 'absolute',
          top: insets.top + 6,
          left: 0,
          right: 0,
          alignItems: 'center',
          opacity: scrollY.interpolate({
            inputRange: [90, 110],
            outputRange: [0, 1],
          }),
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [90, 120],
                outputRange: [30, 0], 
                extrapolate: 'clamp',
              }),
            },
          ],
        }}
      >
        {exam ? 
        <CountDown
            until={time}
            // size={30}
            // onFinish={() => alert('Finished')}
            digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#2196f3'}}
            digitTxtStyle={{color: '#2196f3'}}
            timeToShow={['M', 'S']}
            timeLabels={{m: null, s: null}}
            showSeparator
            separatorStyle={{color: '#2196f3'}}
            // onChange={(value) => {setTime(value - 1)}}
        />
        : null}
      </Animated.View>

      {/* Banner */}
      <Animated.View
        // source={company.image} //image
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: HEADER_HEIGHT_EXPANDED + HEADER_HEIGHT_NARROWED,
          justifyContent: 'center',
          transform: [
            {
              scale: scrollY.interpolate({
                inputRange: [-200, 0],
                outputRange: [5, 1],
                extrapolateLeft: 'extend',
                extrapolateRight: 'clamp',
              }),
            },
          ],
        }}
      >
        <View style={{alignSelf: 'center', marginBottom: 30}}>
          {exam ? 
            <Text style={{fontFamily:'Urbanist-Bold', fontSize: 18}}>{exam[0]?.name}</Text>
            : null }
        </View>
        <AnimatedBlurView
          tint="default"
          intensity={96}
          style={{
            ...StyleSheet.absoluteFillObject,
            zIndex: 2,
            opacity: scrollY.interpolate({
              inputRange: [-50, 0, 50, 100],
              outputRange: [1, 0, 0, 1],
            }),
          }}
        />
      </Animated.View>

      {/* Tweets/profile */}
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { y: scrollY },
              },
            },
          ],
          { useNativeDriver: true }
        )}
        style={{
          zIndex: 3,
          marginTop: HEADER_HEIGHT_NARROWED,
        //   paddingTop: HEADER_HEIGHT_EXPANDED,
        }}
      >
        <View
          style={[styles.container, { backgroundColor: '#fff' }]}
        >
          <View
            style={[
              styles.container,
              {
                paddingHorizontal: 20,
              },
            ]}
          >
            {/* <Animated.Image
              source={company.image}
              style={{
                width: 85,
                height: 85,
                borderRadius: 40,
                borderWidth: 1,
                borderColor: 'rgba(238, 238, 238, 0.5)',
                marginTop: -30,
                transform: [
                  {
                    scale: scrollY.interpolate({
                      inputRange: [0, HEADER_HEIGHT_EXPANDED],
                      outputRange: [1, 0.6],
                      extrapolate: 'clamp',
                    }),
                  },
                  {
                    translateY: scrollY.interpolate({
                      inputRange: [0, HEADER_HEIGHT_EXPANDED],
                      outputRange: [0, 16],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              }}
            /> */}

            {/* <InforCompany type = {false} company={company}/> */}
          </View>
              <View style = {{marginTop:24}}/>
          <View style={[styles.container, {paddingHorizontal:20}]}>
            {children}
          </View>
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  text: {
    color: 'black',
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: -3,
  },
  tweetsCount: {
    fontSize: 13,
  },
  tweet: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(255, 255, 255, 0.25)',
  },
});