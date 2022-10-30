import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import * as ImagePicker from 'expo-image-picker';
import NullAvatar from '../../../assets/nullavatar.png'
import PaintEdit from '../../../assets/PaintEdit.png'
import { FontAwesome } from '@expo/vector-icons'; 

const ImageUpload = () => {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log(result);
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
    };

    return (
      <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={pickImage}
          style={styles.uploadBtnContainer}
        >
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ width: '100%', height: '100%' }}
            />
          ) : (
            <Image
              source={NullAvatar}
              style={{ width: '100%', height: '100%' }}
            />
          )}
          
        </TouchableOpacity>
        <Image
              source={PaintEdit}
              style={styles.icon}
        />
      </View>
    </View>
    )
}

export default ImageUpload

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10
  },
  uploadBtnContainer: {
    height: 125,
    width: 125,
    borderRadius: 125 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    // borderStyle: 'dashed',
    // borderWidth: 1,
    overflow: 'hidden',
  },
  uploadBtn: {
    textAlign: 'center',
    fontSize: 16,
    opacity: 0.3,
    fontWeight: 'bold',
  },
  icon:{
    position: 'absolute',
    bottom: 10,
    right: -4,
    zIndex: 100,
    width: 33.33, 
    height: 33.33,
    borderRadius: 110,
  }
})