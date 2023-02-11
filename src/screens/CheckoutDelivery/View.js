import React, {useState} from 'react';
import {TouchableWithoutFeedback, useColorScheme, View} from 'react-native';

import BaseView from '../BaseView';
import {Text} from 'react-native-elements';
import Routes from '../../navigation/Routes';
import {Styles} from './Styles';
import AppButton from '../../components/Application/AppButton/View';
import {useTheme} from '@react-navigation/native';
import {commonDarkStyles} from '../../../branding/carter/styles/dark/Style';
import {commonLightStyles} from '../../../branding/carter/styles/light/Style';

export const CheckoutDelivery = props => {
  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const globalStyles =
    scheme === 'dark' ? commonDarkStyles(colors) : commonLightStyles(colors);

  const screenStyles = Styles(scheme, globalStyles, colors);

  //Internal states
  const [selectedDeliveryIndex, setSelectedDeliveryIndex] = useState(1);

  const renderDeliveryContainer = (title, description, price, index) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          setSelectedDeliveryIndex(selectedDeliveryIndex => {
            if (selectedDeliveryIndex === index) {
              return 0;
            } else {
              return index;
            }
          });
        }}>
        <View
          style={[
            screenStyles.deliveryContainer,
            selectedDeliveryIndex === index && {
              borderWidth: 2,
              borderColor: colors.activeColor,
            },
          ]}>
          <View style={{width: '90%'}}>
            <Text style={screenStyles.deliveryHeader}>{title}</Text>
            <Text style={screenStyles.deliveryDescription}>{description}</Text>
          </View>

          <Text style={screenStyles.deliveryPrice}>{price}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <BaseView
      navigation={props.navigation}
      title={'Shipping Method'}
      headerWithBack
      applyBottomSafeArea
      childView={() => {
        return (
          <View style={screenStyles.container}>
            <View style={screenStyles.upperContainer}>
              {renderDeliveryContainer(
                'Standard Delivery',
                'Order will be delivered between 3 - 5 business days straight to your doorstep.',
                '$15',
                1,
              )}

              {renderDeliveryContainer(
                'Next Day Delivery',
                'Place your order before 6PM and your items will be delivered the next day.',
                '$5',
                2,
              )}

              {renderDeliveryContainer(
                'Nominated Delivery',
                'Pick a particular date from the calendar and order will be delivered on selected data.',
                '$2',
                3,
              )}
            </View>

            <View style={screenStyles.bottomContainer}>
              <AppButton
                title={'Next'}
                onPress={() => {
                  props.navigation.navigate(Routes.CHECKOUT_ADDRESS);
                }}
              />
            </View>
          </View>
        );
      }}
    />
  );
};
