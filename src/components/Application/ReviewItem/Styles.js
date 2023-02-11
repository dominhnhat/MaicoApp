import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import AppConfig from '../../../../branding/App_config';

const Fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;

export const Styles = function (scheme, colors) {
  return {
    container: {
      paddingHorizontal: wp(5),
      paddingVertical: hp(1.5),
      backgroundColor:
        scheme === 'dark'
          ? colors.secondaryBackground
          : colors.primaryBackground,
      marginVertical: hp('0.5'),
      borderRadius: hp(0.75),
    },

    upperContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: hp(1.5),
    },

    profileContainer: {
      marginRight: wp(3),
    },

    nameText: {
      fontFamily: Fonts.RUBIK_MEDIUM,
      fontSize: Typography.P4,
      color: colors.headingColor,
    },

    timeText: {
      fontFamily: Fonts.RUBIK_REGULAR,
      fontSize: Typography.P6,
      color: colors.subHeadingColor,
    },

    lowerContainer: {
      borderTopWidth: 1,
      borderTopColor: colors.borderColorLight,
      paddingTop: hp(1.5),
    },

    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    ratingText: {
      fontFamily: Fonts.RUBIK_REGULAR,
      fontSize: Typography.P4,
      color: colors.headingColor,
      marginRight: wp(1),
    },

    commentText: {
      fontFamily: Fonts.RUBIK_LIGHT,
      fontSize: Typography.P5,
      paddingTop: hp(1),
      lineHeight: hp(2.5),
      color: colors.subHeadingColor,
    },
  };
};
