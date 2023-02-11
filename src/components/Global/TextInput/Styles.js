import AppConfig from '../../../../branding/App_config';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Typography = AppConfig.typography.default;
const fonts = AppConfig.fonts.default;

let Styles = {
  defaultInputStyles: {
    fontFamily: fonts.RUBIK_REGULAR,
    fontSize: Typography.P4,
  },

  rightIcon: {
    width: hp(2),
    height: hp(2),
    resizeMode: 'contain',
  },
};

export default Styles;
