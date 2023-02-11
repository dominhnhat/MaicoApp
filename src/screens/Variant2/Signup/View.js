import React, {useRef, useState} from 'react';
import {useColorScheme, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {Styles} from './Style';
import AppHeader from '../../../components/Application/AppHeader/View';
import AppInput from '../../../components/Application/AppInput/View';
import Routes from '../../../navigation/Routes';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import AppButton from '../../../components/Application/AppButton/View';
import {useTheme} from '@react-navigation/native';
import {commonDarkStyles} from '../../../../branding/carter/styles/dark/Style';
import {commonLightStyles} from '../../../../branding/carter/styles/light/Style';
import {CircularBanner} from '../../../components/Application/CicularBanner/View';
import IconNames from '../../../../branding/carter/assets/IconNames';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {FocusAwareStatusBar} from '../../../components/Application/FocusAwareStatusBar/FocusAwareStatusBar';

export const Variant2SignupScreen = props => {
  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const globalStyles =
    scheme === 'dark' ? commonDarkStyles(colors) : commonLightStyles(colors);
  const screenStyles = Styles(globalStyles, colors);

  //Internal States
  const [profileImage, setProfileImage] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  //References
  let inputRef = useRef();

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
          backgroundColor={'transparent'}
          barStyle="dark-content"
        />

        <AppHeader
          isTranslucent
          navigation={props.navigation}
          headerWithBack
          containerShadow={{}}
          containerStyle={screenStyles.headerContainer}
          headerWithBackground
          title={'Signup'}
        />

        <View style={screenStyles.imageContainer}>
          <CircularBanner
            icon={IconNames.BagShopping}
            theme={'orange'}
            width={wp(75)}
            height={wp(75)}
          />
        </View>

        <View style={[screenStyles.bottomContainer]}>
          <Text style={screenStyles.titleText}>{'Create Account!'}</Text>

          <Text style={screenStyles.subtitleText}>
            {'Quickly create account'}
          </Text>

          <AppInput
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
              props.navigation.navigate(Routes.LOGIN_FORM_SCREEN2);
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
