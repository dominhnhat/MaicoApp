import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AppConfig from '../../../../branding/App_config';

const Fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;

export const Styles = function (styles, scheme, colors) {
  return {
    mainContainer: {
      flex: 1,
      backgroundColor:
        scheme === 'dark'
          ? colors.primaryBackground
          : colors.secondaryBackground,
    },

    upperContainer: {
      width: '100%',
      height: hp('32'),
      backgroundColor: colors.activeColor,
      alignItems: 'center',
      paddingTop: hp(5),
    },

    container: {
      width: '100%',
      // height: hp("80"),
      backgroundColor:
        scheme === 'dark'
          ? colors.primaryBackground
          : colors.secondaryBackground,
      alignItems: 'center',
    },

    profileImageContainer: {},

    profileImage: {
      width: hp('14'),
      height: hp('14'),
      borderRadius: hp('7'),
      borderWidth: 5,
      borderColor: colors.primaryDarkGreenColor,
      resizeMode: 'cover',
    },

    profileImageAccessoryViewContainer: {
      width: hp('5'),
      height: hp('5'),
      backgroundColor:
        scheme === 'dark'
          ? colors.secondaryBackground
          : colors.primaryBackground,
      borderRadius: hp('2.5'),
      shadowColor: colors.inactiveColor,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: hp(9.5),
      left: hp(9.5),
    },

    profileImageAccessoryViewImage: {
      width: hp('2.5'),
      height: hp('2.5'),
      resizeMode: 'contain',
      tintColor: colors.activeColor,
    },

    infoContainer: {
      alignItems: 'center',
      marginTop: hp('1'),
    },

    nameText: {
      fontFamily: Fonts.RUBIK_MEDIUM,
      fontSize: Typography.P1,
      color: colors.white,
    },

    emailText: {
      fontFamily: Fonts.RUBIK_REGULAR,
      fontSize: Typography.P5,
      color: colors.subHeadingTertiaryColor,
    },

    overlayContainer: {
      width: '90%',
      height: hp(15),
      backgroundColor:
        scheme === 'dark'
          ? colors.secondaryBackground
          : colors.primaryBackground,
      marginTop: -hp(4.5),
      padding: '2%',
      alignSelf: 'center',
      justifyContent: 'center',
      borderRadius: hp(0.5),
    },

    ordersText: {
      fontFamily: Fonts.RUBIK_MEDIUM,
      fontSize: Typography.P3,
      color: colors.headingColor,
      marginLeft: hp(1),
    },

    overlayNestedContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: hp(1),
    },

    nestedContainer: {
      width: '23%',
      height: '100%',
      // height: hp(10),
      backgroundColor:
        scheme === 'dark'
          ? colors.primaryBackground
          : colors.secondaryBackground,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: hp(0.5),
    },

    nestedContainerText: {
      fontFamily: Fonts.RUBIK_REGULAR,
      fontSize: Typography.P6,
      color: colors.subHeadingColor,
      marginTop: hp(1.5),
    },

    cardListContainer: {
      width: '100%',
      marginTop: hp(2),
    },

    cardListingItemContainer: {
      width: wp(27),
      height: hp('14'),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:
        scheme === 'dark'
          ? colors.secondaryBackground
          : colors.primaryBackground,
      borderRadius: hp(1),
      margin: hp(1),
    },

    cardListingItemIconContainer: {
      width: hp('6'),
      height: hp('6'),
      backgroundColor: colors.tertiaryBackground,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: hp('3'),
    },

    cardListingItemIcon: {
      width: hp(2),
      height: hp(2),
      tintColor: colors.activeColor,
      resizeMode: 'contain',
    },

    cardListingItemText: {
      marginTop: hp('2'),
      fontFamily: Fonts.RUBIK_REGULAR,
      fontSize: Typography.P5,
      color: colors.subHeadingColor,
    },

    listingContainer: {
      width: '100%',
      paddingHorizontal: wp(5),
      marginVertical: hp(2),
    },

    profileListingItemContainer: {
      flexDirection: 'row',
      paddingVertical: hp(1.35),
    },

    profileListingItemLeftImage: {
      marginRight: wp(5),
    },

    profileListingItemText: {
      fontFamily: Fonts.RUBIK_REGULAR,
      fontSize: Typography.P3,
      color: colors.subHeadingColor,
    },

    profileListingItemRightContainer: {
      flex: 1,
      alignItems: 'flex-end',
    },
  };
};
