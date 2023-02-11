import React, {useEffect, useRef, useState} from 'react';
import {FlatList, View} from 'react-native';
import {CategoryItem} from '../../components/Application/CategoryItem/View';
import BaseView from '../BaseView';
import Globals from '../../utils/Globals';
import style from './Style';
import {getAllCategory} from '../../services/category-services';

export const CategoryList = props => {
  // const [categoryItems, setCategoryItems] = useState([]);

  // useEffect(() => {
  //   getAllCategory().then(c => {
  //     setCategoryItems(c);
  //   });
  // }, []);
  const {categoryItems} = props.route.params;
  return (
    <BaseView
      navigation={props.navigation}
      title={'Categories'}
      headerWithBack
      applyBottomSafeArea
      childView={() => {
        return (
          <View style={style.mainContainer}>
            <FlatList
              data={categoryItems}
              numColumns={3}
              keyExtractor={(item, index) => {
                return item.id;
              }}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <CategoryItem
                  navigation={props.navigation}
                  secondaryTitle={item.secondaryTitle}
                  secondaryColor={item.secondaryColor}
                  primaryTitle={item.primaryTitle}
                  primaryColor={item.primaryColor}
                  iconBgColor={item.iconBgColor}
                  iconURI={item.iconURI}
                  bgURI={item.bgURI}
                />
              )}
            />
          </View>
        );
      }}
    />
  );
};
