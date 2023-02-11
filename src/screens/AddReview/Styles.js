import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import AppConfig from '../../../branding/App_config';

const Typography = AppConfig.typography.default;
const Fonts = AppConfig.fonts.default;

export const Styles = function (colors) {
  return {
    scrollViewContainer: {
      flexGrow: 1,
    },

    mainContainer: {
      flex: 1,
      alignItems: 'center',
    },

    upperContainer: {
      flex: 0.9,
      alignItems: 'center',
      width: '100%',
    },

    primaryText: {
      fontFamily: Fonts.RUBIK_MEDIUM,
      fontSize: Typography.H8,
      paddingVertical: hp('3'),
      color: colors.headingColor,
    },

    secondaryText: {
      fontFamily: Fonts.RUBIK_REGULAR,
      fontSize: Typography.P3,
      textAlign: 'center',
      color: colors.subHeadingColor,
      width: '80%',
    },

    ratingContainerStyle: {
      paddingVertical: hp('2'),
    },

    bottomButton: {
      flex: 0.1,
      width: '100%',
      justifyContent: 'center',
    },
  };
};

export default Styles;
