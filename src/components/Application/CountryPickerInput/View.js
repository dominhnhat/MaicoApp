import React, {useState} from 'react';
import {TouchableOpacity, useColorScheme, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {commonDarkStyles} from '../../../../branding/carter/styles/dark/Style';
import {commonLightStyles} from '../../../../branding/carter/styles/light/Style';
import AppInput from '../AppInput/View';
import CountryPicker from 'react-native-country-picker-modal';
import {Text} from 'react-native-elements';
import {Styles} from './Styles';
import {SvgIcon} from '../SvgIcon/View';
import IconNames from '../../../../branding/carter/assets/IconNames';

const PropTypes = require('prop-types');

export const CountryPickerInput = props => {
  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const globalStyles =
    scheme === 'dark' ? commonDarkStyles(colors) : commonLightStyles(colors);
  const itemStyles = Styles(globalStyles, scheme, colors);

  //Internal states
  const [countryCode, setCountryCode] = useState('US');
  const [withFilter, setWithFilter] = useState(true);
  const [visible, setVisible] = useState(false);
  const [withFlagButton, setWithFlagButton] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    callingCode: '1',
    name: 'United States',
  });
  const [phone, setPhone] = useState('');

  const onSelect = country => {
    setSelectedCountry(country);
    setVisible(false);
  };

  return (
    <View style={[itemStyles.mainContainer, props.containerStyle]}>
      <TouchableOpacity
        onPress={() => {
          setVisible(true);
        }}
        style={itemStyles.leftContainer}>
        <CountryPicker
          {...{
            countryCode,
            withFilter,
            withFlagButton,
            onSelect,
          }}
          visible={visible}
        />

        <Text style={itemStyles.callingCode}>
          {'+' + selectedCountry.callingCode}
        </Text>

        <SvgIcon
          type={IconNames.ChevronDown}
          width={15}
          height={15}
          color={colors.inputColor}
        />
      </TouchableOpacity>

      <AppInput
        {...props}
        {...globalStyles.secondaryInputStyle}
        containerStyle={itemStyles.inputContainerStyle}
        showLeftIcon={false}
        keyboardType={'number-pad'}
        placeholder={'  Phone'}
        value={phone}
        onChangeText={phone => {
          setPhone(phone);
        }}
      />
    </View>
  );
};

CountryPickerInput.propTypes = {
  title: PropTypes.string,

  buttonStyle: PropTypes.any,

  titleStyle: PropTypes.any,
};
