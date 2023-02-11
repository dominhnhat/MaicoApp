import React from 'react';
import {Image, ScrollView, useColorScheme, View} from 'react-native';

import BaseView from '../BaseView';
import Routes from '../../navigation/Routes';
import {Divider, Text} from 'react-native-elements';
import {Styles} from './Styles';
import Globals from '../../utils/Globals';
import {AddressItem} from '../../components/Application/AddressItem/View';
import {CardItem} from '../../components/Application/CardItem/View';
import AppButton from '../../components/Application/AppButton/View';
import {useTheme} from '@react-navigation/native';
import {commonDarkStyles} from '../../../branding/carter/styles/dark/Style';
import {commonLightStyles} from '../../../branding/carter/styles/light/Style';

export const CartSummary = props => {
  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const globalStyles =
    scheme === 'dark' ? commonDarkStyles(colors) : commonLightStyles(colors);
  const screenStyles = Styles(scheme, globalStyles, colors);

  const renderCartItems = (item, index) => {
    return (
      <View
        key={index}
        style={[
          screenStyles.cartItemContainer,
          index !== Globals.foodItems.length - 1 && {
            borderBottomWidth: 1,
            borderBottomColor: colors.borderColorLight,
          },
          index === 0 && screenStyles.cartTopBorder,
          index === Globals.foodItems.length - 1 &&
            screenStyles.cartBottomBorder,
          index === Globals.foodItems.length - 1 &&
            screenStyles.cartBottomMargin,
        ]}>
        <Image source={item.image} style={screenStyles.cartItemLeftImage} />

        <View>
          <Text style={screenStyles.cartItemNameText}>{item.title}</Text>
          <Text style={screenStyles.cartItemWeightText}>{item.weight}</Text>
        </View>

        <Text style={screenStyles.cartItemPriceText}>{item.price}</Text>
      </View>
    );
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
              <View style={screenStyles.cardContainer}>
                <CardItem
                  isActive={false}
                  item={Globals.paymentMethodItems.cardItems[2]}
                  onPress={() => {}}
                />
              </View>

              <AddressItem
                isActive={false}
                item={Globals.addressItems[1]}
                onPress={() => {}}
              />

              {Globals.foodItems.map((item, index) => {
                return renderCartItems(item, index);
              })}
            </ScrollView>

            <View style={screenStyles.bottomContainer}>
              <View style={screenStyles.bottomTotalContainer}>
                <View style={screenStyles.receiptItemContainer}>
                  <Text style={screenStyles.boldLabelText}>
                    Subtotal (6) Items:
                  </Text>
                  <Text style={screenStyles.boldLabelValueText}>$36.45</Text>
                </View>

                <Divider style={screenStyles.receiptItemDivider} />

                <View style={screenStyles.receiptItemContainer}>
                  <Text style={screenStyles.normalLabelText}>
                    Promotional Discounts:
                  </Text>
                  <Text style={screenStyles.normalLabelValueText}>-$9.50</Text>
                </View>

                <View style={screenStyles.receiptItemContainer}>
                  <Text style={screenStyles.normalLabelText}>
                    Delivery Charges:
                  </Text>
                  <Text style={screenStyles.normalLabelValueText}>$5.00</Text>
                </View>

                <Divider style={screenStyles.receiptItemDivider} />

                <View
                  style={[
                    screenStyles.receiptItemContainer,
                    {marginBottom: 0},
                  ]}>
                  <Text style={screenStyles.boldLabelText}>Total</Text>
                  <Text style={screenStyles.boldLabelValueText}>$16.99</Text>
                </View>
              </View>

              <View style={screenStyles.bottomButtonContainer}>
                <AppButton
                  title={'Place Order'}
                  onPress={() => {
                    props.navigation.navigate(Routes.ORDER_SUCCESS);
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
