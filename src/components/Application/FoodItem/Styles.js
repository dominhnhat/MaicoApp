import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import AppConfig from '../../../../branding/App_config';

const Typography = AppConfig.typography.default;
const Fonts = AppConfig.fonts.default;

export const Styles = function (scheme, colors) {
  return {
    container: {
      width: wp('44%'),
      backgroundColor:
        scheme === 'dark'
          ? colors.secondaryBackground
          : colors.primaryBackground,
      borderRadius: hp(0.75),
      flexDirection: 'column',
      marginRight: hp('1'),
      marginBottom: hp('1'),
    },

    upperContainer: {
      flexDirection: 'row',
    },

    discountContainer: {
      width: '50%',
    },

    discountBanner: {
      backgroundColor: colors.quaternaryBackground,
      width: '60%',
      height: hp(3),
      justifyContent: 'center',
      alignItems: 'center',
      borderTopRightRadius: hp(0.75),
      borderBottomRightRadius: hp(0.75),
      borderTopLeftRadius: hp(0.75),
    },

    discountText: {
      color: colors.headingSecondaryColor,
      fontFamily: Fonts.RUBIK_MEDIUM,
      fontSize: Typography.P7,
    },

    favouriteContainer: {
      width: '50%',
      paddingTop: wp(4),
      paddingEnd: wp(2),
      justifyContent: 'center',
      alignItems: 'flex-end',
    },

    mainContainer: {
      flex: 1,
      alignItems: 'center',
    },

    foodItemImage: {
      width: hp('13'),
      height: hp('13'),
      resizeMode: 'contain',
    },

    infoContainer: {
      alignItems: 'center',
      marginVertical: hp('2'),
    },

    priceText: {
      fontFamily: Fonts.RUBIK_MEDIUM,
      color: colors.subHeadingSecondaryColor,
      fontSize: Typography.P6,
    },

    titleText: {
      fontSize: Typography.P3,
      fontFamily: Fonts.RUBIK_MEDIUM,
      color: colors.headingColor,
      marginVertical: hp('0.5'),
    },

    weightText: {
      fontSize: Typography.P6,
      color: colors.subHeadingColor,
      fontFamily: Fonts.RUBIK_REGULAR,
    },

    bottomContainer: {
      borderTopColor: colors.borderColorLight,
      width: '100%',
      height: hp('5.5'),
      justifyContent: 'center',
      borderTopWidth: 1,
    },

    addToCartContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },

    addCartText: {
      color: colors.subHeadingColor,
      fontFamily: Fonts.RUBIK_REGULAR,
      fontSize: Typography.P5,
      lineHeight: hp('2.8'),
    },

    addCartIcon: {
      marginRight: wp(2),
    },

    cartUpdateContainer: {
      height: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    cartUpdateActionContainer: {
      flex: 0.3,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: colors.borderColorLight,
      height: '100%',
    },

    cartNumberText: {
      fontFamily: Fonts.RUBIK_MEDIUM,
      color: colors.headingColor,
    },
  };
};
