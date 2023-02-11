import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import AppConfig from '../../../branding/App_config';

const fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;

export const Styles = function (colors) {
  return {
    container: {
      flex: 1,
    },

    mainContainer: {
      flex: 0.9,
      width: wp('55'),
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },

    titleText: {
      fontFamily: fonts.RUBIK_MEDIUM,
      color: colors.headingColor,
      fontSize: Typography.H8,
      textAlign: 'center',
      marginTop: hp('3'),
    },

    subtitleText: {
      fontFamily: fonts.RUBIK_LIGHT,
      color: colors.subHeadingColor,
      fontSize: Typography.P4,
      lineHeight: Typography.H8,
      textAlign: 'center',
      marginTop: hp('1.6'),
    },

    bottomContainer: {
      flex: 0.1,
      justifyContent: 'center',
    },
  };
};
