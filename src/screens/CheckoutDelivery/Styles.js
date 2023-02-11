import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import AppConfig from '../../../branding/App_config';

const Typography = AppConfig.typography.default;
const Fonts = AppConfig.fonts.default;

export const Styles = function (scheme, styles, colors) {
  return {
    container: {
      flex: 1,
      marginTop: hp(2),
    },

    upperContainer: {
      flex: 0.9,
    },

    bottomContainer: {
      flex: 0.1,
      justifyContent: 'center',
    },

    deliveryContainer: {
      height: hp('14'),
      backgroundColor:
        scheme === 'dark'
          ? colors.secondaryBackground
          : colors.primaryBackground,
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: hp('1'),
      borderRadius: hp(0.75),
      paddingHorizontal: wp(5),
    },

    deliveryHeader: {
      fontFamily: Fonts.RUBIK_MEDIUM,
      fontSize: Typography.P3,
      marginTop: hp('1'),
      marginBottom: hp('1.5'),
      color: colors.headingColor,
    },

    deliveryDescription: {
      fontFamily: Fonts.RUBIK_REGULAR,
      fontSize: Typography.P6,
      lineHeight: Typography.P3,
      color: colors.subHeadingColor,
    },

    deliveryPrice: {
      fontFamily: Fonts.RUBIK_MEDIUM,
      fontSize: Typography.P3,
      flex: 1,
      textAlign: 'right',
      color: colors.subHeadingSecondaryColor,
    },

    flatListContainer: {
      flex: 0.8,
      paddingBottom: hp('1'),
    },
    totalContainer: {
      alignSelf: 'center',
      flexDirection: 'row',
      width: styles.gridWidth,
      marginBottom: hp('1'),
    },
    subtotalLabelText: {
      fontFamily: Fonts.RUBIK_REGULAR,
      fontSize: Typography.P4,
      flex: 0.5,
    },
    subtotalValueText: {
      fontFamily: Fonts.RUBIK_REGULAR,
      fontSize: Typography.P4,
      flex: 0.5,
      textAlign: 'right',
    },
    totalLabelText: {
      fontFamily: Fonts.RUBIK_MEDIUM,
      fontSize: Typography.P1,
      flex: 0.5,
    },
    totalValueText: {
      fontFamily: Fonts.RUBIK_MEDIUM,
      fontSize: Typography.P1,
      flex: 0.5,
      textAlign: 'right',
    },
  };
};
