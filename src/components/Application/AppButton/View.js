import React from 'react';
import {Button} from 'react-native-elements';
import {useColorScheme} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {commonDarkStyles} from '../../../../branding/carter/styles/dark/Style';
import {commonLightStyles} from '../../../../branding/carter/styles/light/Style';
import {Shadow} from 'react-native-shadow-2';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const PropTypes = require('prop-types');

const AppButton = props => {
  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const globalStyles =
    scheme === 'dark' ? commonDarkStyles(colors) : commonLightStyles(colors);

  //Props
  const buttonStyle = props.buttonStyle || globalStyles.primaryButtonStyle;
  const primaryShadowStart =
    props.primaryShadowStart || colors.primaryShadowStart;
  const primaryShadowFinal =
    props.primaryShadowFinal || colors.primaryShadowFinal;
  const titleStyle = props.titleStyle || globalStyles.primaryButtonTextStyle;
  const title = props.title || 'Text';
  const onPress = props.onPress || (() => {});
  const loading = props.loading;
  return (
    <Shadow
      viewStyle={{alignSelf: 'stretch'}}
      startColor={primaryShadowStart}
      finalColor={primaryShadowFinal}
      radius={hp(0.75)}
      distance={2}
      offset={[0, 3]}>
      <Button
        buttonStyle={buttonStyle}
        title={title}
        loading={loading}
        titleStyle={titleStyle}
        onPress={() => {
          onPress();
        }}
      />
    </Shadow>
  );
};

AppButton.propTypes = {
  title: PropTypes.string,

  onPress: PropTypes.func.isRequired,

  buttonStyle: PropTypes.any,

  titleStyle: PropTypes.any,
};

export default AppButton;
