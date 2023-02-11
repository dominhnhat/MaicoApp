import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import AppConfig from '../../../branding/App_config';
import Globals from '../../utils/Globals';

const fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;

export const Styles = function (scheme, styles, colors) {
  return {
    container: {
      flex: 1,
      backgroundColor: colors.secondaryBackground,
    },

    mainContainer: {
      flex: 0.9,
    },

    searchContainer: {
      // paddingTop: Globals.SAFE_AREA_INSET.top + hp(1),
      backgroundColor: colors.primaryBackground,
      flexDirection: 'row',
      paddingVertical: hp(1),
      paddingHorizontal: wp(5),
    },

    searchLeftIconContainer: {
      width: wp('10'),
      justifyContent: 'center',
    },

    searchInputContainer: [
      {
        backgroundColor: colors.inputSecondaryBackground,
        flex: 1,
        borderRadius: hp(0.75),
        height: styles.buttonHeight,
      },
    ],

    searchInputLeftIconContainer: [
      {
        paddingRight: wp('3'),
        height: styles.buttonHeight,
      },
    ],

    searchInputLeftIcon: {
      width: hp(2),
      height: hp(2),
      tintColor: colors.inputColor,
      resizeMode: 'contain',
    },

    contentContainerStyle: {
      width: styles.gridWidth,
      alignSelf: 'center',
      alignItems: 'center',
    },

    categoryTitleContainer: {
      width: styles.gridWidth,
      flexDirection: 'row',
      alignItem: 'center',
      justifyContent: 'space-between',
      paddingVertical: hp('2'),
      marginTop: hp('1'),
    },

    categoryTitleText: {
      fontFamily: fonts.RUBIK_MEDIUM,
      fontSize: Typography.P3,
      color: colors.headingColor,
    },

    categoryBtnText: {
      fontFamily: fonts.RUBIK_MEDIUM,
      fontSize: Typography.P5,
      color: colors.subHeadingQuaternaryColor,
    },

    historyItemContainer: {
      flexDirection: 'row',
      flexShrink: 1,
      flexWrap: 'wrap',
    },

    historyItemTextContainer: {
      backgroundColor: colors.primaryBackground,
      padding: hp(1.5),
      borderRadius: hp(0.75),
      marginRight: hp(1),
      marginBottom: hp(1),
    },

    historyItemText: {
      fontSize: Typography.P6,
      fontFamily: fonts.RUBIK_REGULAR,
      color: colors.subHeadingColor,
    },

    bottomButtonsContainer: {
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'space-around',
      flex: 0.1,
      width: styles.gridWidth,
      alignItems: 'center',
      marginBottom: Globals.SAFE_AREA_INSET.bottom,
    },

    buttonContainer: [
      styles.primaryButtonStyle,
      {
        borderRadius: hp(0.75),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.primaryBackground,
        shadowColor: colors.subHeadingColor,
        shadowOpacity: 0,
      },
    ],

    buttonIcon: {
      left: wp('5'),
    },

    buttonText: [
      styles.primaryButtonTextStyle,
      {
        color: colors.subHeadingColor,
        width: '100%',
        textAlign: 'center',
      },
    ],

    imageSearchButton: {
      flex: 0.5,
      marginRight: hp(1),
    },

    voiceSearchButton: {
      flex: 0.5,
    },
  };
};
