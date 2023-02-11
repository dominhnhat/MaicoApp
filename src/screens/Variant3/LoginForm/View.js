import React, {useRef, useState} from 'react';
import {ImageBackground, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import AppConfig from '../../../../branding/App_config';
import AppInput from '../../../components/Application/AppInput/View';
import Routes from '../../../navigation/Routes';
import {Styles} from './Style';
import {CommonActions, useTheme} from '@react-navigation/native';
import AppHeader from '../../../components/Application/AppHeader/View';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {CustomSwitch} from '../../../components/Global/CustomSwitch/View';
import AppButton from '../../../components/Application/AppButton/View';
import {commonLightStyles} from '../../../../branding/carter/styles/light/Style';
import IconNames from '../../../../branding/carter/assets/IconNames';
import {FocusAwareStatusBar} from '../../../components/Application/FocusAwareStatusBar/FocusAwareStatusBar';

const assets = AppConfig.assets.default;
const lightColors = AppConfig.lightColors.default;

export const Variant3LoginFormScreen = props => {
  //Theme based styling and colors
  const {colors} = useTheme();
  const globalStyles = commonLightStyles(colors);
  const screenStyles = Styles(globalStyles, colors, lightColors);

  //Internal States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //References
  let inputRef = useRef();

  return (
    <ImageBackground
      source={assets.login_form_header3}
      style={screenStyles.mainContainer}
      resizeMode={'cover'}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'never'}
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

          <AppHeader
            overrideTheme={'light'}
            isTranslucent
            navigation={props.navigation}
            transparentHeader
            headerWithBackground
            headerWithBack
            title={'Login'}
          />

          <View style={[screenStyles.bottomContainer]}>
            <Text style={screenStyles.titleText}>{'Welcome Back!'}</Text>

            <Text style={screenStyles.subtitleText}>
              {'Sign in to your account'}
            </Text>

            <View style={screenStyles.contentContainerStyle}>
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
                  <CustomSwitch
                    initialValue={false}
                    onValueChange={value => {}}
                  />
                </View>

                <Text style={screenStyles.accountText}>{'Remember me'}</Text>

                <View style={screenStyles.bottomButtonContainer}>
                  <Button
                    title={'Forgot Password'}
                    type={'clear'}
                    containerStyle={{}}
                    titleStyle={screenStyles.forgotPasswordButton}
                    onPress={() =>
                      props.navigation.navigate(
                        Routes.FORGOT_PASSWORD_FORM_SCREEN3,
                      )
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
                      routes: [{name: Routes.HOME_VARIANT3}],
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
                    props.navigation.navigate(Routes.SIGNUP_FORM_SCREEN3)
                  }
                />
              </View>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};
