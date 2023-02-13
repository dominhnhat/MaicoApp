import React, {useState, useEffect} from 'react';
import {Image, ScrollView, useColorScheme, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import BaseView from '../BaseView';
import Routes from '../../navigation/Routes';
import {Divider, Text} from 'react-native-elements';
import {Styles} from './Styles';
import Globals from '../../utils/Globals';
import {AddressItem} from '../../components/Application/AddressItem/View';
import {CardItem} from '../../components/Application/CardItem/View';
import AppButton from '../../components/Application/AppButton/View';
import {useTheme, useIsFocused} from '@react-navigation/native';
import {commonDarkStyles} from '../../../branding/carter/styles/dark/Style';
import {commonLightStyles} from '../../../branding/carter/styles/light/Style';
import {getNextOrderId, addOrder} from '../../services/order-services';
import {getCartItemForShow, clearCart} from '../../services/cart_services';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {addOrderItem} from '../../services/order-item-services';
import {addOrderLog} from '../../services/order-staus-log-services';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
export const CartSummary = props => {
  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const globalStyles =
    scheme === 'dark' ? commonDarkStyles(colors) : commonLightStyles(colors);
  const screenStyles = Styles(scheme, globalStyles, colors);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState({});
  const [orderId, setOrderId] = useState(0);
  const isForcused = useIsFocused();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (isForcused) {
      getOrderCount();
      getProfile();
      getCartItem();
    }
  }, [user]);
  const getProfile = async () => {
    let userValue = await AsyncStorage.getItem('@user');
    if (userValue) {
      userValue = JSON.parse(userValue);
      if (JSON.stringify(user) !== JSON.stringify(userValue)) {
        setUser(userValue);
      }
    }
  };
  const getCartItem = async () => {
    let queryData = await getCartItemForShow(user.id);
    if (queryData) {
      if (JSON.stringify(queryData) !== JSON.stringify(cartItems)) {
        setCartItems(queryData);
        await makeTotal(queryData);
      }
    }
  };
  const getOrderCount = async () => {
    let queryData = await getNextOrderId();
    if (queryData >= 0) {
      if (orderId == 0) {
        console.log(queryData);
        setOrderId(queryData);
      }
    }
  };
  const makeTotal = async items => {
    if (items.length > 0) {
      let subtotal = 0;
      items.map(item => {
        subtotal += item.price * item.cartCount;
      });
      setTotal(subtotal);
    }
  };
  const renderCartItems = (item, index) => {
    return (
      <View
        key={index}
        style={[
          screenStyles.cartItemContainer,
          index !== cartItems.length - 1 && {
            borderBottomWidth: 1,
            borderBottomColor: colors.borderColorLight,
          },
          index === 0 && screenStyles.cartTopBorder,
          index === cartItems.length - 1 && screenStyles.cartBottomBorder,
          index === cartItems.length - 1 && screenStyles.cartBottomMargin,
        ]}>
        <Image
          source={{uri: item.image}}
          style={screenStyles.cartItemLeftImage}
        />

        <View>
          <Text style={screenStyles.cartItemNameText}>{item.title}</Text>
          <Text style={screenStyles.cartItemWeightText}>{item.weight}</Text>
          <Text style={screenStyles.cartItemWeightText}>
            x {item.cartCount}
          </Text>
        </View>

        <Text style={screenStyles.cartItemPriceText}>{item.price}</Text>
      </View>
    );
  };
  const createOrder = async () => {
    setLoading(true);
    await addOrder({
      id: orderId,
      user_id: user.id,
      address_id: props.route.params.address.id,
    });
    await addOrderLog({order_id: orderId});
  };
  const addOrderItems = async () => {
    try {
      cartItems.map(async item => {
        console.log(item);
        await addOrderItem({
          order_id: orderId,
          product_id: item.product_id,
          price: item.price,
          quantity: item.cartCount,
        });
      });
      await clearCart(user.id);
      //props.navigation.navigate(Routes.ORDER_SUCCESS);
    } catch (error) {
      throw error;
    }
  };
  const placeOder = async () => {
    await createOrder();
    await addOrderItems();
    setLoading(false);
    Toast.show({
      type: 'success',
      text1: 'Thành công',
      text2: 'Đơn hàng đã được đặt thành công',
    });
    props.navigation.navigate(Routes.ORDER_SUCCESS);
  };
  return (
    <BaseView
      navigation={props.navigation}
      title={'Cart Summary'}
      childContainerStyle={screenStyles.baseViewChildContainerStyle}
      headerWithBack
      childView={() => {
        return (
          <View style={screenStyles.container}>
            <ScrollView style={screenStyles.listContainer}>
              <View style={{marginTop: hp('3')}}>
                <AddressItem
                  isActive={false}
                  item={props.route.params.address}
                  onPress={() => {}}
                />
              </View>
              {cartItems.map((item, index) => {
                return renderCartItems(item, index);
              })}
            </ScrollView>

            <View style={screenStyles.bottomContainer}>
              <View style={screenStyles.bottomTotalContainer}>
                <Divider style={screenStyles.receiptItemDivider} />
                <View
                  style={[
                    screenStyles.receiptItemContainer,
                    {marginBottom: 0},
                  ]}>
                  <Text style={screenStyles.boldLabelText}>Total</Text>
                  <Text style={screenStyles.boldLabelValueText}>{total}</Text>
                </View>
              </View>

              <View style={screenStyles.bottomButtonContainer}>
                <AppButton
                  title={'Place Order'}
                  onPress={async () => {
                    await placeOder();
                  }}
                />
              </View>
            </View>
          </View>
        );
      }}
    />
  );
};
