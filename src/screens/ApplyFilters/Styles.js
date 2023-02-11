import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import AppConfig from '../../../branding/App_config';

const Typography = AppConfig.typography.default;
const Fonts = AppConfig.fonts.default;

export const Styles = function (scheme, colors) {
  return {
    mainContainer: {
      flex: 1,
    },

    cardContainerStyle: {
      width: '100%',
      backgroundColor:
        scheme === 'dark'
          ? colors.secondaryBackground
          : colors.primaryBackground,
      paddingHorizontal: hp(3),
      paddingVertical: hp(2.5),
      borderBottomWidth: 1,
      borderBottomColor: colors.borderColorLight,
    },

    firstCardContainerStyle: {
      marginTop: hp(3),
      borderTopLeftRadius: hp(0.75),
      borderTopRightRadius: hp(0.75),
    },

    othersTitle: {
      marginHorizontal: wp(3),
      fontFamily: Fonts.RUBIK_REGULAR,
      fontSize: Typography.P4,
      color: colors.headingColor,
    },

    checkCircleImage: {
      position: 'absolute',
      right: 0,
    },

    othersCardContainerStyle: {
      marginBottom: hp(2),
      borderBottomLeftRadius: hp(0.75),
      borderBottomRightRadius: hp(0.75),
      borderBottomWidth: 0,
    },

    categoriesCardParentContainerStyle: {
      borderRadius: hp(0.75),
      borderBottomWidth: 0,
      marginBottom: hp(3),
    },

    categoriesCardContainerStyle: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },

    categoryParent: {
      backgroundColor:
        scheme === 'dark'
          ? colors.secondaryBackground
          : colors.primaryBackground,
      flexDirection: 'row',
      alignItems: 'center',
      width: '50%',
      paddingVertical: hp('1.5'),
    },

    categoryParentBorder: {
      borderBottomWidth: 1,
      borderBottomColor: colors.borderColorLight,
    },

    categoryTitle: {
      marginHorizontal: wp(3),
      fontFamily: Fonts.RUBIK_REGULAR,
      fontSize: Typography.P4,
      color: colors.headingColor,
    },

    priceContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    titleStyle: {
      fontSize: Typography.P3,
      fontFamily: Fonts.RUBIK_MEDIUM,
      marginBottom: hp(1),
      color: colors.headingColor,
    },

    inputContainerStyle: {
      width: wp(38),
      backgroundColor: colors.inputSecondaryBackground,
      justifyContent: 'center',
    },

    ratingContainerStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.inputSecondaryBackground,
      height: hp(5.9),
      borderRadius: hp(0.75),
      paddingHorizontal: wp(5),
    },

    ratingTextStyle: {
      fontSize: Typography.P5,
      fontFamily: Fonts.RUBIK_REGULAR,
      color: colors.headingColor,
      flex: 1,
      textAlign: 'right',
    },

    othersItemContainerStyle: {
      backgroundColor:
        scheme === 'dark'
          ? colors.secondaryBackground
          : colors.primaryBackground,
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: hp('1.5'),
      borderBottomColor: colors.borderColorLight,
    },

    scrollViewContainer: {
      flex: 0.9,
    },

    bottomButtonContainer: {
      flex: 0.1,
      justifyContent: 'center',
    },
  };
};

export default Styles;
