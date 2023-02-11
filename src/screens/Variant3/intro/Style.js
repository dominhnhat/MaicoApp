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

    paginationDotStyle: {
      width: hp(0.8),
      height: hp(0.8),
      marginLeft: -hp(1),
    },

    paginationInactiveDotStyle: {
      width: hp(0.8),
      height: hp(0.8),
    },

    paginationContainerStyle: {
      position: 'absolute',
      width: '100%',
      bottom: hp(10),
      zIndex: 1,
    },

    introLowerContainer: {
      position: 'absolute',
      bottom: hp(3),
      width: styles.gridWidth3,
      alignSelf: 'center',
    },

    introItemContainer: {
      flex: 1,
      alignItems: 'center',
      paddingTop: hp(15),
      resizeMode: 'cover',
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
  };
};
