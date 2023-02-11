import React, {useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {Button, Text} from 'react-native-elements';
import AppConfig from '../../../../branding/App_config';
import {Styles} from './Style';
import AppHeader from '../../../components/Application/AppHeader/View';
import AppInput from '../../../components/Application/AppInput/View';
import Routes from '../../../navigation/Routes';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import AppButton from '../../../components/Application/AppButton/View';
import {useTheme} from '@react-navigation/native';
import {commonLightStyles} from '../../../../branding/carter/styles/light/Style';
import Utilities from '../../../utils/UtilityMethods';
import {SvgIcon} from '../../../components/Application/SvgIcon/View';
import IconNames from '../../../../branding/carter/assets/IconNames';
import {FocusAwareStatusBar} from '../../../components/Application/FocusAwareStatusBar/FocusAwareStatusBar';

const assets = AppConfig.assets.default;
const lightColors = AppConfig.lightColors.default;

export const Variant3SignupScreen = props => {
  //Theme based styling and colors
  const {colors} = useTheme();
  const scheme = useColorScheme();
  const globalStyles = commonLightStyles(colors);
  const screenStyles = Styles(scheme, globalStyles, colors, lightColors);

  //Internal States
  const [profileImage, setProfileImage] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  //References
  let inputRef = useRef();

  return (
    <ImageBackground
      source={assets.signup_form_header3}
      style={screenStyles.mainContainer}
      resizeMode={'cover'}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'never'}
        getTextInputRefs={() => {
          return [inputRef];
        }}
        showsVerticalScrollIndicator={false}>
        <FocusAwareStatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />

        <View style={screenStyles.container}>
          <AppHeader
            overrideTheme={'light'}
            isTranslucent
            navigation={props.navigation}
            transparentHeader
            headerWithBackground
            headerWithBack
            title={'Signup'}
          />

          <View style={[screenStyles.bottomContainer]}>
            <View style={screenStyles.profileImageContainer}>
              <Image
                source={
                  profileImage ? {uri: profileImage.uri} : assets.profile_image
                }
                style={screenStyles.profileImage}
              />

              <TouchableOpacity
                onPress={() => {
                  Utilities.selectImage(response => {
                    setProfileImage(response);
                  });
                }}
                activeOpacity={0.8}
                style={[
                  globalStyles.buttonShadow,
                  screenStyles.profileImageAccessoryViewContainer,
                ]}>
                <SvgIcon
                  type={'camera'}
                  width={20}
                  height={20}
                  color={colors.activeColor}
                />
              </TouchableOpacity>
            </View>

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
                props.navigation.navigate(Routes.LOGIN_FORM_SCREEN3);
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
    </ImageBackground>
  );
};
