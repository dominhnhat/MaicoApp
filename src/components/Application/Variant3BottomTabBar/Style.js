import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Styles = function (styles, scheme, colors) {
  return {
    container: {
      flexDirection: 'row',
      backgroundColor: '#FFDEE4',
    },

    bottomTabContainer: {
      flex: 1,
      height: hp(7.5),
      backgroundColor: '#FFDEE4',
      //primaryBackground
      justifyContent: 'center',
      alignItems: 'center',
    },

    bottomTabItemContainer: {
      borderRadius: hp(2.5),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.activeColor,
    },
  };
};
