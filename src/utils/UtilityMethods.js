import React from 'react';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {Alert, PermissionsAndroid, Platform} from 'react-native';

class UtilityMethods {
  //Image Picker
  selectImage = callback => {
    let options = {
      mediaType: 'photo',
      cameraType: 'front',
    };

    Alert.alert('Select image from', '', [
      {
        text: 'Camera',
        onPress: () => {
          if (Platform.OS === 'ios') {
            launchCamera(options, res => {
              if (res.didCancel) {
                console.log('User cancelled image picker');
              } else if (res.errorMessage) {
                console.log('ImagePicker Error: ', res.errorMessage);
              } else {
                console.log('Camera Image ====> ', res);
                callback(res.assets[0]);
              }
            });
          } else {
            const requestCameraPermission = async () => {
              try {
                const granted = await PermissionsAndroid.request(
                  PermissionsAndroid.PERMISSIONS.CAMERA,
                  {
                    title: 'App Camera Permission',
                    message: 'App needs access to your camera',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                  },
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                  launchCamera(options, res => {
                    if (res.didCancel) {
                      console.log('User cancelled image picker');
                    } else if (res.errorMessage) {
                      console.log('ImagePicker Error: ', res.errorMessage);
                    } else {
                      console.log('Camera Image ====> ', res);
                      callback(res.assets[0]);
                    }
                  });
                } else {
                  console.log('Camera permission denied');
                }
              } catch (err) {
                console.warn(err);
              }
            };

            requestCameraPermission().then(r => {});
          }
        },
      },
      {
        text: 'Photo Library',
        onPress: () => {
          launchImageLibrary(options, res => {
            if (res.didCancel) {
              console.log('User cancelled image picker');
            } else if (res.errorMessage) {
              console.log('ImagePicker Error: ', res.errorMessage);
            } else {
              console.log('Picked Image ====> ', res);
              callback(res.assets[0]);
            }
          });
        },
      },
      {text: 'Cancel', style: 'destructive'},
    ]);
  };

  selectGallery = callback => {
    let options = {
      mediaType: 'photo',
      cameraType: 'back',
    };

    launchImageLibrary(options, res => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.errorMessage) {
        console.log('ImagePicker Error: ', res.errorMessage);
      } else {
        console.log('Picked Image ====> ', res);
        callback(res.assets[0]);
      }
    });
  };
}

const Utilities = new UtilityMethods();

export default Utilities;
