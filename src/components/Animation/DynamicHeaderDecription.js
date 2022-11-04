import * as React from 'react';
import { Text, View, StyleSheet, Animated, Image } from 'react-native';
import HeaderCompanyDescription from '../HeaderCompanyDescription';
import Company from '../../../assets/company.jpg'
import { Avatar } from 'react-native-paper'
const Header_Max_Height = 200;
const Header_Min_Height = 0;

export default function DynamicHeader({animHeaderValue}) {
  const animateHeaderBackgroundColor = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: ['blue', 'white'],
    extrapolate: 'clamp'
  })

  const animateHeaderHeight =  animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height ],
    outputRange: [Header_Max_Height , Header_Min_Height],
    extrapolate: 'clamp'
  })
//   const [term, setTerm] = useState('');
  return (
    <>
    <Animated.View 
        style={[
          styles.header,
          {
            height: animateHeaderHeight,
            backgroundColor: animateHeaderBackgroundColor
          }
        
        ]}
      >
        <Image style={styles.image} source={Company}  resizeMode='cover'/>
        <View style={styles.boxContainer}>
            <Avatar.Image style={styles.Image} size={90} source={require('../../../assets/logo.png')} />
            <Text style={styles.title}>Product Designer</Text>
            <Text style={styles.address}>California, USA</Text>
        </View> 
    </Animated.View>
    
        </>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',      
    left: 0,
    right: 0,
    // paddingTop: 10   
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    marginBottom: 56
  },
  image:{
    width: '100%',
    height: 200,
    // zIndex: 1
  },
  boxContainer: {
    width: '95%',
    height: 100,
    backgroundColor: '#fff',
    justifyContent: 'center', 
    alignItems: 'center',
    zIndex: 10,
    borderRadius:20,
    marginHorizontal: 8,
    paddingHorizontal: 8,
    position: 'absolute',
    top: 150,
    flex: 1,
    padding: 20,

    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  Image : {
    position: 'absolute',
    bottom: 70,
    zIndex: 3
  },
  boxAvatar: {
    justifyContent: 'center', 
    alignItems: 'center',
    zIndex: 1
  },
  title :{
    fontSize: 24,
    fontWeight: '600',
    marginTop: 8
  },
  address:{
    marginTop: 4
  },
});