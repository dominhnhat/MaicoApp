import React from 'react';
import {useColorScheme, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import Routes from '../../../navigation/Routes';
import {Styles} from './Style';
import AppHeader from '../../../components/Application/AppHeader/View';
import {AppSocialButton} from '../../../components/Application/AppSocialButton/View';
import {useTheme} from '@react-navigation/native';
import {commonDarkStyles} from '../../../../branding/carter/styles/dark/Style';
import {commonLightStyles} from '../../../../branding/carter/styles/light/Style';
import {CircularBanner} from '../../../components/Application/CicularBanner/View';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import IconNames from '../../../../branding/carter/assets/IconNames';
import {FocusAwareStatusBar} from '../../../components/Application/FocusAwareStatusBar/FocusAwareStatusBar';

export const Variant2LoginScreen = props => {
  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const globalStyles =
    scheme === 'dark' ? commonDarkStyles(colors) : commonLightStyles(colors);
  const screenStyles = Styles(globalStyles, scheme, colors);

  return (
    <View style={screenStyles.container}>
      <FocusAwareStatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />

      <AppHeader
        headerWithBackground
        containerStyle={screenStyles.headerContainer}
        containerShadow={{}}
        isTranslucent
        title={'Welcome'}
      />

      <View style={screenStyles.imageContainer}>
        <CircularBanner
          icon={IconNames.BagShopping}
          theme={'green'}
          width={wp(85)}
          height={wp(85)}
        />
      </View>

      <View style={[screenStyles.bottomContainer]}>
        <Text style={screenStyles.titleText}>{'Welcome'}</Text>

        <Text style={screenStyles.subtitleText}>
          {
            "To the world's no. 1 grocery app for Android and iOS. We deliver everything on time."
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
            props.navigation.navigate(Routes.SIGNUP_FORM_SCREEN2);
          }}
          title={'Create an account'}
          icon={IconNames.CircleUser}
          iconColor={colors.buttonColor}
        />

        <View style={[screenStyles.accountBottomContainer]}>
          <Text style={screenStyles.accountText}>
            {'Already have an account?'}
          </Text>

          <Button
            title={'Login'}
            type={'clear'}
            titleStyle={screenStyles.loginButton}
            onPress={() => props.navigation.navigate(Routes.LOGIN_FORM_SCREEN2)}
          />
        </View>
      </View>
    </View>
  );
};
