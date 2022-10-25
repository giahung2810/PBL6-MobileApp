import * as React from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';
import SearchBar from '../SearchBar'
const Header_Max_Height = 200;
const Header_Min_Height = 40;

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
    <Animated.View 
        style={[
          styles.header,
          {
            height: animateHeaderHeight,
            backgroundColor: animateHeaderBackgroundColor
          }
        
        ]}
      >
        <Text style={styles.headerText}>
          A List of Books
        </Text>  
        <Text style={styles.headerText}>
          A List of Books
        </Text>  
        <Text style={styles.headerText}>
          A List of Books
        </Text>  
        <View style={styles.search}>
            <SearchBar 
                // term= {term} 
                // onTermChange={newTerm => setTerm(newTerm)}
                // onTermSubmit={() => searchApi()}
                //or 
                // onTermChange = {setTerm}
                // onTermSubmit = {() => searchApi(term)}
            />  
        </View>     
    </Animated.View>
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
    borderBottomLeftRadius: 20  
  },
  headerText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  search :{
    width: '100%',
    position: 'absolute',
    bottom: -30,
    zIndex: 4
  }
});