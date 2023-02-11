import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Styles = function (styles, scheme, colors) {
  return {
    container: {
      flexDirection: 'row',
      backgroundColor:
        scheme === 'dark'
          ? colors.secondaryBackground
          : colors.primaryBackground,

      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowColor: colors.subHeadingColor,
      shadowOpacity: 0.58,
      shadowRadius: 6.0,
      elevation: 30,
      zIndex: 0,
    },

    bottomTabContainer: {
      flex: 1,
      height: hp(6.5),
      backgroundColor:
        scheme === 'dark'
          ? colors.secondaryBackground
          : colors.primaryBackground,
      justifyContent: 'center',
      alignItems: 'center',
    },

    bottomTabCartOuterContainer: {
      width: hp(8.5),
      height: hp(8.5),
      bottom: hp(2),
      borderWidth: hp(4.5),
      borderRadius: hp(4.3),
      borderColor:
        scheme === 'dark'
          ? colors.secondaryBackground
          : colors.primaryBackground,
      // borderTopColor: scheme === "dark" ? colors.secondaryBackground : colors.primaryBackground,
      // borderLeftColor: scheme === "dark" ? colors.secondaryBackground : colors.primaryBackground,
      // borderRightColor: scheme === "dark" ? colors.secondaryBackground : colors.primaryBackground,
      justifyContent: 'center',
      alignItems: 'center',

      // shadowOffset: {
      //     width: 0,
      //     height: -25,
      // },
      // shadowColor: colors.subHeadingColor,
      // shadowRadius: 10.0,
      //
      // shadowOpacity: 0.1,
      // elevation: 24,
      // zIndex: 0,
    },

    bottomTabCartInnerContainer: {
      width: hp(7),
      height: hp(7),
      borderRadius: hp(3.5),
      backgroundColor: colors.activeColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
  };
};
