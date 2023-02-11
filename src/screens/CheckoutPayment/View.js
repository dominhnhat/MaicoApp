import React, {useState} from 'react';
import {FlatList, TouchableOpacity, useColorScheme, View} from 'react-native';

import BaseView from '../BaseView';
import {Text} from 'react-native-elements';
import Routes from '../../navigation/Routes';
import {Styles} from './Styles';
import AppButton from '../../components/Application/AppButton/View';
import {useTheme} from '@react-navigation/native';
import Globals from '../../utils/Globals';
import {SvgIcon} from '../../components/Application/SvgIcon/View';
import IconNames from '../../../branding/carter/assets/IconNames';

export const CheckoutPayment = props => {
  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const screenStyles = Styles(scheme, colors);

  //Internal states
  const [selectedItem, setSelectedItem] = useState(
    Globals.paymentMethodItems.paymentMethods[0],
  );
  const [paymentMethods, setPaymentMethods] = useState(
    Globals.paymentMethodItems.paymentMethods,
  );

  const renderPaymentMethodItem = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setPaymentMethods(paymentMethods => {
            paymentMethods.map(
              paymentMethod => (paymentMethod.isActive = false),
            );

            paymentMethods[index].isActive = true;
            setSelectedItem(paymentMethods[index]);

            return [...paymentMethods];
          });
        }}
        style={[
          screenStyles.paymentMethodItemParentContainer,
          item.isActive && {
            borderWidth: 2,
            borderColor: colors.activeColor,
          },
        ]}>
        <View style={screenStyles.paymentMethodItemContainer}>
          <SvgIcon
            type={item.icon}
            width={25}
            height={25}
            color={item.isActive ? colors.activeColor : colors.inactiveColor}
          />
          {/*<Image source={item.icon} style={[*/}
          {/*  screenStyles.icon, {*/}
          {/*    tintColor: item.isActive ? colors.activeColor : colors.inactiveColor*/}
          {/*}]} resizeMode={"contain"}/>*/}

          <View style={screenStyles.nameContainer}>
            <View>
              <Text style={screenStyles.nameTitle}>{item.type}</Text>
            </View>

            {item.isActive && (
              <View style={screenStyles.rightIconContainer}>
                <SvgIcon
                  type={IconNames.CheckCircle}
                  width={25}
                  height={25}
                  color={colors.activeColor}
                />

                {/*<Image source={assets.check_circle_icon}*/}
                {/*         style={screenStyles.icon}*/}
                {/*         resizeMode={"contain"}/>*/}
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const onPaymentMethodPress = () => {
    if (
      selectedItem.type === 'Credit Card' ||
      selectedItem.type === 'Apple Pay'
    ) {
      props.navigation.navigate(Routes.CHECKOUT_SELECT_CARD);
    } else if (selectedItem.type === 'Paypal') {
      props.navigation.navigate(Routes.CHECKOUT_SELECT_ACCOUNT);
    } else if (selectedItem.type === 'Self Pickup') {
      props.navigation.navigate(Routes.SELF_PICKUP);
    } else {
      props.navigation.navigate(Routes.CART_SUMMARY);
    }
  };

  return (
    <BaseView
      navigation={props.navigation}
      title={'Payment Method'}
      headerWithBack
      applyBottomSafeArea
      childView={() => {
        return (
          <View style={screenStyles.container}>
            <FlatList
              showsVerticalScrollIndicator={false}
              style={screenStyles.listContainer}
              data={paymentMethods}
              renderItem={({item, index}) => {
                return renderPaymentMethodItem(item, index);
              }}
            />

            <View style={screenStyles.bottomContainer}>
              <AppButton
                title={'Next'}
                onPress={() => {
                  onPaymentMethodPress();
                }}
              />
            </View>
          </View>
        );
      }}
    />
  );
};
