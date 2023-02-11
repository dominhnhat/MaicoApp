import React from 'react';
import {Text} from 'react-native-elements';
import {TouchableHighlight, useColorScheme, View} from 'react-native';
import {Styles} from './Style';
import {useTheme} from '@react-navigation/native';
import {commonDarkStyles} from '../../../../branding/carter/styles/dark/Style';
import {commonLightStyles} from '../../../../branding/carter/styles/light/Style';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Shadow} from 'react-native-shadow-2';
import {SvgIcon} from '../SvgIcon/View';

export const AppSocialButton = props => {
  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const globalStyles =
    scheme === 'dark' ? commonDarkStyles(colors) : commonLightStyles(colors);
  const itemStyles = Styles(globalStyles, colors);

  //Props
  const {
    icon,
    title,
    onPress,
    containerStyle,
    buttonStyle,
    iconColor,
    titleStyle,
  } = props;

  const primaryShadowStart =
    props.primaryShadowStart || colors.primaryShadowStart;
  const primaryShadowFinal =
    props.primaryShadowFinal || colors.primaryShadowFinal;

  return (
    <Shadow
      viewStyle={{alignSelf: 'stretch'}}
      startColor={primaryShadowStart}
      finalColor={primaryShadowFinal}
      radius={hp(0.75)}
      distance={2}
      offset={[0, 3]}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#bbbbbb"
        style={[containerStyle, {borderRadius: hp(0.75)}]}
        onPress={() => {
          onPress();
        }}>
        <View
          style={[
            globalStyles.primaryButtonStyle,
            itemStyles.container,
            buttonStyle,
          ]}>
          {icon && (
            <SvgIcon
              type={icon}
              width={20}
              height={20}
              color={iconColor}
              style={[itemStyles.icon]}
            />
          )}

          <Text
            style={[
              globalStyles.primaryButtonTextStyle,
              itemStyles.title,
              titleStyle,
            ]}>
            {title}
          </Text>
        </View>
      </TouchableHighlight>
    </Shadow>
  );
};
