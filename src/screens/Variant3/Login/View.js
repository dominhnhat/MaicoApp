import React from 'react';
import {ImageBackground, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import AppConfig from '../../../../branding/App_config';
import Routes from '../../../navigation/Routes';
import {Styles} from './Style';
import AppHeader from '../../../components/Application/AppHeader/View';
import {AppSocialButton} from '../../../components/Application/AppSocialButton/View';
import {useTheme} from '@react-navigation/native';
import {commonDarkStyles} from '../../../../branding/carter/styles/dark/Style';
import {commonLightStyles} from '../../../../branding/carter/styles/light/Style';
import IconNames from '../../../../branding/carter/assets/IconNames';
import {FocusAwareStatusBar} from '../../../components/Application/FocusAwareStatusBar/FocusAwareStatusBar';

const assets = AppConfig.assets.default;
const colors = AppConfig.lightColors.default;

export const Variant3LoginScreen = props => {
  //Theme based styling and colors
  const {scheme} = useTheme();
  const globalStyles =
    scheme === 'dark' ? commonDarkStyles(colors) : commonLightStyles(colors);
  const screenStyles = Styles(globalStyles, scheme, colors);

  return (
    <ImageBackground
      source={assets.login_header3}
      style={screenStyles.container}>
      <FocusAwareStatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="light-content"
      />

      <View style={screenStyles.headerImage} />

      <AppHeader isTranslucent transparentHeader title={'Welcome'} />

      <View style={[screenStyles.bottomContainer]}>
        <Text style={screenStyles.titleText}>{'Welcome'}</Text>

        <Text style={screenStyles.subtitleText}>
          {
            "To the world's no. 1 grocery app for Android and IOS. We deliver everything on time."
          }
        </Text>

        <AppSocialButton
          onPress={() => {}}
          containerStyle={screenStyles.googleLoginButtonContainer}
          buttonStyle={screenStyles.googleLoginButton}
          titleStyle={screenStyles.googleLoginButtonTitle}
          iconStyle={screenStyles.googleLoginIcon}
          title={'Connect using Google'}
          icon={IconNames.Google}
          iconColor={colors.red}
          primaryShadowStart={'transparent'}
          primaryShadowFinal={'transparent'}
        />

        <AppSocialButton
          onPress={() => {
            props.navigation.navigate(Routes.SIGNUP_FORM_SCREEN3);
          }}
          title={'Create an account'}
          icon={IconNames.CircleUser}
          iconColor={colors.buttonColor}
        />

        <View style={[screenStyles.accountBottomContainer, {}]}>
          <Text style={screenStyles.accountText}>
            {'Already have an account?'}
          </Text>
          <Button
            title={'Login'}
            type={'clear'}
            titleStyle={screenStyles.loginButton}
            onPress={() => props.navigation.navigate(Routes.LOGIN_FORM_SCREEN3)}
          />
        </View>
      </View>
    </ImageBackground>
  );
};
