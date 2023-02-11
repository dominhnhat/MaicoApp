import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

let Styles = {
  container: {
    flex: 1,
  },

  listContainer: {
    flex: 0.9,
  },

  accountFirstItem: {
    marginTop: hp(3),
  },

  accountLastItem: {
    marginBottom: hp(2),
  },

  bottomContainer: {
    flex: 0.1,
    justifyContent: 'center',
  },
};

export default Styles;
