import React, { useState, useEffect } from 'react';
import { FlatList, useColorScheme, View } from 'react-native';
import BaseView from '../BaseView';
import Routes from '../../navigation/Routes';
import { CartItem } from '../../components/Application/CartItem/View';
import { Divider, Text } from 'react-native-elements';
import { Styles } from './Styles';
import Globals from '../../utils/Globals';
import AppButton from '../../components/Application/AppButton/View';
import { useTheme, useIsFocused } from '@react-navigation/native';
import { commonDarkStyles } from '../../../branding/carter/styles/dark/Style';
import { commonLightStyles } from '../../../branding/carter/styles/light/Style';
import Config from '../../../branding/carter/configuration/Config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  getCartItemForShow,
  updateCartItem,
  removeCartItem,
} from '../../services/cart_services';
import Toast from 'react-native-toast-message';
export const CartList = props => {
  //Theme based styling and colors
  const { colors } = useTheme();
  const scheme = useColorScheme();
  const globalStyles =
    scheme === 'dark' ? commonDarkStyles(colors) : commonLightStyles(colors);
  const screenStyles = Styles(globalStyles, colors);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState('');
  const [profile, setProfile] = useState({});
  const isForcused = useIsFocused();
  useEffect(() => {
    getProfile();
  }, [profile]);
  useEffect(() => {
    if (isForcused) {
      getCartItem();
    }
  });
  const getProfile = async () => {
    let jsonValue = await AsyncStorage.getItem('@user');
    if (jsonValue) {
      jsonValue = JSON.parse(jsonValue);
      if (jsonValue) {
        if (JSON.stringify(profile) !== JSON.stringify(jsonValue)) {
          setProfile(jsonValue);
        }
      }
    }
  };
  const getCartItem = async () => {
    let { data, total } = await getCartItemForShow(profile.id);
    if (data) {
      console.log(total);
      if (JSON.stringify(data) !== JSON.stringify(cartItems)) {
        setCartItems(data);
        setTotal(total);
      }
    }
  };
  const makeTotal = async items => {
    console.log('alooo');
    if (items.length > 0) {
      let subtotal = 0;
      items.map(item => {
        console.log(typeof item.price);
        subtotal += item.price * item.cartCount;
      });
      setTotal(subtotal);
    } else {
      setTotal(0);
    }
  };
  const removeItem = async id => {
    await removeCartItem(id);
    await getCartItem();
    Toast.show({
      type: 'success',
      text1: 'Thành công',
      text2: 'Xóa sản phẩm thành công',
    });
  };
  const Checkout = () => {
    if (cartItems && cartItems.length > 0) {
      props.navigation.navigate(Routes.CHECKOUT_ADDRESS);
    } else {
      Toast.show({
        type: 'error',
        text1: 'Lỗi',
        text2: 'Vui lòng thêm sản phảm',
      });
    }
  };
  return (
    <View style={screenStyles.mainContainer}>
      <View style={[screenStyles.flatListContainer]}>
        <BaseView
          showAppHeader={true}
          title={'Giỏ Hàng'}
          headerWithBack={false}
          applyBottomSafeArea={false}
          navigation={props.navigation}
          childView={() => {
            return (
              <FlatList
                data={cartItems}
                keyExtractor={(item, index) => {
                  return item.id;
                }}
                renderItem={({ item, index }) =>
                  index === 0 ? (
                    <View style={screenStyles.flatListFirstItemContainer}>
                      <CartItem
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        bigImage={item.bigImage}
                        price={item.priceString}
                        weight={item.weight}
                        discount={item.discount}
                        cartCount={item.cartCount}
                        cartCountChange={async count => {
                          await updateCartItem({ id: item.id, quantity: count });
                          await getCartItem();
                        }}
                        rightAction={removeItem}
                        navigation={props.navigation}
                      />
                    </View>
                  ) : index === Globals.foodItems.length - 1 ? (
                    <View style={screenStyles.flatListLastItemContainer}>
                      <CartItem
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        bigImage={item.bigImage}
                        price={item.priceString}
                        weight={item.weight}
                        discount={item.discount}
                        cartCount={item.cartCount}
                        cartCountChange={async count => {
                          await updateCartItem({ id: item.id, quantity: count });
                          await getCartItem();
                        }}
                        rightAction={removeItem}
                        navigation={props.navigation}
                      />
                    </View>
                  ) : (
                    <CartItem
                      id={item.id}
                      title={item.title}
                      image={item.image}
                      bigImage={item.bigImage}
                      price={item.priceString}
                      weight={item.weight}
                      discount={item.discount}
                      cartCount={item.cartCount}
                      cartCountChange={async count => {
                        await updateCartItem({ id: item.id, quantity: count });
                        await getCartItem();
                      }}
                      rightAction={removeItem}
                      navigation={props.navigation}
                    />
                  )
                }
              />
            );
          }}
        />
      </View>
      <View
        style={[
          screenStyles.bottomContainerParent,
          Config.SELECTED_VARIANT === Routes.INTRO_SCREEN1 &&
          screenStyles.bottomContainerParentVariant1,
        ]}>
        <View style={screenStyles.bottomContainer}>
          {/* <View style={screenStyles.totalContainer}>
            <Text style={screenStyles.subtotalLabelText}>Subtotal</Text>
            <Text style={screenStyles.subtotalValueText}>$16.99</Text>
          </View>

          <View style={screenStyles.totalContainer}>
            <Text style={screenStyles.subtotalLabelText}>Shipping</Text>
            <Text style={screenStyles.subtotalValueText}>$0</Text>
          </View> */}

          <Divider style={screenStyles.horizontalDivider} />

          <View style={screenStyles.totalContainer}>
            <Text style={screenStyles.totalLabelText}>Tổng tiền</Text>
            <Text style={screenStyles.totalValueText}>{total}</Text>
          </View>

          <AppButton
            title={'Tiếp tục'}
            onPress={() => {
              Checkout();
            }}
          />
        </View>
      </View>
    </View>
  );
};
