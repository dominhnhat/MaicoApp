import React from 'react';
import {
  Platform,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
  ViewPropTypes,
} from 'react-native';
import {Header} from 'react-native-elements';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AppConfig from '../../../../branding/App_config';
import {useTheme} from '@react-navigation/native';
import {commonDarkStyles} from '../../../../branding/carter/styles/dark/Style';
import {commonLightStyles} from '../../../../branding/carter/styles/light/Style';
import {SvgIcon} from '../SvgIcon/View';
import IconNames from '../../../../branding/carter/assets/IconNames';
import Routes from '../../../navigation/Routes';

const PropTypes = require('prop-types');

const fonts = AppConfig.fonts.default;
const lightColors = AppConfig.lightColors.default;
const Typography = AppConfig.typography.default;

const AppHeader = props => {
  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();

  const overrideTheme = props.overrideTheme || false;

  const globalStyles = overrideTheme
    ? overrideTheme === 'dark'
      ? commonDarkStyles(colors)
      : commonLightStyles(lightColors)
    : scheme === 'dark'
    ? commonDarkStyles(colors)
    : commonLightStyles(colors);

  //Props
  const navigation = props.navigation || '';
  const title = props.title || 'Title';
  const transparentHeader = props.transparentHeader || false;
  const headerWithBack = props.headerWithBack || false;
  const darkIcons = props.darkIcons || false;
  const headerWithBackground = props.headerWithBackground || false;
  const rightIcon = props.rightIcon || '';
  const isTranslucent = props.isTranslucent || false;
  const headerIconStyle =
    props.headerIconStyle || globalStyles.headerStyles.headerIconStyle;
  const headerIconContainerStyle =
    props.headerIconContainerStyle ||
    globalStyles.headerStyles.headerIconContainerStyle;
  const centerContainerStyle =
    props.centerContainerStyle ||
    globalStyles.headerStyles.centerContainerStyle;
  const onRightIconPress = props.onRightIconPress || (() => {});
  const containerStyle =
    props.containerStyle || globalStyles.headerStyles.containerStyle;
  const containerShadow =
    props.containerShadow || globalStyles.headerStyles.headerShadowStyle;

  const transparentContainerStyle =
    globalStyles.headerStyles.transparentContainerStyle;

  const bottomMargin = props.bottomMargin || {
    marginBottom: hp('2'),
    borderBottomWidth: 0,
  };

  return (
    <Header
      leftComponent={
        headerWithBack && (
          <TouchableWithoutFeedback
            onPress={() => {
              try {
                navigation.goBack();
              } catch (e) {
                navigation.navigate(Routes.LOGIN_FORM_SCREEN3);
              }
            }}>
            <View style={headerIconContainerStyle}>
              <SvgIcon
                style={{}}
                color={
                  overrideTheme
                    ? overrideTheme === 'dark'
                      ? colors.headerPrimaryColor
                      : lightColors.headerPrimaryColor
                    : darkIcons || headerWithBackground
                    ? colors.headerPrimaryColor
                    : colors.white
                }
                width={25}
                height={25}
                type={IconNames.ArrowLeft}
              />
            </View>
          </TouchableWithoutFeedback>
        )
      }
      centerComponent={{
        text: title,
        style: {
          color: overrideTheme
            ? overrideTheme === 'dark'
              ? colors.headerPrimaryColor
              : lightColors.headerPrimaryColor
            : darkIcons || headerWithBackground
            ? colors.headerPrimaryColor
            : colors.white,
          fontFamily: fonts.RUBIK_MEDIUM,
          fontSize: Typography.P1,
        },
      }}
      centerContainerStyle={centerContainerStyle}
      rightComponent={
        rightIcon !== '' && (
          <TouchableWithoutFeedback
            onPress={() => {
              onRightIconPress();
            }}>
            <View style={headerIconContainerStyle}>
              <SvgIcon
                style={{}}
                color={
                  overrideTheme
                    ? overrideTheme === 'dark'
                      ? colors.headerPrimaryColor
                      : lightColors.headerPrimaryColor
                    : darkIcons || headerWithBackground
                    ? colors.headerPrimaryColor
                    : colors.white
                }
                width={20}
                height={20}
                type={rightIcon}
              />
            </View>
          </TouchableWithoutFeedback>
        )
      }
      statusBarProps={{translucent: true}}
      containerStyle={[
        !transparentHeader && containerShadow,
        headerWithBackground && containerStyle,
        transparentHeader && transparentContainerStyle,
        bottomMargin,
        Platform.select({
          android: Platform.Version <= 20 ? {paddingTop: 0, height: 56} : {},
        }),
      ]}
    />
  );
};

AppHeader.propTypes = {
  navigation: PropTypes.any,
  containerStyle: ViewPropTypes.style,

  title: PropTypes.string,
  headerWithBack: PropTypes.bool,
  transparentHeader: PropTypes.bool,
  darkIcons: PropTypes.bool,
  headerWithBackground: PropTypes.bool,
  isTranslucent: PropTypes.bool,

  rightIcon: PropTypes.string,
  onRightIconPress: PropTypes.func,
  topInset: PropTypes.number,
};

export default AppHeader;
