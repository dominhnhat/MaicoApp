import React, {useRef, useState} from 'react';
import {useColorScheme, View} from 'react-native';

import BaseView from '../BaseView';
import {Text} from 'react-native-elements';
import {Styles} from './Styles';
import AppInput from '../../components/Application/AppInput/View';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import AppButton from '../../components/Application/AppButton/View';
import {useTheme} from '@react-navigation/native';
import {commonDarkStyles} from '../../../branding/carter/styles/dark/Style';
import {commonLightStyles} from '../../../branding/carter/styles/light/Style';
import IconNames from '../../../branding/carter/assets/IconNames';

export const AboutMe = props => {
  //Input reference for KeyboardAwareScrollView
  let inputRef = useRef();

  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const globalStyles =
    scheme === 'dark' ? commonDarkStyles(colors) : commonLightStyles(colors);
  const screenStyles = Styles(colors);

  //Internal input field states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <BaseView
      navigation={props.navigation}
      title={'About Me'}
      headerWithBack
      applyBottomSafeArea
      childView={() => {
        return (
          <View style={screenStyles.mainContainer}>
            <KeyboardAwareScrollView
              keyboardShouldPersistTaps={'never'}
              style={screenStyles.upperContainer}
              getTextInputRefs={() => {
                return [inputRef];
              }}
              showsVerticalScrollIndicator={false}>
              <View style={screenStyles.upperContainer}>
                <Text style={screenStyles.typeHeader}>
                  {'Personal Details'}
                </Text>

                <AppInput
                  {...globalStyles.secondaryInputStyle}
                  textInputRef={r => (inputRef = r)}
                  leftIcon={IconNames.CircleUser}
                  placeholder={'Name'}
                  value={name}
                  onChangeText={name => {
                    setName(name);
                  }}
                />

                <AppInput
                  {...globalStyles.secondaryInputStyle}
                  textInputRef={r => (inputRef = r)}
                  leftIcon={IconNames.Envelope}
                  placeholder={'Email Address'}
                  value={email}
                  onChangeText={email => {
                    setEmail(email);
                  }}
                  keyboardType={'email-address'}
                />

                <AppInput
                  {...globalStyles.secondaryInputStyle}
                  textInputRef={r => (inputRef = r)}
                  leftIcon={IconNames.PhoneFlip}
                  placeholder={'Phone'}
                  value={phone}
                  onChangeText={phone => {
                    setPhone(phone);
                  }}
                  keyboardType={'phone-pad'}
                />

                <Text style={screenStyles.typeHeader}>{'Change Password'}</Text>

                <AppInput
                  {...globalStyles.secondaryInputStyle}
                  textInputRef={r => (inputRef = r)}
                  leftIcon={IconNames.LockKeyhole}
                  placeholder={'Current Password'}
                  isPasswordField
                  value={currentPassword}
                  onChangeText={currentPassword => {
                    setCurrentPassword(currentPassword);
                  }}
                />

                <AppInput
                  {...globalStyles.secondaryInputStyle}
                  textInputRef={r => (inputRef = r)}
                  leftIcon={IconNames.LockKeyhole}
                  placeholder={'Password'}
                  isPasswordField
                  value={newPassword}
                  onChangeText={newPassword => {
                    setNewPassword(newPassword);
                  }}
                />

                <AppInput
                  {...globalStyles.secondaryInputStyle}
                  textInputRef={r => (inputRef = r)}
                  leftIcon={IconNames.LockKeyhole}
                  placeholder={'Confirm Password'}
                  isPasswordField
                  value={confirmPassword}
                  onChangeText={confirmPassword => {
                    setConfirmPassword(confirmPassword);
                  }}
                />
              </View>
            </KeyboardAwareScrollView>

            <View style={screenStyles.bottomButton}>
              <AppButton title={'Save Changes'} onPress={() => {}} />
            </View>
          </View>
        );
      }}
    />
  );
};
