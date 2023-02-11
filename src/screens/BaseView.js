import React from 'react';
import {useColorScheme, View} from 'react-native';
import AppHeader from '../components/Application/AppHeader/View';
import Globals from '../utils/Globals';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {commonDarkStyles} from '../../branding/carter/styles/dark/Style';
import {commonLightStyles} from '../../branding/carter/styles/light/Style';
import {useTheme} from '@react-navigation/native';
import {FocusAwareStatusBar} from '../components/Application/FocusAwareStatusBar/FocusAwareStatusBar';

const BaseView = props => {
  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const globalStyles =
    scheme === 'dark' ? commonDarkStyles(colors) : commonLightStyles(colors);

  //Props
  const navigation = props.navigation || '';
  const title = props.title || '';
  const rightIcon = props.rightIcon || '';
  const headerWithBack = props.headerWithBack || false;
  const applyBottomSafeArea = props.applyBottomSafeArea || false;
  const showAppHeader = props.showAppHeader || true;
  const containerStyle =
    props.containerStyle || globalStyles.baseViewStyles.containerStyle;
  const childContainerStyle =
    props.childContainerStyle ||
    globalStyles.baseViewStyles.childContainerStyle;
  const childView = props.childView || <View />;
  const onRightIconPress = props.onRightIconPress || (() => {});

  return (
    <View
      style={[
        containerStyle,
        !showAppHeader && {
          marginTop: Globals.SAFE_AREA_INSET.top,
        },
      ]}>
      {showAppHeader && (
        <FocusAwareStatusBar
          backgroundColor={'transparent'}
          barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'}
        />
      )}

      {showAppHeader && (
        <AppHeader
          navigation={navigation}
          headerWithBack={headerWithBack}
          headerWithBackground
          rightIcon={rightIcon}
          onRightIconPress={() => rightIcon !== '' && onRightIconPress()}
          title={title}
          bottomMargin={{}}
        />
      )}

      <View
        style={[
          childContainerStyle,
          {
            marginBottom: applyBottomSafeArea
              ? Globals.SAFE_AREA_INSET.bottom
                ? Globals.SAFE_AREA_INSET.bottom
                : hp(1)
              : 0,
          },
        ]}>
        {childView()}
      </View>
    </View>
  );
};

export default BaseView;
