import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import AppConfig from '../../../branding/App_config';

const Fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;

export const Styles = function (styles, colors) {
  return {
    mainContainer: {
      flex: 1,
      backgroundColor: colors.headerBackground,
    },

    flatListContainer: {
      flex: 0.78,
    },

    flatListFirstItemContainer: {
      marginTop: hp(2),
    },

    flatListLastItemContainer: {
      marginBottom: hp(2),
    },

    bottomContainerParent: {
      flex: 0.3,
      backgroundColor: colors.primaryBackground,

      justifyContent: 'center',

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

    bottomContainerParentVariant1: {
      paddingBottom: hp(1.8),
    },

    bottomContainer: {
      alignSelf: 'center',
      backgroundColor: colors.primaryBackground,
      // paddingTop: hp("2"),
      width: styles.gridWidth,
    },
    totalContainer: {
      flexDirection: 'row',
      marginBottom: hp('1.5'),
    },
    subtotalLabelText: {
      fontFamily: Fonts.RUBIK_REGULAR,
      fontSize: Typography.P4,
      color: colors.subHeadingColor,
    },
    subtotalValueText: {
      fontFamily: Fonts.RUBIK_REGULAR,
      fontSize: Typography.P4,
      flex: 1,
      textAlign: 'right',
      color: colors.subHeadingColor,
    },
    totalLabelText: {
      fontFamily: Fonts.RUBIK_MEDIUM,
      fontSize: Typography.P1,
      flex: 0.5,
      color: colors.headingColor,
    },
    totalValueText: {
      fontFamily: Fonts.RUBIK_MEDIUM,
      fontSize: Typography.P1,
      flex: 0.5,
      textAlign: 'right',
      color: colors.headingColor,
    },
    horizontalDivider: {
      width: styles.gridWidth,
      height: 1,
      alignSelf: 'center',
      marginBottom: hp('1'),
      backgroundColor: colors.borderColorLight,
    },
  };
};

export default Styles;
