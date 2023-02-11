import React, {useRef, useState} from 'react';
import {useColorScheme, View} from 'react-native';

import {Text} from 'react-native-elements';
import {Styles} from './Style';
import {useTheme} from '@react-navigation/native';
import AppInput from '../AppInput/View';
import IconNames from '../../../../branding/carter/assets/IconNames';
import {CustomSwitch} from '../../Global/CustomSwitch/View';

export const AddressContentItem = props => {
  //References
  let inputRef = useRef();

  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const itemStyles = Styles(scheme, colors);

  //Internal states
  const [name, setName] = useState(props.data.name);
  const [address, setAddress] = useState(props.data.address);
  const [city, setCity] = useState(props.data.city);
  const [zipCode, setZipCode] = useState(props.data.postalCode);
  const [country, setCountry] = useState(props.data.state);
  const [phone, setPhone] = useState(props.data.phone);

  return (
    <View style={itemStyles.contentContainer}>
      <AppInput
        textInputRef={r => (inputRef = r)}
        leftIcon={IconNames.CircleUser}
        placeholder={'Name'}
        value={name}
        onChangeText={name => {
          setName(name);
        }}
      />

      <AppInput
        textInputRef={r => (inputRef = r)}
        leftIcon={IconNames.MapMarkerAlt}
        placeholder={'Address'}
        value={address}
        onChangeText={address => {
          setAddress(address);
        }}
      />

      <View style={itemStyles.horizontalInputsContainer}>
        <AppInput
          textInputRef={r => (inputRef = r)}
          leftIcon={IconNames.Map}
          placeholder={'City'}
          containerStyle={itemStyles.horizontalInput}
          value={city}
          onChangeText={city => {
            setCity(city);
          }}
        />

        <AppInput
          textInputRef={r => (inputRef = r)}
          leftIcon={IconNames.Mailbox}
          placeholder={'Zip Code'}
          containerStyle={itemStyles.horizontalInput}
          value={zipCode}
          onChangeText={zipCode => {
            setZipCode(zipCode);
          }}
        />
      </View>

      <AppInput
        textInputRef={r => (inputRef = r)}
        leftIcon={IconNames.Globe}
        placeholder={'Country'}
        value={country}
        onChangeText={country => {
          setCountry(country);
        }}
      />

      <AppInput
        textInputRef={r => (inputRef = r)}
        leftIcon={IconNames.PhoneFlip}
        placeholder={'Phone'}
        value={phone}
        onChangeText={phone => {
          setPhone(phone);
        }}
      />

      <View style={itemStyles.defaultContainer}>
        <CustomSwitch initialValue={false} onValueChange={value => {}} />

        <Text style={itemStyles.defaultText}>{'Make Default'}</Text>
      </View>
    </View>
  );
};
