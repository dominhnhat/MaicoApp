import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AppConfig from '../../../../branding/App_config';

const fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;

export const Styles = function (styles, scheme, colors) {
  return {
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: scheme
        ? colors.primaryBackground
        : colors.secondaryBackground,
    },

    headerImage: {
      flex: 1,
    },

    bottomContainer: {
      width: styles.gridWidth3,
      paddingVertical: hp('3'),
    },

    titleText: {
      fontFamily: fonts.RUBIK_MEDIUM,
      fontSize: Typography.H8,
      marginBottom: hp('0.8'),
      color: colors.headingColor,
    },

    subtitleText: {
      fontFamily: fonts.RUBIK_REGULAR,
      fontSize: Typography.P4,
      lineHeight: Typography.H8,
      marginBottom: hp('1.6'),
      color: colors.subHeadingColor,
    },

    accountBottomContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },

    accountText: {
      fontFamily: fonts.RUBIK_REGULAR,
      fontSize: Typography.P5,
      color: colors.subHeadingColor,
    },

    loginButton: {
      color: colors.headingColor,
      fontFamily: fonts.RUBIK_MEDIUM,
      fontSize: Typography.P4,
    },

    googleLoginButtonContainer: {
      marginBottom: hp(1),
    },

    googleLoginButton: {
      backgroundColor: colors.primaryBackground,
    },

    googleLoginButtonTitle: {
      color: colors.subHeadingColor,
    },

    googleLoginIcon: {
      tintColor: colors.red,
    },
  };
};
