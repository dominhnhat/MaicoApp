import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AppConfig from '../../../branding/App_config';

const fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;

export const Styles = function (styles, colors) {
  return {
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: colors.secondaryBackground,
    },

    mainContainer: {
      flex: 1,
      width: styles.gridWidth3,
      marginVertical: hp(3),
      alignItems: 'center',
      justifyContent: 'center',
    },

    titleText: {
      fontFamily: fonts.RUBIK_MEDIUM,
      fontSize: Typography.H8,
      marginBottom: hp('0.5'),
      color: colors.headingColor,
    },

    subtitleText: {
      fontFamily: fonts.RUBIK_REGULAR,
      fontSize: Typography.P4,
      lineHeight: Typography.H8,
      marginBottom: hp('1.6'),
      color: colors.subHeadingColor,
    },

    didntReceivedContainer: {
      // flex: 1,
      // justifyContent: "flex-end",
      marginTop: hp(2),
      alignItems: 'center',
    },

    didntReceivedText: {
      fontFamily: fonts.RUBIK_REGULAR,
      fontSize: Typography.P4,
      lineHeight: Typography.H8,
      color: colors.subHeadingColor,
    },

    resendText: {
      fontFamily: fonts.RUBIK_REGULAR,
      fontSize: Typography.P4,
      lineHeight: Typography.H8,
      marginBottom: hp('1.6'),
      color: colors.subHeadingSecondaryColor,
    },

    countryPickerInputContainer: {
      marginBottom: hp(1),
    },

    otpInputMainContainer: {
      width: '100%',
      height: hp(6),
    },

    otpInput: {
      width: hp(6),
      height: hp(6.5),
      backgroundColor: colors.primaryBackground,

      borderRadius: hp(0.75),

      textAlign: 'center',
    },

    otpFocusedStyle: {
      backgroundColor: colors.white,
    },
  };
};
