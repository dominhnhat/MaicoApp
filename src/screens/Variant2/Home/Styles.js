import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import AppConfig from '../../../../branding/App_config';

const fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;

export const Styles = function (styles, scheme, colors) {
  return {
    mainWrapper: {
      flex: 1,
      backgroundColor:
        scheme === 'dark'
          ? colors.primaryBackground
          : colors.secondaryBackground,
    },

    parentWrapper: {},

    mainContainer: {
      width: styles.gridWidth,
      alignSelf: 'center',
      marginTop: hp(4),
      marginBottom: hp(8),
    },

    secondarySliderContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: hp('1'),
      width: styles.gridWidth,
      alignSelf: 'center',
    },

    sectionHeading: {
      width: styles.gridWidth,
      flexDirection: 'row',
      alignItem: 'center',
      justifyContent: 'space-between',
      paddingVertical: hp('1'),
      marginVertical: hp('1'),
    },

    sectionHeadingText: {
      fontFamily: fonts.RUBIK_MEDIUM,
      fontSize: Typography.P1,
      color: colors.headingColor,
    },

    sectionHeadingIcon: {
      alignSelf: 'center',
    },

    sectionContainer: {
      width: styles.gridWidth,
      alignItems: 'center',
      alignSelf: 'center',
      marginBottom: hp(1),
    },

    secondaryBannerContainer: {
      width: widthPercentageToDP(44),
      height: hp(35),
      borderRadius: hp(0.75),
      resizeMode: 'cover',
    },

    tertiaryBannerContainer: {
      width: '100%',
      height: hp(30),
      borderRadius: hp(0.75),
      marginBottom: hp('2'),
      resizeMode: 'cover',
    },

    promotionSliderContainer: {
      width: '100%',
      height: hp('45%'),
      borderRadius: hp(0.75),
      alignItems: 'center',
    },

    promotionSliderActiveDot: {
      width: hp(2),
      height: hp(0.8),
      marginRight: -hp(1),
    },

    promotionSliderInActiveDot: {
      width: hp(0.8),
      height: hp(0.8),
    },

    promotionPaginationContainer: {
      position: 'absolute',
      bottom: 0,
      zIndex: 1,
    },

    foodLastItems: {
      marginBottom: hp(3),
    },
  };
};
