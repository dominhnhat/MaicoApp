import React from 'react';
import {FlatList, Image, useColorScheme, View} from 'react-native';
import BaseView from '../BaseView';
import {Text} from 'react-native-elements';
import {Styles} from './Styles';
import Globals from '../../utils/Globals';
import {useTheme} from '@react-navigation/native';
import AppConfig from '../../../branding/App_config';

const assets = AppConfig.assets.default;

export const Transactions = props => {
  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const screenStyles = Styles(scheme, colors);

  const renderTransactionItem = (item, index) => {
    let icon = assets.master_card_icon;

    if (item.type === 'Visa') {
      icon = assets.visa_icon;
    } else if (item.type === 'Paypal') {
      icon = assets.paypal_coloured_icon;
    }

    return (
      <View
        style={[
          screenStyles.itemContainer,
          index === 0 && screenStyles.transactionFirstItem,
          index === Globals.transactionItems.length - 1 &&
            screenStyles.transactionLastItem,
        ]}>
        <View style={screenStyles.leftIconContainerStyle}>
          <Image source={icon} style={screenStyles.leftIcon} />
        </View>

        <View style={screenStyles.textContainer}>
          <View>
            <Text style={screenStyles.titleText}>{item.type}</Text>
            <Text style={screenStyles.subtitleText}>{item.date}</Text>
          </View>

          <Text style={screenStyles.priceText}>{item.price}</Text>
        </View>
      </View>
    );
  };

  return (
    <BaseView
      navigation={props.navigation}
      title={'Transactions'}
      headerWithBack
      applyBottomSafeArea
      childView={() => {
        return (
          <View style={screenStyles.container}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={Globals.transactionItems}
              renderItem={({item, index}) => {
                return renderTransactionItem(item, index);
              }}
            />
          </View>
        );
      }}
    />
  );
};
