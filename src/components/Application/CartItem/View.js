import React from 'react';
import {Image, TouchableOpacity, useColorScheme, View} from 'react-native';

import {Button, Text} from 'react-native-elements';
import Routes from '../../../navigation/Routes';

import Swipeable from 'react-native-gesture-handler/Swipeable';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Counter} from '../../Global/Counter/View';
import {Styles} from './Style';
import {useTheme} from '@react-navigation/native';
import {SvgIcon} from '../SvgIcon/View';
import IconNames from '../../../../branding/carter/assets/IconNames';

export const CartItem = props => {
  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const itemStyles = Styles(scheme, colors);

  const renderRightActions = (progress, dragX) => {
    return (
      <TouchableOpacity
        onPress={() => {}}
        style={itemStyles.rightSwipeContainer}>
        <SvgIcon
          type={IconNames.TrashAlt}
          width={30}
          height={30}
          color={colors.white}
        />
      </TouchableOpacity>
    );
  };

  return (
    <Button
      onPress={() => {
        props.navigation.navigate(Routes.PRODUCT_DETAIL, {
          item: props,
        });
      }}
      ViewComponent={() => {
        return (
          <Swipeable
            friction={2}
            leftThreshold={80}
            rightThreshold={40}
            renderRightActions={renderRightActions}
            containerStyle={itemStyles.swipeableContainer}>
            <View style={itemStyles.foodItemContainer}>
              <Image
                source={props.image}
                style={itemStyles.foodItemImage}
                resizeMode={'contain'}
              />
              <View>
                <Text style={itemStyles.priceText}>{props.price}</Text>
                <Text style={itemStyles.itemTitle}>{props.title}</Text>
                <Text style={itemStyles.weightText}>{props.weight}</Text>
              </View>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Counter isVertical outerBorder spacing={hp('5')} />
              </View>
            </View>
          </Swipeable>
        );
      }}
    />
  );
};
