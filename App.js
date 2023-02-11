import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './src/navigation/RootStack';
import {
  SafeAreaConsumer,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import Globals from './src/utils/Globals';
import {useColorScheme} from 'react-native';
import AppConfig from './branding/App_config';
import Toast from 'react-native-toast-message';
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

export const App = props => {
  const scheme = useColorScheme();

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
      <Toast />
    </>
  );
};
