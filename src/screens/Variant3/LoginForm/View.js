import React, { useRef, useState } from 'react';
import { ImageBackground, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import AppConfig from '../../../../branding/App_config';
import AppInput from '../../../components/Application/AppInput/View';
import Routes from '../../../navigation/Routes';
import { Styles } from './Style';
import { CommonActions, useTheme } from '@react-navigation/native';
import AppHeader from '../../../components/Application/AppHeader/View';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { CustomSwitch } from '../../../components/Global/CustomSwitch/View';
import AppButton from '../../../components/Application/AppButton/View';
import { commonLightStyles } from '../../../../branding/carter/styles/light/Style';
import IconNames from '../../../../branding/carter/assets/IconNames';
import { FocusAwareStatusBar } from '../../../components/Application/FocusAwareStatusBar/FocusAwareStatusBar';
import {
  getUserByPhone,
  addUser,
  loginWithOtp,
} from '../../../services/user_services';
import Toast from 'react-native-toast-message';
const assets = AppConfig.assets.default;
const lightColors = AppConfig.lightColors.default;

export const Variant3LoginFormScreen = props => {
  //Theme based styling and colors
  const { colors } = useTheme();
  const globalStyles = commonLightStyles(colors);
  const screenStyles = Styles(globalStyles, colors, lightColors);
  //Internal States
  const [phone, setPhone] = useState('');
  const [loading, setLoad] = useState(false);
  //References
  let inputRef = useRef();
  const Login = async () => {
    if (phone && phone.length == 10) {
      setLoad(true);
      const users = await getUserByPhone(phone);
      if (users && users.length == 0) {
        const newUser = await addUser({ phone: phone });
      }
      const formatPhone = '+84' + phone.replace('0', '');
      await loginWithOtp(formatPhone);
      setLoad(false);
      props.navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            { name: Routes.VERIFY_NUMBER_OTP_SCREEN, params: { phone: phone } },
          ],
        }),
      );
    } else {
      Toast.show({
        type: 'error',
        // text1: 'Bạn vừa nhập',
        text2: 'Số điện thoại không hợp lệ',
      });
    }
  };
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
            title={'Đăng Nhập'}
          />

          <View style={[screenStyles.bottomContainer]}>
            <Text style={screenStyles.titleText}>{'Chào mừng trở lại!'}</Text>

            <Text style={screenStyles.subtitleText}>
              {'Nhập số điện thoại để đăng nhập'}
            </Text>

            <View style={screenStyles.contentContainerStyle}>
              <AppInput
                {...globalStyles.secondaryInputStyle}
                textInputRef={r => (inputRef = r)}
                leftIcon={IconNames.PhoneFlip}
                placeholder={'Số điện thoại'}
                value={phone}
                onChangeText={phone => {
                  setPhone(phone);
                }}
              />

              <AppButton
                title={'Đăng nhập'}
                loading={loading}
                onPress={async () => {
                  await Login();
                }}
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};
