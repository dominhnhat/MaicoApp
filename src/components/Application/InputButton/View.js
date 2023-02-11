import React from 'react';
import {Text, TouchableOpacity, useColorScheme} from 'react-native';
import {Styles} from './Styles';
import {useTheme} from '@react-navigation/native';
import {commonDarkStyles} from '../../../../branding/carter/styles/dark/Style';
import {commonLightStyles} from '../../../../branding/carter/styles/light/Style';
import {SvgIcon} from '../SvgIcon/View';

export const InputButton = props => {
  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const globalStyles =
    scheme === 'dark' ? commonDarkStyles(colors) : commonLightStyles(colors);

  const itemStyles = Styles(scheme, globalStyles, colors);

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={itemStyles.buttonContainer}>
      <SvgIcon
        type={props.leftIcon}
        width={20}
        height={20}
        color={colors.inputColor}
        style={itemStyles.leftIcon}
      />

      <Text style={itemStyles.Text}>{props.text}</Text>
    </TouchableOpacity>
  );
};
