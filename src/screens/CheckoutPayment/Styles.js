import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import AppConfig from '../../../branding/App_config';

const Typography = AppConfig.typography.default;
const Fonts = AppConfig.fonts.default;

export const Styles = function (scheme, colors) {
  return {
    container: {
      flex: 1,
      marginTop: hp(3),
    },

    listContainer: {
      flex: 0.9,
    },

    bottomContainer: {
      flex: 0.1,
      justifyContent: 'center',
    },

    paymentMethodItemParentContainer: {
      height: hp('8'),
      backgroundColor:
        scheme === 'dark'
          ? colors.secondaryBackground
          : colors.primaryBackground,
      paddingHorizontal: wp('5'),
      marginBottom: hp('1'),
      borderRadius: hp(0.75),
    },
    paymentMethodItemContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      width: hp(3),
      height: hp(3),
      tintColor: colors.activeColor,
      resizeMode: 'contain',
    },
    nameContainer: {
      marginLeft: wp('3'),
      flexDirection: 'row',
      flex: 1,
    },
    rightIconContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    nameTitle: {
      fontSize: Typography.P3,
      fontFamily: Fonts.RUBIK_MEDIUM,
      color: colors.headingColor,
    },
  };
};
