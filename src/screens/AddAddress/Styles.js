import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import AppConfig from '../../../branding/App_config';

const Fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;

export const Styles = function (colors) {
  return {
    mainContainer: {
      flex: 1,
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
  };
};

export default Styles;
