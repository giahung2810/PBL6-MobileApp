// Expo SDK41
// expo-blur: ~9.0.3
import React, { useRef } from 'react';
import {
  Animated,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Platform,
  RefreshControl
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import { Avatar } from 'react-native-paper'
import SearchBar from '../Search/SearchBar';
import {useTransformImg} from '../../hooks/useTransformIMG'

function generateTweets(limit) {
  return new Array(limit).fill(0).map((_, index) => {
    const repetitions = Math.floor(Math.random() * 3) + 1;

    return {
      key: index.toString(),
      text: 'Lorem ipsum dolor amet '.repeat(repetitions),
      author: 'Arnaud',
      tag: 'eveningkid',
    };
  });
}

const TWEETS = generateTweets(30);
const HEADER_HEIGHT_EXPANDED = 60;
const HEADER_HEIGHT_NARROWED = 132;
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
const PROFILE_PICTURE_URI =
  'https://pbs.twimg.com/profile_images/975388677642715136/7Hw2MgQ2_400x400.jpg';

const PROFILE_BANNER_URI =
  'https://pbs.twimg.com/profile_banners/3296259169/1438473955/1500x500';

const AnimatedImageBackground = Animated.createAnimatedComponent(
  ImageBackground
);

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

export default function WrappedApp({children, username, refreshing, setRefreshing}) {
  // Keeps notches away
  return (
    <SafeAreaProvider>
      <App username={username} refreshing={refreshing} setRefreshing={setRefreshing}>{children}</App>
    </SafeAreaProvider>
  );
}

function App({children, username , refreshing, setRefreshing}) {
  const insets = useSafeAreaInsets();
  const scrollY = useRef(new Animated.Value(0)).current;
  const img = useTransformImg("https://api.quangdinh.me/media/logo_FSOFT_d%E1%BB%8Dc.webp");
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' ? <StatusBar barStyle="light" />: null}
      {/* <StatusBar barStyle="light-content" /> */}

      {/* Refresh arrow */}
      <Animated.View
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
      </Animated.View>

      {/* Name + tweets count */}
      <Animated.View
        style={{
          zIndex: 1,
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
        {/* <Text style={[styles.text, styles.username]}>Arnaud</Text>

        <Text style={[styles.text, styles.tweetsCount]}>
          379 tweets
        </Text> */}
        <View 
          style={{
            paddingHorizontal: 24,
            width: '100%',
          }}
        >
          <SearchBar/>
        </View>
      </Animated.View>

      {/* Banner */}
      <AnimatedImageBackground
        // source={{
        //   uri: PROFILE_BANNER_URI,
        // }}
        style={{
          position: 'absolute',
          backgroundColor: '#0085FF',
          left: 0,
          right: 0,
          height: HEADER_HEIGHT_EXPANDED + HEADER_HEIGHT_NARROWED,
          borderBottomLeftRadius:30,
          borderBottomRightRadius:30,
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
        <AnimatedBlurView
          tint="dark"
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
        <Animated.View 
          style={{
            flexDirection: 'row' ,
            alignItems: 'center', 
            justifyContent: 'center',
            marginTop:72,
          }}
        >
          <View style={styles.boxName}>
            <Text style={styles.helloText}>Hello,</Text>
            <Text style={styles.nameText}>{username}</Text>
          </View>
          <Avatar.Image style={styles.Image} size={60} source={require('../../../assets/dat.jpg')} />
        </Animated.View>
      </AnimatedImageBackground>

      {/* Tweets/profile */}
      <Animated.ScrollView
        nestedScrollEnabled={true}
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
          paddingTop: HEADER_HEIGHT_EXPANDED,
        }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        {children}
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: 'white',
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
  boxInfor: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  boxName: {
    marginRight: 120,
  },
  helloText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: "white",
  },
  nameText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "white",
  },
});
1