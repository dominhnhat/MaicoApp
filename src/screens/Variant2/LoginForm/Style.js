import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AppConfig from '../../../../branding/App_config';

const fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;

export const Styles = function (styles, colors) {
  return {
    scrollViewContainer: {
      flex: 1,
      backgroundColor: colors.primaryBackground,
    },

    scrollViewContentContainer: {
      flexGrow: 1,
      backgroundColor: colors.primaryBackground,
    },

    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: colors.primaryBackground,
    },

    headerContainer: {
      backgroundColor: 'transparent',
    },

    imageContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    headerImage: {
      width: wp(75),
      height: wp(75),
      resizeMode: 'contain',
    },

    bottomContainer: {
      width: styles.gridWidth3,
      paddingVertical: hp('3'),
      justifyContent: 'flex-end',
    },

    titleText: {
      fontFamily: fonts.RUBIK_MEDIUM,
      fontSize: Typography.H8,
      marginBottom: hp('0.5'),
      color: colors.headingColor,
      textAlign: 'center',
    },

    subtitleText: {
      fontFamily: fonts.RUBIK_REGULAR,
      fontSize: Typography.P4,
      lineHeight: Typography.H8,
      marginBottom: hp('3'),
      color: colors.subHeadingColor,
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
      color: colors.subHeadingColor,
      alignSelf: 'center',
      marginLeft: hp(1),
    },

    signupButton: {
      color: colors.headingColor,
      fontFamily: fonts.RUBIK_MEDIUM,
      fontSize: Typography.P4,
    },

    forgotPasswordButton: {
      color: colors.subHeadingQuaternaryColor,
      fontFamily: fonts.RUBIK_REGULAR,
      fontSize: Typography.P6,
    },

    switchContainer: {
      justifyContent: 'center',
    },

    bottomButtonContainer: {
      flex: 1,
      alignItems: 'flex-end',
    },
  };
};
