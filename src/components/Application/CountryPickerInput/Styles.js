import AppConfig from '../../../../branding/App_config';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;

export const Styles = function (styles, scheme, colors) {
  return {
    mainContainer: {
      flexDirection: 'row',
      backgroundColor: 'white',
      borderRadius: hp(0.75),
    },

    leftContainer: {
      width: '25%',
      borderRightColor: colors.borderColorLight,
      borderRightWidth: 1,
      borderTopLeftRadius: hp(0.75),
      borderBottomLeftRadius: hp(0.75),
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },

    flagImage: {
      width: hp(3),
      height: hp(2),
      resizeMode: 'cover',
    },

    callingCode: {
      fontFamily: fonts.RUBIK_MEDIUM,
      fontSize: Typography.P3,
      color: colors.headingColor,
      marginRight: wp(2),
    },

    callingCodeRightIcon: {
      width: hp(2),
      height: hp(2),
      resizeMode: 'contain',
    },

    inputContainerStyle: {
      width: '75%',
      marginRight: 100,
      justifyContent: 'center',
    },
  };
};
