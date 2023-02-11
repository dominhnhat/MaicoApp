import AppConfig from '../../../../branding/App_config';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Typography = AppConfig.typography.default;
const fonts = AppConfig.fonts.default;

export const Styles = function (colors) {
  return {
    horizontalContainer: {
      flexDirection: 'row',
    },

    actionContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },

    icon: {
      width: hp(2),
      height: hp(2),
      resizeMode: 'contain',
      tintColor: colors.activeColor,
    },

    verticalContainer: {
      flexDirection: 'column',
      alignItems: 'center',
    },

    counterText: {
      fontFamily: fonts.RUBIK_MEDIUM,
      fontSize: Typography.P1,
      color: colors.headingColor,
    },
  };
};
