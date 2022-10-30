// import * as React from 'react';
import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import DescriptionScreen from '../components/DescriptionScreen/DescriptionScreen';
import { MaterialIcons } from '@expo/vector-icons'; 
import HeaderCompanyDescription from '../components/HeaderCompanyDescription'
import ButtomApply from '../components/Button/ButtonApply';
// import { navigate } from '../../navigationRef';

const JobDescription = ({navigation}) => {
  const [favorite, setFavorite] = useState(false);
    const agregarFavoritos = () => {
        setFavorite(!favorite);
      };
  const [modalVisible, setModalVisible] = useState(false);
    return (      
      <>
      {/* <ScrollView style={styles.detail}> */}
        <HeaderCompanyDescription/>
        <View style={styles.space}/>
        <DescriptionScreen />
      {/* </ScrollView> */}
      <View style={styles.buttonbottom}>
        <TouchableOpacity style={styles.boxButton_save}  onPress={() => agregarFavoritos()}>
            {   favorite ? 
              <Text style={styles.buttonText_save}>SAVE</Text> :
              <Text style={styles.buttonText_save}>SAVE</Text> 
            }         
            {   favorite ? 
                  <MaterialIcons name="favorite" size={26} color="blue" style={styles.icon}/> 
                  : <MaterialIcons name="favorite-outline" size={26} color="black" style={styles.icon}/>
            }
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.boxButton_apply}  onPress={() => navigation.navigate('Apply')}>
            <Text style={styles.buttonText_apply}>APPLY NOW</Text>
        </TouchableOpacity> */}
        <View style={styles.boxButton_apply}>
          <ButtomApply onPress={() => navigation.navigate('Apply')} text='Apply'/>
        </View>
      </View>
      </>
    );
  };
export default  JobDescription;
  
const styles = StyleSheet.create({
  // detail:{
  //   height: 990,

  // },
  image:{
    width: '100%',
    height: 200,
    zIndex: 1
  },
  boxContainer: {
    width: '95%',
    height: 100,
    backgroundColor: '#fff',
    justifyContent: 'center', 
    alignItems: 'center',
    zIndex: 3,
    borderRadius:20,
    marginHorizontal: 8,
    paddingHorizontal: 8,
    position: 'absolute',
    top: 150,

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
  buttonStyle: {
    height: 90,
    width: 90,
    backgroundColor: 'black',
    borderRadius: 100,
    zIndex: 4
  },
  space: {
    height: 55,
    backgroundColor: '#eeeef0'
  },
  boxButton_apply:{
    // backgroundColor: '#0085FF',
    // height: 80
    // padding: 12,
    alignItems: 'center',
    justifyContent: 'center', 
    // borderRadius: 20,
    flex:2,
    marginRight: 24,
    marginLeft: 16
  },
  buttonbottom:{
    // height: 80
    width: '100%',
    position: 'absolute',
    bottom: 40,
    zIndex:4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 12
  },
  boxButton_save:{
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center', 
    borderWidth:2,
    borderColor: '#0085FF',
    borderRadius: 20,
    flexDirection: 'row',
  },
  buttonText_save :{
    color: '#0085FF',
    fontSize: 16,
    fontWeight: '500',
  },
  icon:{
    color: '#0085FF',
    marginLeft: 6
  }
})
  