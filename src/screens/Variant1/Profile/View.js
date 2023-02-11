import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from 'react-native';
import {Styles} from './Styles';
import AppConfig from '../../../../branding/App_config';
import Utilities from '../../../utils/UtilityMethods';
import Globals from '../../../utils/Globals';
import {useTheme} from '@react-navigation/native';
import {commonDarkStyles} from '../../../../branding/carter/styles/dark/Style';
import {commonLightStyles} from '../../../../branding/carter/styles/light/Style';
import {SvgIcon} from '../../../components/Application/SvgIcon/View';
import IconNames from '../../../../branding/carter/assets/IconNames';
import {FocusAwareStatusBar} from '../../../components/Application/FocusAwareStatusBar/FocusAwareStatusBar';

const assets = AppConfig.assets.default;

export const Variant1Profile = props => {
  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const globalStyles =
    scheme === 'dark' ? commonDarkStyles(colors) : commonLightStyles(colors);
  const screenStyles = Styles(globalStyles, scheme, colors);

  //Internal States
  const [profileImage, setProfileImage] = useState('');

  const renderProfileCardItem = (item, index) => {
    return (
      <TouchableWithoutFeedback
        key={index}
        onPress={() => {
          item.onPress();
        }}>
        <View style={screenStyles.cardListingItemContainer}>
          <View style={screenStyles.cardListingItemIconContainer}>
            <SvgIcon
              type={item.icon}
              width={20}
              height={20}
              color={colors.activeColor}
            />
          </View>

          <Text style={screenStyles.cardListingItemText}>{item.title}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={screenStyles.mainContainer}>
      <FocusAwareStatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />

      <View style={screenStyles.upperContainer} />

      <View style={screenStyles.container}>
        <View style={screenStyles.infoContainer}>
          <Text style={screenStyles.nameText}>{'Jessica Simpson'}</Text>
          <Text style={screenStyles.emailText}>{'gfx.partner@gmail.com'}</Text>
        </View>

        <View style={screenStyles.itemsContainer}>
          <FlatList
            style={screenStyles.cardListContainer}
            numColumns={3}
            data={Globals.profileList(props.navigation)}
            renderItem={({item, index}) => {
              return renderProfileCardItem(item, index);
            }}
          />
        </View>
      </View>

      <View style={screenStyles.profileImageContainer}>
        <Image
          source={profileImage ? {uri: profileImage.uri} : assets.profile_image}
          style={screenStyles.profileImage}
        />

        <TouchableOpacity
          onPress={() => {
            Utilities.selectImage(response => {
              setProfileImage(response);
            });
          }}
          activeOpacity={0.8}
          style={[
            globalStyles.buttonShadow,
            screenStyles.profileImageAccessoryViewContainer,
          ]}>
          <SvgIcon
            type={IconNames.Camera}
            width={20}
            height={20}
            color={colors.white}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
