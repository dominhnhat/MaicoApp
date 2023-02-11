import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AppConfig from '../../../../branding/App_config';

const Typography = AppConfig.typography.default;
const fonts = AppConfig.fonts.default;

export const Styles = function (scheme, colors) {
  return {
    container: {
      flex: 1,
      backgroundColor:
        scheme === 'dark'
          ? colors.secondaryBackground
          : colors.primaryBackground,
    },

    headerContainer: {
      paddingLeft: wp(5),
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      height: hp(8),
      backgroundColor:
        scheme === 'dark'
          ? colors.secondaryBackground
          : colors.secondaryBackground,
    },

    headerImageContainer: {
      width: hp('6'),
      height: hp('6'),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: hp('3'),
      backgroundColor: colors.activeColor,
    },

    headerTitle: {
      fontSize: Typography.P3,
      fontFamily: fonts.RUBIK_MEDIUM,
      color: colors.headingColor,
      marginLeft: wp(5),
    },

    emptyText: {
      fontSize: Typography.P3,
      fontFamily: fonts.RUBIK_REGULAR,
      color: colors.subHeadingColor,
      width: '60%',
      textAlign: 'center',
      alignSelf: 'center',
    },

    inputContainer: {
      width: '90%',
      alignSelf: 'center',
    },

    listContainer: {
      marginTop: hp(1),
    },

    colorListItemContainer: {
      width: hp(5),
      height: hp(5),
      borderRadius: hp(2.5),
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: wp(2),
    },

    colorListIcon: {
      width: hp(2),
      height: hp(2),
      tintColor: 'white',
      resizeMode: 'contain',
    },

    textListContainer: {
      paddingVertical: hp(1),
    },

    textListItem: {
      fontSize: Typography.P3,
      fontFamily: fonts.RUBIK_MEDIUM,
      color: colors.headingColor,
      paddingLeft: wp(5),
    },

    createNewListButton: {
      flex: 1,
      width: '90%',
      alignSelf: 'center',
    },

    emptyTextContainer: {
      height: hp(25),
      justifyContent: 'center',
    },
  };
};
