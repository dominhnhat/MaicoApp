import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Styles = function (colors) {
  return {
    container: {
      flex: 1,
    },

    listContainer: {
      flex: 0.9,
    },

    bottomContainer: {
      flex: 0.1,
      justifyContent: 'center',
    },

    addressFirstItem: {
      marginTop: hp(3),
    },

    addressLastItem: {
      marginBottom: hp(1),
    },
  };
};
