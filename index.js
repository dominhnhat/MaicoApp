/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {registerCustomIconType} from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

AppRegistry.registerComponent(appName, () => App);
registerCustomIconType('font-awesome-5', FontAwesome5);
