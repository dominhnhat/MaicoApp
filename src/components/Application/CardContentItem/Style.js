import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AppConfig from '../../../../branding/App_config';

const Typography = AppConfig.typography.default;
const fonts = AppConfig.fonts.default;

export const Styles = function (scheme, colors) {
  return {
    contentContainer: {
      paddingHorizontal: wp('3'),
      paddingVertical: hp('2'),
      backgroundColor:
        scheme === 'dark'
          ? colors.secondaryBackground
          : colors.primaryBackground,
    },

    horizontalInput: {
      flex: 0.48,
    },

    horizontalInputsContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
    },

    defaultContainer: {
      flexDirection: 'row',
      marginTop: hp(1),
    },

    defaultText: {
      marginLeft: hp(1),
      alignSelf: 'center',
      fontFamily: fonts.RUBIK_REGULAR,
      fontSize: Typography.P4,
      color: colors.headingColor,
    },
  };
};
