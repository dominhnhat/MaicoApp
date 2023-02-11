import React, {useRef, useState} from 'react';
import {useColorScheme, View} from 'react-native';
import {Text} from 'react-native-elements';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AppInput from '../../../components/Application/AppInput/View';
import {Styles} from './Style';
import AppHeader from '../../../components/Application/AppHeader/View';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import AppButton from '../../../components/Application/AppButton/View';
import {useTheme} from '@react-navigation/native';
import {commonDarkStyles} from '../../../../branding/carter/styles/dark/Style';
import {commonLightStyles} from '../../../../branding/carter/styles/light/Style';
import Routes from '../../../navigation/Routes';
import {CircularBanner} from '../../../components/Application/CicularBanner/View';
import IconNames from '../../../../branding/carter/assets/IconNames';
import {FocusAwareStatusBar} from '../../../components/Application/FocusAwareStatusBar/FocusAwareStatusBar';

export const Variant2ForgotPassword = props => {
  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const globalStyles =
    scheme === 'dark' ? commonDarkStyles(colors) : commonLightStyles(colors);
  const screenStyles = Styles(globalStyles, colors);

  //Internal States
  const [email, setEmail] = useState('');

  //References
  let inputRef = useRef();

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps={'never'}
      style={screenStyles.scrollViewContainer}
      contentContainerStyle={screenStyles.scrollViewContentContainer}
      getTextInputRefs={() => {
        return [inputRef];
      }}
      showsVerticalScrollIndicator={false}>
      <View style={screenStyles.container}>
        <FocusAwareStatusBar
          translucent
          backgroundColor={'transparent'}
          barStyle="dark-content"
        />

        <AppHeader
          navigation={props.navigation}
          isTranslucent
          transparentHeader
          containerStyle={screenStyles.headerContainer}
          headerWithBack
          headerWithBackground
          title={'Password Recovery'}
        />

        <View style={screenStyles.imageContainer}>
          <CircularBanner
            icon={IconNames.Key}
            theme={'red'}
            width={wp(85)}
            height={wp(85)}
          />
        </View>

        <View style={[screenStyles.bottomContainer]}>
          <Text style={screenStyles.titleText}>{'Forgot Password'}</Text>

          <Text style={screenStyles.subtitleText}>
            {
              "Enter your email and we'll send you instructions on how to reset it."
            }
          </Text>

          <AppInput
            containerStyle={{marginBottom: hp(1)}}
            textInputRef={r => (inputRef = r)}
            leftIcon={IconNames.Envelope}
            placeholder={'Email Address'}
            value={email}
            onChangeText={email => {
              setEmail(email);
            }}
          />

          <AppButton
            title={'Send Link'}
            onPress={() => {
              props.navigation.navigate(Routes.VERIFY_NUMBER_SCREEN);
            }}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
