import React from 'react';
import {TouchableOpacity, useColorScheme, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Styles} from './Style';
import Globals from '../../../utils/Globals';
import {useTheme} from '@react-navigation/native';
import {commonDarkStyles} from '../../../../branding/carter/styles/dark/Style';
import {commonLightStyles} from '../../../../branding/carter/styles/light/Style';
import {SvgIcon} from '../SvgIcon/View';
import IconNames from '../../../../branding/carter/assets/IconNames';

export function Variant3BottomTabBar({state, descriptors, navigation}) {
  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const globalStyles =
    scheme === 'dark' ? commonDarkStyles(colors) : commonLightStyles(colors);
  const screenStyles = Styles(globalStyles, scheme, colors);

  return (
    <View style={screenStyles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        let icon = IconNames.HomeAlt;

        switch (index) {
          case 0:
            icon = IconNames.HomeAlt;
            break;

          case 1:
            icon = IconNames.BoxOpen;
            break;

          case 2:
            icon = IconNames.CircleUser;
            break;

          case 3:
            icon = IconNames.BagShopping;
            break;
        }

        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={onPress}
            style={[
              screenStyles.bottomTabContainer,
              {marginBottom: Globals.SAFE_AREA_INSET.bottom / 2},
            ]}>
            {/*isFocused is selected*/}

            <View
              style={[
                {
                  width: isFocused ? hp(5) : 0,
                  height: isFocused ? hp(5) : 0,
                },
                screenStyles.bottomTabItemContainer,
              ]}>
              <SvgIcon
                type={icon}
                width={25}
                height={25}
                color={
                  isFocused ? colors.activeColor : colors.primaryBackground
                }
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
