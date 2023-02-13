import React, {useRef, useState, useEffect} from 'react';
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
import {addAddress} from '../../services/user-address-services';
import {getUserId} from '../../services/user-services';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
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
  const [receiver, setReceiver] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStreet] = useState('');
  const [ward, setWard] = useState('');
  const [city, setCity] = useState('');
  const [apartment, setApartment] = useState('');
  const [apartmentNumber, setApartmentNumber] = useState('');

  const [userId, setUserId] = useState(0);
  useEffect(() => {
    getUserId().then(c => {
      setUserId(c);
    });
  }, []);

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
                  placeholder={'Receiver'}
                  value={receiver}
                  onChangeText={receiver => {
                    setReceiver(receiver);
                  }}
                />

                <AppInput
                  textInputRef={r => (inputRef = r)}
                  {...globalStyles.secondaryInputStyle}
                  leftIcon={IconNames.Envelope}
                  placeholder={'Phone'}
                  value={phone}
                  // keyboardType={'email-address'}
                  onChangeText={phone => {
                    setPhone(phone);
                  }}
                />

                <AppInput
                  textInputRef={r => (inputRef = r)}
                  {...globalStyles.secondaryInputStyle}
                  leftIcon={IconNames.PhoneFlip}
                  placeholder={'Street'}
                  value={street}
                  keyboardType={'phone-pad'}
                  onChangeText={street => {
                    setStreet(street);
                  }}
                />

                <AppInput
                  textInputRef={r => (inputRef = r)}
                  {...globalStyles.secondaryInputStyle}
                  leftIcon={IconNames.MapMarkerAlt}
                  placeholder={'Ward'}
                  value={ward}
                  onChangeText={ward => {
                    setWard(ward);
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
                  placeholder={'Apartment'}
                  value={apartment}
                  onChangeText={apartment => {
                    setApartment(apartment);
                  }}
                />

                <AppInput
                  textInputRef={r => (inputRef = r)}
                  {...globalStyles.secondaryInputStyle}
                  leftIcon={IconNames.Mailbox}
                  placeholder={'Apartment Number'}
                  value={apartmentNumber}
                  onChangeText={apartmentNumber => {
                    apartmentNumber(apartmentNumber);
                  }}
                />
                {/* <View style={screenStyles.switchContainer}>
                  <CustomSwitch
                    initialValue={false}
                    onValueChange={value => {}}
                  />

                  <Text style={screenStyles.defaultText}>{'Make Default'}</Text>
                </View> */}
              </View>
            </KeyboardAwareScrollView>

            <View style={screenStyles.bottomButton}>
              <AppButton
                title={'Add Address'}
                onPress={async () => {
                  await addAddress({
                    user_id: userId,
                    receiver,
                    city,
                    ward,
                    street,
                    apartment_name: apartment,
                    apartment_number: apartmentNumber,
                    contact: phone,
                    is_default: false,
                  });
                  Toast.show({
                    type: 'success',
                    text1:'Thành công',
                    text2:'Thêm địa chỉ thành công'
                  })
                }}
              />
            </View>
          </View>
        );
      }}
    />
  );
};
