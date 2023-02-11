import React from 'react';
import {View} from 'react-native';
import {SvgIcon} from '../SvgIcon/View';
import {useTheme} from '@react-navigation/native';

export const CircularBanner = props => {
  const {colors} = useTheme();

  //Props
  const {theme, icon, width, height} = props;

  let primary, secondary, tertiary;

  if (theme === 'green') {
    primary = colors.bannerGreenPrimary;
    secondary = colors.bannerGreenSecondary;
    tertiary = colors.bannerGreenTertiary;
  } else if (theme === 'red') {
    primary = colors.bannerRedPrimary;
    secondary = colors.bannerRedSecondary;
    tertiary = colors.bannerRedTertiary;
  } else if (theme === 'blue') {
    primary = colors.bannerBluePrimary;
    secondary = colors.bannerBlueSecondary;
    tertiary = colors.bannerBlueTertiary;
  } else {
    primary = colors.bannerOrangePrimary;
    secondary = colors.bannerOrangeSecondary;
    tertiary = colors.bannerOrangeTertiary;
  }

  return (
    <View
      style={{
        width: width,
        height: height,
        borderRadius: width / 2,
        backgroundColor: tertiary,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: width - 80,
          height: height - 80,
          borderRadius: (width - 80) / 2,
          backgroundColor: secondary,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: width - 160,
            height: height - 160,
            borderRadius: (width - 160) / 2,
            backgroundColor: primary,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <SvgIcon
            width={width / 4}
            height={height / 4}
            type={icon}
            color={'white'}
          />
        </View>
      </View>
    </View>
  );
};
