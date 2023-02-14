import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableHighlight,
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
import Routes from '../../../navigation/Routes';
import {FocusAwareStatusBar} from '../../../components/Application/FocusAwareStatusBar/FocusAwareStatusBar';

const assets = AppConfig.assets.default;

export const Variant3Profile = props => {
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
          console.log('Press')
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
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <View style={screenStyles.upperContainer}>
        <View style={screenStyles.profileImageContainer}>
          <Image
            source={
              profileImage ? {uri: profileImage.uri} : assets.profile_image
            }
            style={screenStyles.profileImage}
          />

          {/* <TouchableOpacity
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
              color={colors.activeColor}
            />
          </TouchableOpacity> */}
        </View>

        <View style={screenStyles.infoContainer}>
          <Text style={screenStyles.nameText}>{'Jessica Simpson'}</Text>
          <Text style={screenStyles.emailText}>{'gfx.partner@gmail.com'}</Text>
        </View>
      </View>

      {/* <View style={[screenStyles.overlayContainer]}>
        <Text style={screenStyles.ordersText}>{'Orders'}</Text>

        <View style={screenStyles.overlayNestedContainer}>
          <TouchableHighlight
            onPress={() => {
              props.navigation.navigate(Routes.MY_ORDERS);
            }}
            underlayColor={colors.secondaryBackground}
            activeOpacity={0.5}
            style={screenStyles.nestedContainer}>
            <View style={{alignItems: 'center'}}>
              <SvgIcon
                type={IconNames.Wallet}
                width={25}
                height={25}
                color={colors.activeColor}
              />

              <Text style={screenStyles.nestedContainerText}>{'Unpaid'}</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => {
              props.navigation.navigate(Routes.MY_ORDERS);
            }}
            underlayColor={colors.secondaryBackground}
            activeOpacity={0.5}
            style={screenStyles.nestedContainer}>
            <View style={{alignItems: 'center'}}>
              <SvgIcon
                type={IconNames.Box}
                width={25}
                height={25}
                color={colors.activeColor}
              />

              <Text style={screenStyles.nestedContainerText}>{'Pending'}</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => {
              props.navigation.navigate(Routes.MY_ORDERS);
            }}
            underlayColor={colors.secondaryBackground}
            activeOpacity={0.5}
            style={screenStyles.nestedContainer}>
            <View style={{alignItems: 'center'}}>
              <SvgIcon
                type={IconNames.Truck}
                width={28}
                height={25}
                color={colors.activeColor}
              />

              <Text style={screenStyles.nestedContainerText}>{'Shipped'}</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => {
              props.navigation.navigate(Routes.REVIEW_LIST);
            }}
            underlayColor={colors.secondaryBackground}
            activeOpacity={0.5}
            style={screenStyles.nestedContainer}>
            <View style={{alignItems: 'center'}}>
              <SvgIcon
                type={IconNames.StarSharp}
                width={25}
                height={25}
                color={colors.activeColor}
              />

              <Text style={screenStyles.nestedContainerText}>{'Reviews'}</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View> */}
      <View style={screenStyles.container}>
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
    </View>
  );
};
