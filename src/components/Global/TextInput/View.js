import React, {useState} from 'react';

import {Input} from 'react-native-elements';
import {TouchableOpacity, ViewPropTypes} from 'react-native';
import AppConfig from '../../../../branding/App_config';
import Style from './Styles';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {SvgIcon} from '../../Application/SvgIcon/View';
import IconNames from '../../../../branding/carter/assets/IconNames';

const PropTypes = require('prop-types');

const colors = AppConfig.lightColors.default;

export const TextInput = props => {
  //Internal states
  const [showObscureText, setShowObscureText] = useState(true);

  //Props
  const {
    placeholderTextColor,
    onChangeText,
    containerStyle,
    disabled,
    disabledInputStyle,
    errorMessage,
    errorStyle,
    errorProps,
    inputComponent,
    inputStyle,
    label,
    labelStyle,
    labelProps,
    leftIcon,
    leftIconContainerStyle,
    value,
    keyboardType,
    textInputRef,
    rightIconSource,
  } = props;

  const placeholder = props.placeholder || 'Text';
  const inputContainerStyle = props.inputContainerStyle || {
    borderBottomWidth: 0,
  };
  const isPasswordField = props.isPasswordField || false;
  const showPassword = props.showPassword || false;
  const rightIconTintColor = props.rightIconTintColor || colors.switchBorder;
  const rightIconContainerStyle = props.rightIconContainerStyle || {
    marginRight: wp(5),
  };
  const rightIconPress = props.rightIconPress || (() => {});

  const getEyeIcon = () => {
    if (showObscureText) {
      return IconNames.EyeSlash;
    } else {
      return IconNames.Eye;
    }
  };

  return (
    <Input
      {...props}
      ref={r => textInputRef(r)}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      onChangeText={text => onChangeText(text)}
      containerStyle={containerStyle}
      disabled={disabled}
      value={value}
      disabledInputStyle={disabledInputStyle}
      inputContainerStyle={inputContainerStyle}
      errorMessage={errorMessage}
      errorStyle={errorStyle}
      errorProps={errorProps}
      inputComponent={inputComponent}
      keyboardType={keyboardType}
      inputStyle={[Style.defaultInputStyles, inputStyle]}
      label={label}
      labelStyle={[labelStyle]}
      labelProps={labelProps}
      leftIcon={leftIcon}
      leftIconContainerStyle={leftIconContainerStyle}
      rightIcon={
        isPasswordField && showPassword ? (
          <TouchableOpacity
            onPress={() =>
              setShowObscureText(showObscureText => {
                return !showObscureText;
              })
            }>
            <SvgIcon
              type={getEyeIcon()}
              width={20}
              height={20}
              color={rightIconTintColor}
            />
          </TouchableOpacity>
        ) : rightIconSource ? (
          <TouchableOpacity
            onPress={() => {
              rightIconPress ? rightIconPress() : {};
            }}>
            <SvgIcon
              type={rightIconSource}
              width={20}
              height={20}
              color={rightIconTintColor}
            />
          </TouchableOpacity>
        ) : null
      }
      secureTextEntry={
        isPasswordField ? (showPassword ? showObscureText : true) : false
      }
      rightIconContainerStyle={rightIconContainerStyle}
    />
  );
};

TextInput.propTypes = {
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,

  containerStyle: ViewPropTypes.style,
  disabled: PropTypes.bool,
  disabledInputStyle: ViewPropTypes.style,
  inputContainerStyle: ViewPropTypes.style,
  errorMessage: PropTypes.string,
  errorStyle: ViewPropTypes.style,
  errorProps: PropTypes.any,
  inputComponent: PropTypes.node,
  inputStyle: ViewPropTypes.style,
  label: PropTypes.any,
  labelStyle: ViewPropTypes.style,
  labelProps: PropTypes.any,
  leftIcon: PropTypes.any,
  leftIconContainerStyle: ViewPropTypes.style,
  rightIconSource: PropTypes.any,
  rightIconPress: PropTypes.func,
  rightIconContainerStyle: ViewPropTypes.style,
  isPasswordField: PropTypes.bool,
  showPassword: PropTypes.bool,
  value: PropTypes.string,
  keyboardType: PropTypes.string,
};
