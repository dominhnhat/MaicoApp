import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import AppConfig from '../../../../branding/App_config';

const fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;

export const Styles = function (styles, scheme, colors) {
  return {
    mainWrapper: {
      flex: 1,
      alignItems: 'center',
      backgroundColor:
        scheme === 'dark'
          ? colors.secondaryBackground
          : colors.secondaryBackground,
    },

    parentWrapper: {
      flex: 1,
      width: styles.gridWidth,
      alignSelf: 'center',
    },

    sectionContainer: {
      width: styles.gridWidth,
      alignItems: 'center',
      marginBottom: hp(1),
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
      fontSize: Typography.P2,
      color: colors.headingColor,
    },

    sectionHeadingIcon: {
      alignSelf: 'center',
    },

    promotionSliderContainer: {
      width: '100%',
      height: hp('30%'),
      borderRadius: hp(0.75),
      marginBottom: hp(1),
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
      marginBottom: hp(2),
    },
  };
};
