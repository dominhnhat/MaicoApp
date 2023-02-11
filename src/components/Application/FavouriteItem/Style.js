import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AppConfig from '../../../../branding/App_config';

const fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;

export const Styles = function (scheme, colors) {
  return {
    container: {
      height: hp('15'),
      // backgroundColor: scheme === "dark" ? colors.secondaryBackground : colors.primaryBackground,
      flexDirection: 'row',
      borderRadius: hp(0.75),
      marginBottom: hp(1),
    },

    swipeableContainerParent: {
      width: '100%',
      justifyContent: 'center',
    },

    swipeableContainer: {
      flexDirection: 'row',
      height: '100%',
      borderRadius: hp(0.75),
      backgroundColor:
        scheme === 'dark'
          ? colors.secondaryBackground
          : colors.primaryBackground,
    },

    swipeableMainContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },

    rightSwipeContainer: {
      width: wp('20'),
      height: '100%',
      backgroundColor: colors.rightSwipeBackground,
      borderRadius: hp(0.75),
      marginLeft: hp(1),
      justifyContent: 'center',
      alignItems: 'center',
    },

    activeContainer: {
      borderWidth: 1,
      borderColor: colors.activeColor,
    },

    defaultContainer: {
      position: 'absolute',
      backgroundColor: colors.tertiaryBackground,
      width: '18%',
      height: hp(2.5),
      justifyContent: 'center',
      alignItems: 'center',
      borderTopRightRadius: hp(0.5),
      borderBottomRightRadius: hp(0.5),
    },

    leftImageContainer: {
      width: hp('8'),
      height: hp('8'),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: hp('4'),
      marginLeft: wp('5'),
      marginRight: wp(4),
      backgroundColor: colors.tertiaryBackground,
    },

    titleText: {
      fontSize: Typography.P3,
      fontFamily: fonts.RUBIK_MEDIUM,
      color: colors.headingColor,
    },

    subtitleText: {
      fontSize: Typography.P7,
      fontFamily: fonts.RUBIK_REGULAR,
      color: colors.subHeadingColor,
    },

    rightIconContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingRight: wp('5'),
    },

    rightIcon: {
      width: hp(2.5),
      height: hp(2.5),
      tintColor: colors.activeColor,
    },

    childActiveContainer: {
      borderBottomWidth: 1,
      borderBottomColor: colors.borderColorLight,
    },
  };
};
