import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import AppConfig from '../../../branding/App_config';

const Fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;

export const Styles = function (colors) {
  return {
    mainContainer: {
      flex: 1,
    },

    sectionHeadingText: {
      marginBottom: hp(1),
      fontFamily: Fonts.RUBIK_MEDIUM,
      fontSize: Typography.P2,
      color: colors.headingColor,
    },

    sectionHeadingText2: {
      marginTop: hp(3),
      marginBottom: hp(1),
      fontFamily: Fonts.RUBIK_MEDIUM,
      fontSize: Typography.P2,
      color: colors.headingColor,
    },

    parentContainer: {
      flex: 0.9,
      marginTop: hp(3),
    },

    bottomButton: {
      flex: 0.1,
      justifyContent: 'center',
    },

    defaultText: {
      marginLeft: hp(1),
      alignSelf: 'center',
      fontFamily: Fonts.RUBIK_REGULAR,
      fontSize: Typography.P4,
      color: colors.headingColor,
    },

    switchContainer: {
      flexDirection: 'row',
      marginTop: hp(1),
    },
    deliveryContainer: {
      height: hp('14'),
      backgroundColor: colors.primaryBackground,
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

    outlineButton: {
      backgroundColor: '#ffdee4',
    },

    deliveryDescription: {
      fontFamily: Fonts.RUBIK_REGULAR,
      fontSize: Typography.P6,
      lineHeight: Typography.P3,
      color: colors.subHeadingColor,
    },
    container: {
      flex: 1,
      marginTop: hp(2),
    },

    upperContainer: {
      flex: 0.9,
    },
  };
};

export default Styles;
