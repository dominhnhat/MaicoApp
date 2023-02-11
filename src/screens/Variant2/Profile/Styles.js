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
    },

    upperContainer: {
      width: '100%',
      height: hp('20'),
      backgroundColor:
        scheme === 'dark'
          ? colors.secondaryBackground
          : colors.primaryBackground,
    },

    container: {
      width: '100%',
      height: '100%',
      backgroundColor:
        scheme === 'dark'
          ? colors.primaryBackground
          : colors.secondaryBackground,
      alignItems: 'center',
    },

    profileImageContainer: {
      position: 'absolute',
      top: hp('14'),
      alignSelf: 'center',
    },

    profileImage: {
      width: hp('14'),
      height: hp('14'),
      borderRadius: hp('7'),
      borderWidth: 5,
      borderColor: colors.primaryBackground,
      resizeMode: 'cover',
    },

    profileImageAccessoryViewContainer: {
      width: hp('5'),
      height: hp('5'),
      backgroundColor: colors.activeColor,
      borderRadius: hp('2.5'),
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: hp(9.5),
      left: hp(9.5),
    },

    infoContainer: {
      alignItems: 'center',
      marginTop: hp('9'),
    },

    nameText: {
      fontFamily: Fonts.RUBIK_MEDIUM,
      fontSize: Typography.P1,
      color: colors.headingColor,
    },

    emailText: {
      fontFamily: Fonts.RUBIK_REGULAR,
      fontSize: Typography.P5,
      color: colors.subHeadingColor,
    },

    listingContainer: {
      width: '100%',
      paddingHorizontal: wp(5),
      marginVertical: hp(4),
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
