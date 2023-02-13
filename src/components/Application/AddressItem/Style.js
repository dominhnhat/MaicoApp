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
      height: hp('17'),
      backgroundColor: 'transparent',
      flexDirection: 'row',
      borderRadius: hp(0.75),
      marginBottom: hp(1),
    },

    touchableChildContainer: {
      flex: 1,
      borderRadius: hp(0.75),
    },

    rightSwipeableContainer: {
      width: wp('20'),
      height: '100%',
      backgroundColor: colors.rightSwipeBackground,
      borderRadius: hp(0.75),
      marginLeft: hp(1),
      justifyContent: 'center',
      alignItems: 'center',
    },

    nonTouchableContainer: {
      borderBottomWidth: 1,
      borderBottomColor: colors.borderColorLight,
    },

    swipeableContainer: {
      width: '100%',
      justifyContent: 'center',
    },

    activeContainer: {
      borderWidth: 2,
      borderColor: colors.activeColor,
    },

    defaultContainer: {
      position: 'absolute',
      backgroundColor: colors.tertiaryBackground,
      width: '18%',
      height: hp(2.5),
      justifyContent: 'center',
      alignItems: 'center',
      borderTopLeftRadius: hp(0.75),
      borderTopRightRadius: hp(0.75),
      borderBottomRightRadius: hp(0.75),
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

    addressText: {
      fontSize: Typography.P6,
      fontFamily: fonts.RUBIK_REGULAR,
      marginVertical: hp('0.5'),
      lineHeight: hp(2.5),
      width: '55%',
      color: colors.subHeadingColor,
    },

    contactText: {
      fontSize: Typography.P5,
      fontFamily: fonts.RUBIK_MEDIUM,
      marginRight: wp('5'),
      color: colors.headingColor,
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

    childContainer: {
      flexDirection: 'row',
      height: '100%',
      backgroundColor:
        scheme === 'dark'
          ? colors.secondaryBackground
          : colors.primaryBackground,
      borderRadius: hp(0.75),
    },

    childInnerContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
  };
};
