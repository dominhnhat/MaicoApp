import React from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {TextInput} from '../../Global/TextInput/View';
import {useColorScheme} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {commonDarkStyles} from '../../../../branding/carter/styles/dark/Style';
import {commonLightStyles} from '../../../../branding/carter/styles/light/Style';
import {SvgIcon} from '../SvgIcon/View';

const PropTypes = require('prop-types');

const AppInput = props => {
  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const globalStyles =
    scheme === 'dark' ? commonDarkStyles(colors) : commonLightStyles(colors);

  //Props
  const textInputRef = props.textInputRef || '';
  const placeholder = props.placeholder || 'Text';
  const placeholderTextColor =
    props.placeholderTextColor ||
    globalStyles.primaryInputStyle.placeholderTextColor;
  const onChangeText = props.onChangeText || (() => {});
  const leftIcon = props.leftIcon || '';
  const leftIconColor =
    props.iconColor || globalStyles.primaryInputStyle.iconColor;
  const isPasswordField = props.isPasswordField || false;
  const backgroundColor =
    props.backgroundColor || globalStyles.primaryInputStyle.backgroundColor;
  const value = props.value || '';
  const multilineInput = props.multilineInput || false;
  const keyboardType = props.keyboardType || 'default';
  const defaultContainerStyle =
    props.defaultContainerStyle ||
    globalStyles.primaryInputStyle.defaultContainerStyle;
  const containerStyle =
    props.containerStyle || globalStyles.primaryInputStyle.containerStyle;
  const leftIconContainerStyle =
    props.leftIconContainerStyle ||
    globalStyles.primaryInputStyle.leftIconContainerStyle;
  const multilineInputHeight = props.multilineInputHeight || {height: hp(30)};
  const showLeftIcon =
    props.showLeftIcon !== undefined ? props.showLeftIcon : true;

  return (
    <TextInput
      {...props}
      textInputRef={textInputRef}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      leftIcon={
        showLeftIcon ? (
          <SvgIcon
            type={leftIcon}
            width={20}
            height={20}
            color={leftIconColor}
          />
        ) : null
      }
      containerStyle={[
        {
          backgroundColor: backgroundColor,
        },
        defaultContainerStyle,
        containerStyle,
        multilineInput && multilineInputHeight,
      ]}
      leftIconContainerStyle={leftIconContainerStyle}
      rightIconTintColor={leftIconColor}
      onChangeText={value => {
        onChangeText(value);
      }}
      value={value}
      keyboardType={keyboardType}
      showPassword={isPasswordField}
      isPasswordField={isPasswordField}
    />
  );
};

AppInput.propTypes = {
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,

  value: PropTypes.string,
  containerStyle: PropTypes.any,

  showLeftIcon: PropTypes.bool,
  leftIcon: PropTypes.string,
  leftIconColor: PropTypes.string,

  backgroundColor: PropTypes.string,

  onChangeText: PropTypes.func.isRequired,

  isPasswordField: PropTypes.bool,

  multilineInput: PropTypes.bool,

  keyboardType: PropTypes.string,
};

export default AppInput;
