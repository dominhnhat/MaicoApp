import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Styles = function (styles, scheme, colors) {
  return {
    container: {
      flexDirection: 'row',
      backgroundColor: colors.activeColor,
    },

    bottomTabContainer: {
      flex: 1,
      height: hp(7.5),
      backgroundColor: colors.activeColor,
      justifyContent: 'center',
      alignItems: 'center',
    },

    bottomTabItemContainer: {
      borderRadius: hp(2.5),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.primaryBackground,
    },
  };
};
