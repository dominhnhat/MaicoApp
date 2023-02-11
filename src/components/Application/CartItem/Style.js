import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AppConfig from '../../../../branding/App_config';

const Fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;

export const Styles = function (scheme, colors) {
  return {
    swipeableContainer: {
      marginVertical: hp('0.5'),
    },
    foodItemContainer: {
      height: hp('15'),
      backgroundColor:
        scheme === 'dark'
          ? colors.secondaryBackground
          : colors.primaryBackground,
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: hp(0.75),
      paddingLeft: wp('5'),
    },
    foodItemImage: {
      width: hp('10'),
      height: hp('10'),
      marginRight: wp('2'),
    },
    priceText: {
      fontSize: Typography.P5,
      fontFamily: Fonts.RUBIK_MEDIUM,
      color: colors.subHeadingSecondaryColor,
    },
    itemTitle: {
      fontSize: Typography.P3,
      fontFamily: Fonts.RUBIK_MEDIUM,
      color: colors.headingColor,
      marginVertical: hp(0.5),
    },
    weightText: {
      color: colors.subHeadingColor,
      fontFamily: Fonts.RUBIK_REGULAR,
      fontSize: Typography.P5,
    },
    rightSwipeContainer: {
      width: wp('20'),
      height: '100%',
      marginLeft: hp('1'),
      backgroundColor: colors.rightSwipeBackground,
      borderRadius: hp(0.75),
      justifyContent: 'center',
      alignItems: 'center',
    },
  };
};
