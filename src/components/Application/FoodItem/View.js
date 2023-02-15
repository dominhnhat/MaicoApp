import React, { useEffect, useState } from 'react';
import {
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from 'react-native';

import { Text } from 'react-native-elements';
import Routes from '../../../navigation/Routes';
import { Styles } from './Styles';
import { useTheme } from '@react-navigation/native';
import { SvgIcon } from '../SvgIcon/View';
import IconNames from '../../../../branding/carter/assets/IconNames';

export const FoodItem = props => {
  //Theme based styling and colors
  const { colors } = useTheme();
  const scheme = useColorScheme();
  const itemStyles = Styles(scheme, colors);

  //Internal states
  const [cartCount, setCartCount] = useState(props.cartCount);
  const [favourite, setFavourite] = useState(
    props.isFavourite ? props.isFavourite : false,
  );

  useEffect(() => {
    props.favouriteChange(favourite);
  }, [favourite]);

  useEffect(() => {
    props.cartCountChange(cartCount);
  }, [cartCount]);

  const _favouriteChange = () => {
    setFavourite(favourite => {
      return !favourite;
    });
  };

  const _cartCountChange = behavior => {
    if (behavior === 'add') {
      setCartCount(cartCount => {
        return cartCount + 1;
      });
    } else if (behavior === 'subtract' && !(cartCount === 0)) {
      setCartCount(cartCount => {
        return cartCount - 1;
      });
    }
  };

  const { title, image, price, weight, discount, navigation } = props;

  return (
    <View>
      <View style={itemStyles.container}>
        <View style={itemStyles.upperContainer}>
          <View style={itemStyles.discountContainer}>
            {discount && (
              <View style={itemStyles.discountBanner}>
                <Text style={itemStyles.discountText}>- {discount}</Text>
              </View>
            )}
          </View>
          {/* <View style={itemStyles.favouriteContainer}>
            <TouchableOpacity
              onPress={() => {
                _favouriteChange();
              }}>
              <View>
                <SvgIcon
                  type={favourite ? IconNames.HeartFilled : IconNames.Heart}
                  width={20}
                  height={20}
                  color={favourite ? colors.heartFilled : colors.heartEmpty}
                />
              </View>
            </TouchableOpacity>
          </View> */}
        </View>

        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate(Routes.PRODUCT_DETAIL, {
              item: props,
            });
          }}>
          <View style={[itemStyles.mainContainer]}>
            <Image source={{ uri: image }} style={itemStyles.foodItemImage} />
            <View style={itemStyles.infoContainer}>
              <Text style={itemStyles.priceText}>{price}</Text>
              <Text style={itemStyles.titleText}>{title}</Text>
              <Text style={itemStyles.weightText}>{weight}</Text>
            </View>
            <View style={itemStyles.bottomContainer}>
              {cartCount === 0 ? (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(Routes.PRODUCT_DETAIL, {
                      item: props,
                    });
                  }}
                  style={itemStyles.addToCartContainer}>
                  <SvgIcon
                    type={IconNames.BagShopping}
                    width={20}
                    height={20}
                    color={colors.activeColor}
                    style={itemStyles.addCartIcon}
                  />

                  <Text style={itemStyles.addCartText}>{'Thêm vào giỏ hàng'}</Text>
                </TouchableOpacity>
              ) : (
                <View style={itemStyles.cartUpdateContainer}>
                  <TouchableOpacity
                    style={[
                      itemStyles.cartUpdateActionContainer,
                      { borderRightWidth: 1 },
                    ]}
                    onPress={() => {
                      _cartCountChange('subtract');
                    }}>
                    <SvgIcon
                      type={IconNames.Minus}
                      width={15}
                      height={15}
                      color={colors.activeColor}
                    />
                  </TouchableOpacity>

                  <Text style={itemStyles.cartNumberText}>{cartCount}</Text>

                  <TouchableOpacity
                    style={[
                      itemStyles.cartUpdateActionContainer,
                      { borderLeftWidth: 1 },
                    ]}
                    onPress={() => {
                      _cartCountChange('add');
                    }}>
                    <SvgIcon
                      type={IconNames.Plus}
                      width={15}
                      height={15}
                      color={colors.activeColor}
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};
