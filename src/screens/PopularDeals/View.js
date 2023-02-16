import React from 'react';
import { FlatList, View } from 'react-native';

import { FoodItem } from '../../components/Application/FoodItem/View';
import BaseView from '../BaseView';
import Globals from '../../utils/Globals';
import style from './Style';

export const PopularDeals = props => {
  return (
    <BaseView
      navigation={props.navigation}
      title={'Tất cả sản phẩm'}
      headerWithBack
      applyBottomSafeArea
      childView={() => {
        return (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={props.route.params.items}
            numColumns={2}
            renderItem={({ item, index }) => {
              if (index === 0 || index === 1) {
                return (
                  <View style={style.foodFirstItem}>
                    <FoodItem
                      title={item.title}
                      image={item.image}
                      bigImage={item.bigImage}
                      price={item.price}
                      weight={item.weight}
                      discount={item.discount}
                      cartCount={item.cartCount}
                      isFavourite={item.isFavourite}
                      detail={item.detail}
                      ratingValue={item.ratingValue}
                      cartCountChange={count => { }}
                      favouriteChange={favourite => { }}
                      navigation={props.navigation}
                    />
                  </View>
                );
              } else if (index === Globals.foodItems.length - 1) {
                return (
                  <View style={style.foodLastItem}>
                    <FoodItem
                      title={item.title}
                      image={item.image}
                      bigImage={item.bigImage}
                      price={item.price}
                      weight={item.weight}
                      discount={item.discount}
                      cartCount={item.cartCount}
                      isFavourite={item.isFavourite}
                      detail={item.detail}
                      ratingValue={item.ratingValue}
                      cartCountChange={count => { }}
                      favouriteChange={favourite => { }}
                      navigation={props.navigation}
                    />
                  </View>
                );
              } else {
                return (
                  <FoodItem
                    title={item.title}
                    image={item.image}
                    bigImage={item.bigImage}
                    price={item.price}
                    weight={item.weight}
                    discount={item.discount}
                    cartCount={item.cartCount}
                    isFavourite={item.isFavourite}
                    detail={item.detail}
                    ratingValue={item.ratingValue}
                    cartCountChange={count => { }}
                    favouriteChange={favourite => { }}
                    navigation={props.navigation}
                  />
                );
              }
            }}
          />
        );
      }}
    />
  );
};
