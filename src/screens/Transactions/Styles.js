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
    },

    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      height: hp('12'),
      backgroundColor:
        scheme === 'dark'
          ? colors.secondaryBackground
          : colors.primaryBackground,
      paddingHorizontal: wp('5'),
      marginBottom: hp('1'),
      borderRadius: hp(0.75),
    },

    leftIconContainerStyle: {
      width: hp('6'),
      height: hp('6'),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: hp('3'),
      backgroundColor: colors.inputSecondaryBackground,
    },

    leftIcon: {
      width: hp(3),
      height: hp(3),
      resizeMode: 'contain',
    },

    textContainer: {
      flex: 1,
      flexDirection: 'row',
      marginLeft: wp('3'),
    },

    titleText: {
      fontSize: Typography.P3,
      fontFamily: Fonts.RUBIK_MEDIUM,
      color: colors.headingColor,
    },

    subtitleText: {
      fontSize: Typography.P5,
      fontFamily: Fonts.RUBIK_REGULAR,
      marginVertical: hp('0.5'),
      color: colors.subHeadingColor,
    },

    priceText: {
      flex: 1,
      fontSize: Typography.P3,
      fontFamily: Fonts.RUBIK_REGULAR,
      textAlign: 'right',
      alignSelf: 'center',
      color: colors.subHeadingSecondaryColor,
    },

    transactionFirstItem: {
      marginTop: hp(3),
    },

    transactionLastItem: {
      marginBottom: hp(1),
    },
  };
};
