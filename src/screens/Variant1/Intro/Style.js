import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AppConfig from '../../../../branding/App_config';

const fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;

export const Styles = function (styles, colors) {
  return {
    container: {
      flex: 1,
      backgroundColor: colors.primaryBackground,
    },

    introUpperContainer: {
      flex: 0.9,
    },

    introItemContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    introItemImage: {
      width: hp('45'),
      height: hp('45'),
      resizeMode: 'contain',
    },

    introItemTitle: {
      fontFamily: fonts.RUBIK_MEDIUM,
      fontSize: Typography.H7,
      width: wp('75'),
      textAlign: 'center',
      marginTop: hp('5'),
      color: colors.headingColor,
    },

    introItemSubtitle: {
      fontFamily: fonts.RUBIK_REGULAR,
      fontSize: Typography.P4,
      width: wp('75'),
      textAlign: 'center',
      marginTop: hp('2'),
      lineHeight: hp(3),
      color: colors.subHeadingColor,
    },

    paginationDotStyle: {
      width: hp(0.8),
      height: hp(0.8),
      marginLeft: -hp(1),
    },

    paginationInactiveDotStyle: {
      width: hp(0.8),
      height: hp(0.8),
    },

    introLowerContainer: {
      flex: 0.1,
      width: styles.gridWidth3,
      alignSelf: 'center',
    },
  };
};
