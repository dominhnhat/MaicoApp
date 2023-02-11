import React, {useState} from 'react';
import {FlatList, View} from 'react-native';

import BaseView from '../BaseView';
import Routes from '../../navigation/Routes';
import Globals from '../../utils/Globals';
import {CardItem} from '../../components/Application/CardItem/View';
import AppButton from '../../components/Application/AppButton/View';
import Styles from './Styles';

export const CheckoutSelectCard = props => {
  //Internal states
  const [cardsData, setCardsData] = useState(
    Globals.paymentMethodItems.cardItems,
  );

  const onCardItemPress = index => {
    setCardsData(cardsData => {
      cardsData.map(card => (card.isActive = false));

      cardsData[index].isActive = !cardsData[index].isActive;
      return [...cardsData];
    });
  };

  return (
    <BaseView
      navigation={props.navigation}
      title={'Select a Card'}
      headerWithBack
      applyBottomSafeArea
      childView={() => {
        return (
          <View style={Styles.container}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={cardsData}
              style={Styles.listContainer}
              renderItem={({item, index}) => {
                if (index === 0) {
                  return (
                    <View style={Styles.cardFirstItem}>
                      <CardItem
                        showActiveIcon
                        isActive={item.isActive}
                        item={item}
                        onPress={() => {
                          onCardItemPress(index);
                        }}
                      />
                    </View>
                  );
                } else if (
                  index ===
                  Globals.paymentMethodItems.cardItems.length - 1
                ) {
                  return (
                    <View style={Styles.cardLastItem}>
                      <CardItem
                        showActiveIcon
                        isActive={item.isActive}
                        item={item}
                        onPress={() => {
                          onCardItemPress(index);
                        }}
                      />
                    </View>
                  );
                } else {
                  return (
                    <CardItem
                      showActiveIcon
                      isActive={item.isActive}
                      item={item}
                      onPress={() => {
                        onCardItemPress(index);
                      }}
                    />
                  );
                }
              }}
            />

            <View style={Styles.bottomContainer}>
              <AppButton
                title={'Next'}
                onPress={() => {
                  props.navigation.navigate(Routes.CART_SUMMARY);
                }}
              />
            </View>
          </View>
        );
      }}
    />
  );
};
