import React from 'react';
import {
  Animated,
  Image,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {Text} from 'react-native-elements';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Styles} from './Style';
import AppConfig from '../../../../branding/App_config';
import Easing from 'react-native/Libraries/Animated/Easing';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {useTheme} from '@react-navigation/native';
import {commonDarkStyles} from '../../../../branding/carter/styles/dark/Style';
import {commonLightStyles} from '../../../../branding/carter/styles/light/Style';
import IconNames from '../../../../branding/carter/assets/IconNames';
import {SvgIcon} from '../SvgIcon/View';

const PropTypes = require('prop-types');

const assets = AppConfig.assets.default;

//Animation Constants
const activeAnimConfig = {
  toValue: 1,
  duration: 300,
  easing: Easing.linear,
  useNativeDriver: true,
};

const deActiveAnimConfig = {
  toValue: 0,
  duration: 300,
  easing: Easing.linear,
  useNativeDriver: true,
};

export const CardItem = props => {
  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const globalStyles =
    scheme === 'dark' ? commonDarkStyles(colors) : commonLightStyles(colors);

  const itemStyles = Styles(scheme, colors);

  //Props
  const {
    isTouchable,
    isActive,
    item,
    showActiveIcon,
    showAnimatedIcon,
    onPress,
  } = props;

  const touchableComponent = child => {
    return (
      <TouchableOpacity
        onPress={() => {
          onPress();
        }}
        style={[itemStyles.container, isActive && itemStyles.activeContainer]}>
        <View style={itemStyles.touchableChildContainer}>{child}</View>
      </TouchableOpacity>
    );
  };

  const renderRightActions = (progress, dragX) => {
    return (
      <TouchableOpacity
        onPress={() => {}}
        style={itemStyles.rightSwipeableContainer}>
        <SvgIcon
          type={IconNames.TrashAlt}
          width={30}
          height={30}
          color={colors.white}
        />
      </TouchableOpacity>
    );
  };

  const nonTouchableComponent = child => {
    return (
      <View
        style={[
          itemStyles.container,
          {marginBottom: 0},
          isActive && itemStyles.nonTouchableContainer,
        ]}>
        <Swipeable
          key={item.key}
          friction={2}
          leftThreshold={80}
          rightThreshold={40}
          renderRightActions={renderRightActions}
          containerStyle={itemStyles.swipeableContainer}>
          {child}
        </Swipeable>
      </View>
    );
  };

  const child = () => {
    let icon = assets.master_card_icon;

    if (item.type === 'Visa Card') {
      icon = assets.visa_icon;
    } else if (item.type === 'Paypal') {
      icon = assets.paypal_coloured_icon;
    }

    const spin = item.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg'],
    });

    if (isActive) {
      Animated.timing(item.spinValue, activeAnimConfig).start();
    } else {
      Animated.timing(item.spinValue, deActiveAnimConfig).start();
    }

    return (
      <View style={itemStyles.childContainer}>
        {item.isDefault && (
          <View style={itemStyles.defaultContainer}>
            <Text style={globalStyles.promotionalTextStyle}>{'DEFAULT'}</Text>
          </View>
        )}

        <View style={itemStyles.childInnerContainer}>
          <View style={itemStyles.leftImageContainer}>
            <Image
              source={icon}
              style={itemStyles.leftImage}
              resizeMode={'contain'}
            />
          </View>

          <View>
            <Text style={itemStyles.titleText}>
              {item.type === 'Paypal' ? item.name : item.type}
            </Text>
            <Text style={[itemStyles.subtitleText, {marginVertical: hp(0.5)}]}>
              {item.type === 'Paypal' ? item.email : item.cardNo}
            </Text>

            <View style={itemStyles.centerTextContainer}>
              {item.type !== 'Paypal' && (
                <>
                  <Text style={itemStyles.subtitleText}>{'Expiry: '}</Text>
                  <Text style={[itemStyles.subtitleText, {marginRight: wp(2)}]}>
                    {item.expiry}
                  </Text>
                  <Text style={itemStyles.subtitleText}>{'CVV: '}</Text>
                  <Text style={itemStyles.subtitleText}>{item.CVV}</Text>
                </>
              )}

              {item.type === 'Paypal' && (
                <>
                  <Text style={itemStyles.subtitleText}>{'Added on: '}</Text>
                  <Text style={itemStyles.subtitleText}>{item.addedOn}</Text>
                </>
              )}
            </View>
          </View>
        </View>

        {showActiveIcon && isActive && (
          <View style={itemStyles.rightIconContainer}>
            <SvgIcon
              type={IconNames.CheckCircle}
              width={22}
              height={22}
              color={colors.activeColor}
            />
          </View>
        )}

        {showAnimatedIcon && (
          <View style={itemStyles.rightIconContainer}>
            <Animated.Image
              source={assets.drop_down_icon}
              style={[{transform: [{rotate: spin}]}, itemStyles.rightIcon]}
              resizeMode={'contain'}
            />
          </View>
        )}
      </View>
    );
  };

  return isTouchable
    ? touchableComponent(child())
    : nonTouchableComponent(child());
};

CardItem.propTypes = {
  isTouchable: PropTypes.bool,
  isActive: PropTypes.bool,
  item: PropTypes.any,
  onPress: PropTypes.func,
  showActiveIcon: PropTypes.bool,
  showAnimatedIcon: PropTypes.bool,
};

CardItem.defaultProps = {
  isTouchable: true,
  showActiveIcon: false,
  showAnimatedIcon: false,
};
