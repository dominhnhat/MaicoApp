import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AppConfig from '../../../../branding/App_config';

const fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;

export const Styles = function (styles, darkColors, lightColors) {
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
      height: hp('45%'),
      resizeMode: 'contain',
    },

    bottomContainer: {
      flex: 1,
      width: styles.gridWidth3,
      paddingTop: hp('3'),
      marginTop: hp(20),
    },

    contentContainerStyle: {
      // marginTop: hp(5)
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
      marginBottom: hp('3'),
      color: lightColors.subHeadingColor,
      textAlign: 'center',
    },

    forgotPasswordContainer: {
      flexDirection: 'row',
      marginBottom: hp(1),
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
      alignSelf: 'center',
      marginLeft: hp(1),
    },

    signupButton: {
      color: lightColors.headingColor,
      fontFamily: fonts.RUBIK_MEDIUM,
      fontSize: Typography.P4,
    },

    switchContainer: {
      justifyContent: 'center',
    },

    bottomButtonContainer: {
      flex: 1,
      alignItems: 'flex-end',
    },

    forgotPasswordButton: {
      color: lightColors.subHeadingQuaternaryColor,
      fontFamily: fonts.RUBIK_REGULAR,
      fontSize: Typography.P6,
    },
  };
};
