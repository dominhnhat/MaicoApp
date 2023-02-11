const APP_PATH = 'carter';

const AppConfig = {
  config: require(`./${APP_PATH}/configuration/Config.js`),
  lightColors: require(`./${APP_PATH}/styles/light/Colors.js`),
  darkColors: require(`./${APP_PATH}/styles/dark/Colors.js`),
  typography: require(`./${APP_PATH}/styles/Typography.js`),
  assets: require(`./${APP_PATH}/assets/Assets.js`),
  fonts: require(`./${APP_PATH}/assets/Fonts.js`),
};

export default AppConfig;
