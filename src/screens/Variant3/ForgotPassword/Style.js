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
      height: hp('50%'),
      resizeMode: 'contain',
    },

    bottomContainer: {
      flex: 1,
      width: styles.gridWidth3,
      paddingVertical: hp('3'),
      marginTop: hp(20),
    },

    titleText: {
      fontFamily: fonts.RUBIK_MEDIUM,
      fontSize: Typography.H8,
      marginBottom: hp('1.5'),
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
  };
};
