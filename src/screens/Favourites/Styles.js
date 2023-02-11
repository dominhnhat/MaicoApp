import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import AppConfig from '../../../branding/App_config';

const Typography = AppConfig.typography.default;
const fonts = AppConfig.fonts.default;

export const Styles = function (scheme, colors) {
  return {
    container: {
      flex: 1,
      marginBottom: hp(1),
    },

    containerSpacing: {
      marginBottom: hp('1'),
    },

    contentContainerParent: {
      borderBottomLeftRadius: hp(0.75),
      borderBottomRightRadius: hp(0.75),
      backgroundColor:
        scheme === 'dark'
          ? colors.secondaryBackground
          : colors.primaryBackground,
    },

    favouriteFirstItemContainer: {
      marginTop: hp(3),
    },

    favouriteLastItemContainer: {
      marginBottom: hp(2),
    },

    contentItemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: hp(1),
      borderBottomWidth: 1,
      borderBottomColor: colors.borderColorLight,
    },

    contentItemLeftIconContainer: {
      width: hp('8'),
      height: hp('8'),
      justifyContent: 'center',
      // alignItems: "center",
      borderRadius: hp('4'),
      marginLeft: wp('5'),
      // marginRight: wp("3"),
    },

    contentItemLeftIcon: {
      width: hp(6),
      height: hp(6),
      resizeMode: 'contain',
    },

    weightPriceContainer: {
      flexDirection: 'row',
      marginTop: hp(0.5),
    },

    weightContainer: {
      borderRightWidth: 1,
      borderRightColor: colors.borderColorLight,
    },

    contentContainerButton: {
      width: '100%',
      padding: hp(3),
      alignSelf: 'center',
    },

    titleText: {
      fontSize: Typography.P3,
      fontFamily: fonts.RUBIK_MEDIUM,
      color: colors.headingColor,
    },

    weightText: {
      fontSize: Typography.P7,
      fontFamily: fonts.RUBIK_REGULAR,
      color: colors.subHeadingColor,
      marginRight: wp(2),
    },

    priceText: {
      fontSize: Typography.P7,
      fontFamily: fonts.RUBIK_REGULAR,
      color: colors.activeColor,
      paddingLeft: wp(2),
    },
  };
};
