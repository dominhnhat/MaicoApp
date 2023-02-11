import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import AppConfig from '../../../branding/App_config';
import Globals from '../../utils/Globals';

const Fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;

export const Styles = function (scheme, colors) {
  return {
    container: {
      flex: 1,
      backgroundColor: colors.secondaryBackground,
      paddingBottom: Globals.SAFE_AREA_INSET.bottom,
    },

    imageContainer: {
      width: wp('100%'),
      height: hp('55%'),
      backgroundColor: colors.primaryBackground,
      paddingTop: Globals.SAFE_AREA_INSET.top,
    },

    mainImage: {
      width: '70%',
      height: '100%',
      alignSelf: 'center',
      resizeMode: 'contain',
    },

    bottomContainerMain: {
      flex: 1,
      // alignSelf: "center",
      marginHorizontal: wp(5),
      paddingTop: hp('2'),
    },

    bottomContainerUpper: {
      flex: 0.65,
    },

    bottomContainerLower: {
      flex: 0.35,
    },

    infoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    favouriteContainer: {
      width: '50%',
      height: hp(2),
      justifyContent: 'center',
      alignItems: 'flex-end',
    },

    priceText: {
      color: colors.subHeadingSecondaryColor,
      fontSize: Typography.H8,
      fontFamily: Fonts.RUBIK_MEDIUM,
      width: '50%',
    },

    nameText: {
      fontFamily: Fonts.RUBIK_MEDIUM,
      fontSize: Typography.H8,
      color: colors.headingColor,
      marginBottom: hp('0.5'),
    },

    weightText: {
      fontFamily: Fonts.RUBIK_REGULAR,
      fontSize: Typography.P4,
      color: colors.subHeadingColor,
      marginBottom: hp('0.5'),
    },

    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp('2'),
    },

    ratingText: {
      fontFamily: Fonts.RUBIK_REGULAR,
      fontSize: Typography.P3,
      color: colors.headingColor,
    },

    reviewText: {
      fontFamily: Fonts.RUBIK_REGULAR,
      fontSize: Typography.P4,
      color: colors.subHeadingColor,
    },

    detailText: {
      fontFamily: Fonts.RUBIK_LIGHT,
      fontSize: Typography.P2,
      lineHeight: hp('3%'),
      color: colors.subHeadingColor,
    },

    seeMoreStyle: {
      fontFamily: Fonts.RUBIK_MEDIUM,
      fontSize: Typography.P2,
      color: colors.headingColor,
    },

    cartCounterContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: colors.primaryBackground,
      marginVertical: hp('1'),
    },

    cartCounterText: {
      fontFamily: Fonts.RUBIK_MEDIUM,
      color: colors.subHeadingColor,
      marginLeft: '5%',
    },
  };
};
