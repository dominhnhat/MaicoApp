import React, {useRef, useState} from 'react';
import {useColorScheme, View} from 'react-native';
import {Button, Image, Text} from 'react-native-elements';
import AppConfig from '../../../../branding/App_config';
import {Styles} from './Style';
import AppHeader from '../../../components/Application/AppHeader/View';
import AppInput from '../../../components/Application/AppInput/View';
import Routes from '../../../navigation/Routes';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import AppButton from '../../../components/Application/AppButton/View';
import {useTheme} from '@react-navigation/native';
import {commonDarkStyles} from '../../../../branding/carter/styles/dark/Style';
import {commonLightStyles} from '../../../../branding/carter/styles/light/Style';
import IconNames from '../../../../branding/carter/assets/IconNames';
import {FocusAwareStatusBar} from '../../../components/Application/FocusAwareStatusBar/FocusAwareStatusBar';

const assets = AppConfig.assets.default;

export const Variant1SignupScreen = props => {
  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const globalStyles =
    scheme === 'dark' ? commonDarkStyles(colors) : commonLightStyles(colors);
  const screenStyles = Styles(globalStyles, colors);

  //Internal States
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  //References
  let inputRef = useRef();

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps={'never'}
      getTextInputRefs={() => {
        return [inputRef];
      }}
      style={screenStyles.scrollViewContainer}
      contentContainerStyle={screenStyles.scrollViewContentContainer}
      showsVerticalScrollIndicator={false}>
      <View style={screenStyles.container}>
        <FocusAwareStatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />

        <View style={screenStyles.headerContainer}>
          <Image
            source={assets.signup_form_header1}
            style={screenStyles.headerImage}
          />
        </View>

        <AppHeader
          isTranslucent
          navigation={props.navigation}
          transparentHeader
          headerWithBack
          title={'Signup'}
        />

        <View style={[screenStyles.bottomContainer]}>
          <Text style={screenStyles.titleText}>{'Create Account!'}</Text>

          <Text style={screenStyles.subtitleText}>
            {'Quickly create account'}
          </Text>

          <AppInput
            {...globalStyles.secondaryInputStyle}
            textInputRef={r => (inputRef = r)}
            leftIcon={IconNames.Envelope}
            placeholder={'Email Address'}
            value={email}
            keyboardType={'email-address'}
            onChangeText={email => {
              setEmail(email);
            }}
          />

          <AppInput
            {...globalStyles.secondaryInputStyle}
            textInputRef={r => (inputRef = r)}
            leftIcon={IconNames.PhoneFlip}
            placeholder={'Phone'}
            value={phone}
            keyboardType={'phone-pad'}
            onChangeText={phone => {
              setPhone(phone);
            }}
          />

          <AppInput
            {...globalStyles.secondaryInputStyle}
            containerStyle={screenStyles.passwordInputContainer}
            textInputRef={r => (inputRef = r)}
            isPasswordField
            leftIcon={IconNames.LockKeyhole}
            placeholder={'Password'}
            value={password}
            onChangeText={password => {
              setPassword(password);
            }}
          />

          <AppButton
            title={'Signup'}
            onPress={() => {
              props.navigation.navigate(Routes.LOGIN_FORM_SCREEN1);
            }}
          />

          <View style={screenStyles.accountBottomContainer}>
            <Text style={screenStyles.accountText}>
              {'Already have an account?'}
            </Text>
            <Button
              title={'Login'}
              type={'clear'}
              titleStyle={screenStyles.loginButton}
              onPress={() => props.navigation.goBack()}
            />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
