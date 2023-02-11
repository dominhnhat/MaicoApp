import React, {useEffect, useRef, useState} from 'react';
import {useColorScheme, View} from 'react-native';
import {Text} from 'react-native-elements';
import {Styles} from './Style';
import AppHeader from '../../components/Application/AppHeader/View';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import AppButton from '../../components/Application/AppButton/View';
import {useTheme} from '@react-navigation/native';
import {commonDarkStyles} from '../../../branding/carter/styles/dark/Style';
import {commonLightStyles} from '../../../branding/carter/styles/light/Style';
import {CountryPickerInput} from '../../components/Application/CountryPickerInput/View';
import Routes from '../../navigation/Routes';
import {FocusAwareStatusBar} from '../../components/Application/FocusAwareStatusBar/FocusAwareStatusBar';

export const VerifyPhone = props => {
  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const globalStyles =
    scheme === 'dark' ? commonDarkStyles(colors) : commonLightStyles(colors);
  const screenStyles = Styles(globalStyles, colors);

  //Internal States
  const [counterCode, setCounterCode] = useState(59);

  //References
  let inputRef = useRef();
  let counterCodeIntervalRef = useRef();

  useEffect(() => {
    counterCodeIntervalRef.current = setInterval(() => {
      setCounterCode(counterCode => counterCode - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (counterCode === 1) {
      return () => clearInterval(counterCodeIntervalRef.current);
    }
  }, [counterCode]);

  useEffect(() => {
    return () => {
      if (counterCode === 1) {
        return () => clearInterval(counterCodeIntervalRef.current);
      }
    };
  });

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps={'never'}
      style={screenStyles.scrollViewContainer}
      contentContainerStyle={screenStyles.scrollViewContentContainer}
      getTextInputRefs={() => {
        return [inputRef];
      }}
      showsVerticalScrollIndicator={false}>
      <View style={screenStyles.container}>
        <FocusAwareStatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />

        {/*<View style={screenStyles.headerContainer}>*/}
        {/*  <Image source={assets.signup_form_header1} style={screenStyles.headerImage}/>*/}
        {/*</View>*/}

        <AppHeader
          isTranslucent
          navigation={props.navigation}
          transparentHeader
          darkIcons
          headerWithBack
          title={'Verification'}
        />

        <View style={[screenStyles.bottomContainer]}>
          <Text style={screenStyles.titleText}>{'Verify your Number'}</Text>

          <Text style={screenStyles.subtitleText}>
            {'We have sent you SMS with a code to your number.'}
          </Text>

          <CountryPickerInput
            containerStyle={screenStyles.countryPickerInputContainer}
            textInputRef={r => (inputRef = r)}
          />

          <AppButton
            title={'Next'}
            onPress={() => {
              props.navigation.navigate(Routes.VERIFY_NUMBER_OTP_SCREEN);
            }}
          />

          <Text
            style={[screenStyles.subtitleText, screenStyles.confirmationCode]}>
            {'Resent confirmation code (0:' + counterCode + ')'}
          </Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
