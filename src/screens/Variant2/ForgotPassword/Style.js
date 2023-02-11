import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
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

    imageContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    headerImage: {
      width: hp('35%'),
      height: hp('35%'),
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
      marginBottom: hp('1.5'),
      color: colors.headingColor,
      textAlign: 'center',
    },

    headerContainer: {
      backgroundColor: 'transparent',
    },

    subtitleText: {
      fontFamily: fonts.RUBIK_REGULAR,
      fontSize: Typography.P4,
      lineHeight: Typography.H8,
      marginBottom: hp('4'),
      color: colors.subHeadingColor,
      textAlign: 'center',
    },
  };
};
