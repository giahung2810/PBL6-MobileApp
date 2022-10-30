import React, { useState } from 'react';
// Import core components
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Platform,
  ScrollView
} from 'react-native';
import Modal from 'react-native-modal';
import { TextInput as PaperTextInput } from "react-native-paper";

// Import Document Picker
// import DocumentPicker from 'react-native-document-picker';
import * as DocumentPicker from 'expo-document-picker';
import ChooseFileCV from '../components/FileUpload/ChooseFileCV';
import FileCV from '../components/FileCV'
import HeaderCompanyDescription from '../components/HeaderCompanyDescription'
import ApplyJobSuccessModal from '../components/Modal/ApplyjobSuccessModal'
import ButtomApply from '../components/Button/ButtonApply';

const ApplyFormScreen = ({navigation}) => {
  const [singleFile, setSingleFile] = useState(null);
  const [letter, setLetter] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const removeFile = () => {
    setSingleFile(null);
  }

  const uploadImage = async () => {
    // Check if any file is selected or not
    console.log('Uploading file...');
    if (singleFile != null) {
      // If file selected then create FormData
      const fileToUpload = singleFile;
      const data = new FormData();
      data.append('name', 'Image Upload');
      data.append('file_attachment', fileToUpload);
      // Please change file upload URL
    //   let res = await fetch(
    //     'http://localhost/upload.php',
    //     {
    //       method: 'post',
    //       body: data,
    //       headers: {
    //         'Content-Type': 'multipart/form-data; ',
    //       },
    //     }
    //   );
    //   let responseJson = await res.json();
    //   if (responseJson.status == 1) {
    //     alert('Upload Successful');
    //   }
    } else {
      // If no file selected the show alert
      alert('Please Select File first');
    }
  };
 
  const selectFile = async () => {
    // Opening Document Picker to select one file
      let result = await DocumentPicker.getDocumentAsync({});
      // Printing the log realted to the file      
      // Setting the state to show single file attributes
      result.type == 'cancel' ? setSingleFile(null) : setSingleFile(result);
      
    };
    // console.log(singleFile);
    // console.log(result);
  return (
    <View style={styles.container}>
      <HeaderCompanyDescription />
      <ScrollView style={styles.container}>
      <View style={styles.mainBody}>
        <View style={styles.space}/>
        <Text style={styles.title}>Upload CV</Text>
        <Text style={styles.disc_title}>Add your CV/Resume to apply for a job</Text>
        {singleFile != null  ? (
          <FileCV file={singleFile} removeFunc={removeFile}/>
        ) : <ChooseFileCV selectFile={selectFile}/>
        }

        <Text style={[styles.title]}>Information</Text>
          <PaperTextInput
            style={styles.paperTextInput}
            multiline={true}
            mode={"outlined"}
            outlineColor={'#9D97B5'}
            theme={{ roundness: 20 }} 
            render={props => (
              <TextInput
                {...props}
                style={styles.RN_TEXT_INPUT_STYLE}
                placeholder="Motivation letter..."
                placeholderTextColor="grey"
                onChangeText={(text) => setLetter({text})}
                value={letter}
              />
            )}
          />

      </View>
      
      
      <Modal 
          testID={'modal'}
          isVisible={modalVisible}
          // onSwipeComplete={this.close}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
          useNativeDriverForBackdrop
          swipeDirection={['down']}
          // styles={}
      >
        <ApplyJobSuccessModal fun={() => 
          {
            setModalVisible(false);
            navigation.navigate('Application', { 
              screen: 'ApplicationsScreen',
              initial: false,
            });
          }
        }/>
      </Modal>
      </ScrollView>
      <View style={styles.buttonbottom}>
        {/* <TouchableOpacity style={styles.boxButton_apply} onPress={() => setModalVisible(!modalVisible)} >
            <Text style={styles.buttonText_apply}>APPLY NOW</Text>
        </TouchableOpacity> */}
        <ButtomApply onPress={() => setModalVisible(!modalVisible)} text="APPLY NOW"/>
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    // borderWidth:1,
    borderColor: 'black'
  },
  space: {
    height: 70
  },
  mainBody: {
    flex: 1,
    paddingHorizontal: 20,
  },
  buttonStyle: {
    backgroundColor: '#307ecc',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#307ecc',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    textAlign: 'center',
  },
  title: {
    color: '#150B3D',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 8
  },
  disc_title: {
    color: '#524B6B',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    marginBottom: 18
  },
  textAreaContainer: {
    backgroundColor: '#FAFAFA',
    // borderWidth: 1,
    borderRadius: 20,
    padding: 5
  },
  paperTextInput: {
    backgroundColor: '#FAFAFA',
    width: "100%",
    height: 160,
    borderRadius: 20,
    borderStyle: 'dotted',
  },
  RN_TEXT_INPUT_STYLE:{
      width: "100%",
      height: 160,
      fontSize: 14,
      padding: 16,
      ...Platform.select({
        android: {
          textAlignVertical: "top"
        }
      })
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
    alignItems: 'flex-start',
    // flex: 1
  },
  buttonText_apply:{
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  boxButton_apply:{
    backgroundColor: '#0085FF',
    // height: 80
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center', 
    borderRadius: 20,
    flex:2,
    marginHorizontal: 16
  },
  buttonbottom:{
    height: 60,
    width: '95%',
    position: 'absolute',
    bottom: 20,
    // top:200,
    zIndex:3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 8
  },
});
 
export default ApplyFormScreen;