import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import AppConfig from '../../../branding/App_config';

const Fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;

export const Styles = function (scheme, styles, colors) {
  return {
    container: {
      flex: 1,
      alignItems: 'center',
    },

    baseViewChildContainerStyle: {
      flex: 1,
    },

    listContainer: {
      flex: 0.55,
      width: styles.gridWidth,
    },

    cardContainer: {
      marginTop: hp(3),
    },

    bottomContainer: {
      flex: 0.55,
      // paddingVertical: hp(2.5),
      justifyContent: 'center',
      paddingHorizontal: wp(5),
      // marginTop: hp(1),
      width: '100%',
      backgroundColor: colors.primaryBackground,

      shadowColor: colors.borderColorLight,
      shadowOffset: {
        width: 0,
        height: -11,
      },
      shadowOpacity: 0.1,
      shadowRadius: 1.22,

      elevation: 8,
      borderRadius: 4,
    },

    bottomTotalContainer: {
      flex: 0.6,
      // marginBottom: hp(2),
      justifyContent: 'center',
      marginBottom: hp(3),
    },

    bottomButtonContainer: {
      // justifyContent: "center",
      flex: 0.2,
      // backgroundColor: "green"
    },

    receiptItemContainer: {
      flexDirection: 'row',
      width: '100%',
      marginBottom: hp('1'),
    },

    receiptItemDivider: {
      width: '100%',
      height: 1,
      alignSelf: 'center',
      marginVertical: hp('1'),
      backgroundColor: colors.borderColorLight,
    },

    boldLabelText: {
      fontFamily: Fonts.RUBIK_MEDIUM,
      fontSize: Typography.P4,
      color: colors.headingColor,
    },

    boldLabelValueText: {
      fontFamily: Fonts.RUBIK_MEDIUM,
      fontSize: Typography.P4,
      flex: 1,
      textAlign: 'right',
      color: colors.subHeadingSecondaryColor,
    },

    normalLabelText: {
      fontFamily: Fonts.RUBIK_REGULAR,
      fontSize: Typography.P6,
      color: colors.subHeadingColor,
      marginTop: hp(1),
    },

    normalLabelValueText: {
      fontFamily: Fonts.RUBIK_REGULAR,
      fontSize: Typography.P6,
      flex: 1,
      marginTop: hp(1),
      textAlign: 'right',
      color: colors.subHeadingColor,
    },

    cartItemContainer: {
      height: hp('12'),
      backgroundColor:
        scheme === 'dark'
          ? colors.secondaryBackground
          : colors.primaryBackground,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: wp('5'),
    },

    cartTopBorder: {
      borderTopLeftRadius: hp(0.75),
      borderTopRightRadius: hp(0.75),
    },

    cartBottomBorder: {
      borderBottomLeftRadius: hp(0.75),
      borderBottomRightRadius: hp(0.75),
    },

    cartBottomMargin: {
      marginBottom: hp(3),
    },

    cartItemLeftImage: {
      width: hp('6'),
      height: hp('6'),
      marginRight: wp('2'),
      resizeMode: 'contain',
    },

    cartItemNameText: {
      fontSize: Typography.P3,
      fontFamily: Fonts.RUBIK_MEDIUM,
      color: colors.headingColor,
      marginBottom: hp(0.5),
    },

    cartItemWeightText: {
      color: colors.subHeadingColor,
      fontFamily: Fonts.RUBIK_REGULAR,
      fontSize: Typography.P5,
    },

    cartItemPriceText: {
      flex: 1,
      textAlign: 'right',
      fontSize: Typography.P5,
      fontFamily: Fonts.RUBIK_MEDIUM,
      color: colors.activeColor,
      marginRight: wp(5),
    },

    flatListContainer: {
      height: '68%',
      paddingBottom: hp('1'),
    },

    totalContainer: {
      flexDirection: 'row',
      width: '100%',
      marginBottom: hp('1'),
    },
    subtotalLabelText: {
      fontFamily: Fonts.RUBIK_REGULAR,
      fontSize: Typography.P6,
      color: colors.subHeadingColor,
    },
    subtotalValueText: {
      fontFamily: Fonts.RUBIK_REGULAR,
      fontSize: Typography.P6,
      flex: 1,
      textAlign: 'right',
      color: colors.subHeadingColor,
    },
    totalLabelText: {
      fontFamily: Fonts.RUBIK_MEDIUM,
      fontSize: Typography.P4,
      color: colors.headingColor,
    },
    totalValueText: {
      fontFamily: Fonts.RUBIK_MEDIUM,
      fontSize: Typography.P4,
      flex: 1,
      textAlign: 'right',
      color: colors.subHeadingSecondaryColor,
    },
  };
};

export default Styles;
