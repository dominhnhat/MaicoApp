import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AppConfig from '../../../App_config';

const gridWidth = wp(90);
export const buttonHeight = hp(6);

const fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;

export const commonLightStyles = function (colors) {
  return {
    buttonShadow: {
      shadowColor: colors.activeColor,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.4,
      shadowRadius: 2.22,

      elevation: 3,
      borderRadius: 5,
    },

    //Button Styles
    primaryButtonStyle: {
      height: buttonHeight,

      backgroundColor: colors.buttonBackground,

      borderRadius: hp(0.75),

      // shadowColor: colors.buttonBackground,
      // shadowOffset: {
      //     width: 0,
      //     height: 3,
      // },
      // shadowOpacity: 0.4,
      // shadowRadius: 2.22,
      //
      // elevation: 3,
    },

    primaryButtonTextStyle: {
      fontFamily: fonts.RUBIK_MEDIUM,
      fontSize: Typography.P3_1,
      color: colors.buttonColor,
    },

    //Input Styles
    primaryInputStyle: {
      placeholderTextColor: colors.inputTextColor,
      leftIconColor: colors.inputColor,
      iconColor: colors.inputColor,
      backgroundColor: colors.inputSecondaryBackground,
      defaultContainerStyle: {
        marginVertical: hp('0.5'),
        height: buttonHeight,
        borderRadius: hp(0.75),
      },
      leftIconContainerStyle: {
        paddingRight: wp('3'),
        height: buttonHeight,
      },
      multilineInputHeight: {
        height: hp('30'),
      },
    },

    secondaryInputStyle: {
      placeholderTextColor: colors.inputTextColor,
      leftIconColor: colors.inputColor,
      iconColor: colors.inputColor,
      backgroundColor: colors.inputBackground,
      defaultContainerStyle: {
        marginVertical: hp('0.5'),
        height: buttonHeight,
        borderRadius: hp(0.75),
      },
      leftIconContainerStyle: {
        paddingRight: wp('3'),
        height: buttonHeight,
      },
      multilineInputHeight: {
        height: hp('30'),
      },
    },

    //Header Styles
    headerStyles: {
      headerIconContainerStyle: {
        width: wp('10'),
        height: '100%',
        justifyContent: 'center',
        zIndex: 1,
        alignItems: 'center',
      },

      headerIconStyle: {
        width: hp(2.5),
        height: hp(2.5),
      },

      centerContainerStyle: {
        justifyContent: 'center',
        height: '100%',
        zIndex: 1,
        alignItems: 'center',
      },

      containerStyle: {
        backgroundColor: colors.headerBackground,
      },

      transparentContainerStyle: {
        position: 'absolute',
        width: wp('100'),
        backgroundColor: 'transparent',
        borderBottomWidth: 0,
        zIndex: 1,
      },

      headerShadowStyle: {
        shadowColor: colors.borderColorLight,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 1.22,

        elevation: 4,
        borderRadius: 4,
      },
    },

    //BaseView Styles
    baseViewStyles: {
      containerStyle: {
        flex: 1,
        backgroundColor: colors.secondaryBackground,
      },

      childContainerStyle: {
        flex: 1,
        width: gridWidth,
        alignSelf: 'center',
      },
    },

    promotionalTextStyle: {
      color: colors.activeColor,
      fontFamily: fonts.RUBIK_MEDIUM,
      fontSize: Typography.P8,
    },

    gridWidth: wp('90%'),
    gridWidth3: wp('85%'),
  };
};
