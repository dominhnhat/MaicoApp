import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AppConfig from '../../../../branding/App_config';

const fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;

export const Styles = function (scheme, styles, darkColors, lightColors) {
  return {
    mainContainer: {
      flex: 1,
    },

    container: {
      flex: 1,
      alignItems: 'center',
    },

    headerImage: {
      width: wp('65%'),
      height: hp('40%'),
      resizeMode: 'contain',
    },

    bottomContainer: {
      flex: 1,
      width: styles.gridWidth3,
      paddingTop: hp('3'),
      marginTop: hp(12),
    },

    profileImageContainer: {
      alignSelf: 'center',
      marginBottom: hp(5),
    },

    profileImage: {
      width: hp('14'),
      height: hp('14'),
      borderRadius: hp('7'),
      resizeMode: 'cover',
    },

    profileImageAccessoryViewContainer: {
      width: hp('5'),
      height: hp('5'),
      backgroundColor:
        scheme === 'dark'
          ? darkColors.secondaryBackground
          : lightColors.primaryBackground,
      borderRadius: hp('2.5'),
      shadowColor: lightColors.inactiveColor,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: hp(9.5),
      left: hp(9.5),
    },

    profileImageAccessoryViewImage: {
      width: hp('2.5'),
      height: hp('2.5'),
      resizeMode: 'contain',
      tintColor: lightColors.activeColor,
    },

    titleText: {
      fontFamily: fonts.RUBIK_MEDIUM,
      fontSize: Typography.H8,
      marginBottom: hp('0.5'),
      color: lightColors.headingColor,
      textAlign: 'center',
    },

    subtitleText: {
      fontFamily: fonts.RUBIK_REGULAR,
      fontSize: Typography.P4,
      lineHeight: Typography.H8,
      marginBottom: hp('3'),
      color: lightColors.subHeadingColor,
      textAlign: 'center',
    },

    accountBottomContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },

    accountText: {
      fontFamily: fonts.RUBIK_REGULAR,
      fontSize: Typography.P5,
      color: lightColors.subHeadingColor,
    },

    passwordInputContainer: {
      marginBottom: hp(1),
    },

    loginButton: {
      color: lightColors.headingColor,
      fontFamily: fonts.RUBIK_MEDIUM,
      fontSize: Typography.P4,
    },
  };
};
