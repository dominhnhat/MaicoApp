import React, {useRef, useState} from 'react';
import {useColorScheme, View} from 'react-native';
import {Text} from 'react-native-elements';

import BaseView from '../BaseView';
import AppInput from '../../components/Application/AppInput/View';
import AppButton from '../../components/Application/AppButton/View';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {CustomSwitch} from '../../components/Global/CustomSwitch/View';
import {Styles} from './Styles';
import {useTheme} from '@react-navigation/native';
import {commonDarkStyles} from '../../../branding/carter/styles/dark/Style';
import {commonLightStyles} from '../../../branding/carter/styles/light/Style';
import IconNames from '../../../branding/carter/assets/IconNames';

export const AddAddress = props => {
  //Input reference for KeyboardAwareScrollView
  let inputRef = useRef();

  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const screenStyles = Styles(colors);
  const globalStyles =
    scheme === 'dark' ? commonDarkStyles(colors) : commonLightStyles(colors);

  //Internal input field states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  return (
    <BaseView
      navigation={props.navigation}
      title={'Add Address'}
      headerWithBack
      applyBottomSafeArea
      childView={() => {
        return (
          <View style={screenStyles.mainContainer}>
            <KeyboardAwareScrollView
              keyboardShouldPersistTaps={'never'}
              getTextInputRefs={() => {
                return [inputRef];
              }}
              contentContainerStyle={screenStyles.parentContainer}
              showsVerticalScrollIndicator={false}>
              <View style={{}}>
                <AppInput
                  textInputRef={r => (inputRef = r)}
                  {...globalStyles.secondaryInputStyle}
                  leftIcon={IconNames.CircleUser}
                  placeholder={'Name'}
                  value={name}
                  onChangeText={name => {
                    setName(name);
                  }}
                />

                <AppInput
                  textInputRef={r => (inputRef = r)}
                  {...globalStyles.secondaryInputStyle}
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
                  {...globalStyles.secondaryInputStyle}
                  leftIcon={IconNames.PhoneFlip}
                  placeholder={'Phone'}
                  value={phone}
                  keyboardType={'phone-pad'}
                  onChangeText={phone => {
                    setPhone(phone);
                  }}
                />

                <AppInput
                  textInputRef={r => (inputRef = r)}
                  {...globalStyles.secondaryInputStyle}
                  leftIcon={IconNames.MapMarkerAlt}
                  placeholder={'Address'}
                  value={address}
                  onChangeText={address => {
                    setAddress(address);
                  }}
                />

                <AppInput
                  textInputRef={r => (inputRef = r)}
                  {...globalStyles.secondaryInputStyle}
                  leftIcon={IconNames.Mailbox}
                  placeholder={'Zip code'}
                  value={zipCode}
                  onChangeText={zipCode => {
                    setZipCode(zipCode);
                  }}
                />

                <AppInput
                  textInputRef={r => (inputRef = r)}
                  {...globalStyles.secondaryInputStyle}
                  leftIcon={IconNames.Map}
                  placeholder={'City'}
                  value={city}
                  onChangeText={city => {
                    setCity(city);
                  }}
                />

                <AppInput
                  textInputRef={r => (inputRef = r)}
                  {...globalStyles.secondaryInputStyle}
                  leftIcon={IconNames.Globe}
                  placeholder={'Country'}
                  value={country}
                  onChangeText={country => {
                    setCountry(country);
                  }}
                />

                <View style={screenStyles.switchContainer}>
                  <CustomSwitch
                    initialValue={false}
                    onValueChange={value => {}}
                  />

                  <Text style={screenStyles.defaultText}>{'Make Default'}</Text>
                </View>
              </View>
            </KeyboardAwareScrollView>

            <View style={screenStyles.bottomButton}>
              <AppButton
                title={'Add Address'}
                onPress={() => {
                  props.navigation.goBack();
                }}
              />
            </View>
          </View>
        );
      }}
    />
  );
};
