import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const Styles = function (scheme, colors) {
  return {
    container: {
      justifyContent: 'center',
    },

    icon: {
      position: 'absolute',
      left: wp('5'),
    },

    title: {
      width: '100%',
      textAlign: 'center',
    },
  };
};
