import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './src/navigation/RootStack';
import {
  SafeAreaConsumer,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {Text, View} from 'react-native';
import Globals from './src/utils/Globals';
import {useColorScheme} from 'react-native';
import AppConfig from './branding/App_config';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import CodePush from 'react-native-code-push';

const lightColors = AppConfig.lightColors.default;
const darkColors = AppConfig.darkColors.default;

const DarkTheme = {
  dark: true,
  colors: darkColors,
};

const LightTheme = {
  dark: false,
  colors: lightColors,
};

const App = props => {
  const scheme = useColorScheme();
  const toastConfig = {
    /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
    success: props => (
      <BaseToast
        {...props}
        style={{borderLeftColor: 'green', width: '100%'}}
        contentContainerStyle={{paddingHorizontal: 15}}
        text1Style={{
          fontSize: 20,
          fontWeight: '400',
        }}
      />
    ),
    /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
    error: props => (
      <ErrorToast
        {...props}
        style={{
          borderLeftColor: 'red',
          width: '100%',
        }}
        text1Style={{
          fontSize: 20,
        }}
        text2Style={{
          fontSize: 15,
        }}
      />
    ),
    /*
      Or create a completely new type - `tomatoToast`,
      building the layout from scratch.
  
      I can consume any custom `props` I want.
      They will be passed when calling the `show` method (see below)
    */
    tomatoToast: ({text1, props}) => (
      <View style={{height: 60, width: '100%', backgroundColor: 'tomato'}}>
        <Text>{text1}</Text>
        <Text>{props.uuid}</Text>
      </View>
    ),
  };
  return (
    <>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
        <SafeAreaProvider>
          <SafeAreaConsumer>
            {insets => {
              Globals.SAFE_AREA_INSET = insets;

              return <RootStack />;
            }}
          </SafeAreaConsumer>
        </SafeAreaProvider>
      </NavigationContainer>
      <Toast config={toastConfig} />
    </>
  );
};


let codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  installMode: CodePush.InstallMode.ON_NEXT_RESUME,
};
const HotPushApp = CodePush(codePushOptions)(App);

export default HotPushApp;