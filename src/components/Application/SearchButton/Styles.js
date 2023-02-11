import AppConfig from '../../../../branding/App_config';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;

export const Styles = function (styles, scheme, colors) {
  return {
    buttonContainer: {
      width: styles.gridWidth,
      height: hp(5.9),
      backgroundColor:
        scheme === 'dark'
          ? colors.secondaryBackground
          : colors.primaryBackground,
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: hp('1.5'),
      borderRadius: hp(0.75),
    },

    leftIcon: {
      marginLeft: wp(5),
    },

    Text: {
      marginLeft: hp('2'),
      fontFamily: Fonts.RUBIK_REGULAR,
      fontSize: Typography.P4,
      color: colors.subHeadingColor,
    },
    rightIcon: {
      position: 'absolute',
      right: wp(5),
    },
  };
};
