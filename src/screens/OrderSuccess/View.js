import React from 'react';
import {View} from 'react-native';

import BaseView from '../BaseView';
import {Text} from 'react-native-elements';
import Routes from '../../navigation/Routes';
import AppButton from '../../components/Application/AppButton/View';
import {useTheme} from '@react-navigation/native';
import {Styles} from './Styles';
import {SvgIcon} from '../../components/Application/SvgIcon/View';
import IconNames from '../../../branding/carter/assets/IconNames';

export const OrderSuccess = props => {
  const {colors} = useTheme();
  const screenStyles = Styles(colors);

  return (
    <BaseView
      navigation={props.navigation}
      title={'Order Success'}
      headerWithBack
      applyBottomSafeArea
      childView={() => {
        return (
          <View style={screenStyles.container}>
            <View style={screenStyles.mainContainer}>
              <SvgIcon
                type={IconNames.BagShopping}
                width={70}
                height={70}
                color={colors.activeColor}
              />

              <Text style={screenStyles.titleText}>
                Your Order was successful!
              </Text>

              <Text style={screenStyles.subtitleText}>
                You'll get a response within a few minutes
              </Text>
            </View>

            <View style={screenStyles.bottomContainer}>
              <AppButton
                title={'Track Order'}
                onPress={() => {
                  props.navigation.navigate(Routes.TRACK_ORDERS);
                }}
              />
            </View>
          </View>
        );
      }}
    />
  );
};
