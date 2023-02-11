import React from 'react';

import {Text, TouchableOpacity, useColorScheme} from 'react-native';

import {Styles} from './Styles';
import {useTheme} from '@react-navigation/native';
import {commonDarkStyles} from '../../../../branding/carter/styles/dark/Style';
import {commonLightStyles} from '../../../../branding/carter/styles/light/Style';
import {SvgIcon} from '../SvgIcon/View';
import IconNames from '../../../../branding/carter/assets/IconNames';

export const SearchButton = props => {
  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const globalStyles =
    scheme === 'dark' ? commonDarkStyles(colors) : commonLightStyles(colors);
  const screenStyles = Styles(globalStyles, scheme, colors);

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={screenStyles.buttonContainer}>
      <SvgIcon
        type={IconNames.Search}
        width={20}
        height={20}
        color={colors.inputColor}
        style={screenStyles.leftIcon}
      />

      <Text style={screenStyles.Text}>Search keywords...</Text>

      <SvgIcon
        type={IconNames.SlidersH}
        width={20}
        height={20}
        color={colors.inputColor}
        style={screenStyles.rightIcon}
      />
    </TouchableOpacity>
  );
};
