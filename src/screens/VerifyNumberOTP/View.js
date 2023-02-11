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

export const VerifyPhoneOTP = props => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const globalStyles =
    scheme === 'dark' ? commonDarkStyles(colors) : commonLightStyles(colors);
  const screenStyles = Styles(globalStyles, colors);

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
                props.navigation.dispatch(StackActions.pop(2));
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
          <Text style={screenStyles.resendText}>{'Resend a new Code.'}</Text>
        </View>
        {/*</ScrollView>*/}
      </View>
    </View>
  );
};
