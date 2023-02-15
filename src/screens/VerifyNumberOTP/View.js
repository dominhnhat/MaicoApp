import React, {useEffect, useState} from 'react';
import {Keyboard, useColorScheme, View} from 'react-native';
import {Text} from 'react-native-elements';
import {Styles} from './Style';
import AppHeader from '../../components/Application/AppHeader/View';
import {StackActions, useTheme} from '@react-navigation/native';
import {commonDarkStyles} from '../../../branding/carter/styles/dark/Style';
import {commonLightStyles} from '../../../branding/carter/styles/light/Style';
import OtpInputs from 'react-native-otp-inputs';
import {FocusAwareStatusBar} from '../../components/Application/FocusAwareStatusBar/FocusAwareStatusBar';
import Routes from '../../navigation/Routes';
import {
  verifyOtp,
  getUserByPhone,
  loginWithOtp,
} from '../../services/user-services';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
export const VerifyPhoneOTP = props => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const globalStyles =
    scheme === 'dark' ? commonDarkStyles(colors) : commonLightStyles(colors);
  const screenStyles = Styles(globalStyles, colors);
  const Verify = async otp => {
    if (otp && otp.length == 6) {
      const formatPhone = '+84' + props.route.params.phone.replace('0', '');
      const res = await verifyOtp(formatPhone, otp);
      if (!res.error) {
        await getUser();
      }
    } else {
      Toast.show({
        type: 'error',
        text1: 'Lỗi',
        text2: 'Vui lòng xác nhận lại mã OTP',
      });
    }
  };
  const getUser = async () => {
    const queryData = await getUserByPhone(props.route.params.phone);
    if (queryData && queryData.length > 0) {
      try {
        await AsyncStorage.setItem('@user', JSON.stringify(queryData[0]));
      } catch (e) {
        // saving error
      }
      props.navigation.navigate(Routes.HOME_VARIANT3);
    }
  };
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      event => {
        setKeyboardHeight(event.endCoordinates.height);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardHeight(0);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <View style={screenStyles.container}>
      <FocusAwareStatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <AppHeader
        navigation={props.navigation}
        transparentHeader
        isTranslucent
        darkIcons
        headerWithBack
        title={'Verify Number'}
      />

      <View style={screenStyles.mainContainer}>
        <Text style={screenStyles.titleText}>{'Verify your Number'}</Text>

        <Text style={screenStyles.subtitleText}>
          {'Enter your OTP code below.'}
        </Text>

        <View style={screenStyles.otpInputMainContainer}>
          <OtpInputs
            autoFocus
            clearTextOnFocus
            blurOnSubmit={false}
            handleChange={code => {
              if (code.length === 6) {
                Verify(code);
              }
            }}
            numberOfInputs={6}
            inputStyles={screenStyles.otpInput}
          />
        </View>

        {/*<ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: "flex-end", bottom: keyboardHeight}}>*/}
        <View style={screenStyles.didntReceivedContainer}>
          <Text style={screenStyles.didntReceivedText}>
            {"Didn't receive the code?"}
          </Text>
          <Text
            style={screenStyles.resendText}
            onPress={async () => {
              await loginWithOtp(
                '+84' + props.route.params.phone.replace('0', ''),
              );
            }}>
            {'Resend a new Code.'}
          </Text>
        </View>
        {/*</ScrollView>*/}
      </View>
    </View>
  );
};
