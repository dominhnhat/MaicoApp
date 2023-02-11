import React, {useRef, useState} from 'react';
import {useColorScheme, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import AppInput from '../../../components/Application/AppInput/View';
import Routes from '../../../navigation/Routes';
import {Styles} from './Style';
import {CommonActions, useTheme} from '@react-navigation/native';
import AppHeader from '../../../components/Application/AppHeader/View';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {CustomSwitch} from '../../../components/Global/CustomSwitch/View';
import AppButton from '../../../components/Application/AppButton/View';
import {commonDarkStyles} from '../../../../branding/carter/styles/dark/Style';
import {commonLightStyles} from '../../../../branding/carter/styles/light/Style';
import {CircularBanner} from '../../../components/Application/CicularBanner/View';
import IconNames from '../../../../branding/carter/assets/IconNames';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {FocusAwareStatusBar} from '../../../components/Application/FocusAwareStatusBar/FocusAwareStatusBar';

export const Variant2LoginFormScreen = props => {
  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const globalStyles =
    scheme === 'dark' ? commonDarkStyles(colors) : commonLightStyles(colors);
  const screenStyles = Styles(globalStyles, colors);

  //Internal States
  const [email, setEmail] = useState('');
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
          navigation={props.navigation}
          isTranslucent
          headerWithBack
          containerStyle={screenStyles.headerContainer}
          containerShadow={{}}
          headerWithBackground
          title={'Login'}
        />

        <View style={screenStyles.imageContainer}>
          <CircularBanner
            icon={IconNames.Key}
            theme={'blue'}
            width={wp(75)}
            height={wp(75)}
          />
        </View>

        <View style={[screenStyles.bottomContainer]}>
          <Text style={screenStyles.titleText}>{'Welcome Back!'}</Text>

          <Text style={screenStyles.subtitleText}>
            {'Sign in to your account'}
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
            isPasswordField
            leftIcon={IconNames.LockKeyhole}
            placeholder={'Password'}
            value={password}
            onChangeText={password => {
              setPassword(password);
            }}
          />

          <View style={screenStyles.forgotPasswordContainer}>
            <View style={screenStyles.switchContainer}>
              <CustomSwitch initialValue={false} onValueChange={value => {}} />
            </View>

            <Text style={screenStyles.accountText}>{'Remember me'}</Text>

            <View style={screenStyles.bottomButtonContainer}>
              <Button
                title={'Forgot Password'}
                type={'clear'}
                containerStyle={{}}
                titleStyle={screenStyles.forgotPasswordButton}
                onPress={() =>
                  props.navigation.navigate(Routes.FORGOT_PASSWORD_FORM_SCREEN2)
                }
              />
            </View>
          </View>

          <AppButton
            title={'Login'}
            onPress={() => {
              props.navigation.dispatch(
                CommonActions.reset({
                  index: 1,
                  routes: [{name: Routes.HOME_VARIANT2}],
                }),
              );
            }}
          />

          <View style={screenStyles.accountBottomContainer}>
            <Text style={screenStyles.accountText}>
              {"Don't have an account?"}
            </Text>
            <Button
              title={'Signup'}
              type={'clear'}
              titleStyle={screenStyles.signupButton}
              onPress={() =>
                props.navigation.navigate(Routes.SIGNUP_FORM_SCREEN2)
              }
            />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
