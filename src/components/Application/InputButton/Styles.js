import AppConfig from '../../../../branding/App_config';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Typography = AppConfig.typography.default;
const Fonts = AppConfig.fonts.default;

export const Styles = function (scheme, styles, colors) {
  return {
    buttonContainer: {
      width: styles.gridWidth,
      height: hp(6),
      backgroundColor:
        scheme === 'dark' ? colors.inputBackground : colors.inputBackground,
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: hp('0.8'),
      borderRadius: hp(0.75),
    },
    leftIcon: {
      marginLeft: wp(5),
    },
    Text: {
      marginLeft: hp('2'),
      fontFamily: Fonts.RUBIK_REGULAR,
      fontSize: Typography.P4,
      color: colors.inputTextColor,
    },
    rightIcon: {
      position: 'absolute',
      right: '5%',
    },
  };
};
