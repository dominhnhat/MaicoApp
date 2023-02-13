import React, {useEffect} from 'react';
import {View} from 'react-native';
import {StackActions} from '@react-navigation/native';

import Config from '../../../branding/carter/configuration/Config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Routes from '../../navigation/Routes';
export const SplashScreen = props => {
  const isLoggin = async () => {
    try {
      let user = await AsyncStorage.getItem('@user');
      let isFirstLoad = await AsyncStorage.getItem('@firstLoad');
      console.log(user);
      user != null ? JSON.parse(user) : null;
      if (user) {
        props.navigation.navigate(Routes.HOME_VARIANT3);
      } else if (!user && isFirstLoad) {
        props.navigation.dispatch(
          StackActions.replace(Routes.LOGIN_FORM_SCREEN3),
        );
      } else {
        props.navigation.navigate(Routes.INTRO_SCREEN3);
      }
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    setTimeout(() => {
      isLoggin();
    }, 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <View style={{flex: 1, backgroundColor: 'white'}} />;
};
