import React, {useRef, useState} from 'react';
import {ScrollView, TouchableOpacity, useColorScheme, View} from 'react-native';
import {Text} from 'react-native-elements';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import BaseView from '../BaseView';
import StarRating from 'react-native-star-rating';
import {Styles} from './Styles';
import AppInput from '../../components/Application/AppInput/View';
import AppButton from '../../components/Application/AppButton/View';
import Globals from '../../utils/Globals';
import {useTheme} from '@react-navigation/native';
import {SvgIcon} from '../../components/Application/SvgIcon/View';
import IconNames from '../../../branding/carter/assets/IconNames';

export const ApplyFilters = props => {
  //Input reference
  let inputRef = useRef();

  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const screenStyles = Styles(scheme, colors);

  //Internal states
  const [rating, setRating] = useState(4.5);
  const [otherItems, setOtherItems] = useState(Globals.otherFilters);
  const [categories, setCategories] = useState(Globals.filterCategories);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  //Flatlist renderItem for Others type
  const renderOthersItem = (item, index) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => {
          setOtherItems(otherItems => {
            otherItems[index].checked = !otherItems[index].checked;
            return [...otherItems];
          });
        }}
        style={[
          screenStyles.othersItemContainerStyle,
          {
            borderBottomWidth: index === otherItems.length - 1 ? 0 : 1,
            paddingBottom: index === 2 ? hp(1) : hp(1.5),
          },
        ]}>
        <SvgIcon
          type={item.leftIcon}
          width={20}
          height={20}
          color={item.checked ? colors.activeColor : colors.inactiveColor}
        />

        <Text style={screenStyles.othersTitle}>{item.title}</Text>

        <SvgIcon
          type={IconNames.CheckCircle}
          width={20}
          height={20}
          color={item.checked ? colors.activeColor : colors.inactiveColor}
          style={screenStyles.checkCircleImage}
        />
      </TouchableOpacity>
    );
  };

  //Flatlist renderItem for Categories
  const renderCategoryItem = (item, index, showBottomBorder) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => {
          setCategories(categories => {
            categories[index].checked = !categories[index].checked;
            return [...categories];
          });
        }}
        style={[
          screenStyles.categoryParent,
          showBottomBorder && screenStyles.categoryParentBorder,
        ]}>
        <SvgIcon
          type={item.leftIcon}
          width={20}
          height={20}
          color={item.checked ? colors.activeColor : colors.inactiveColor}
        />

        <Text style={screenStyles.categoryTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <BaseView
      navigation={props.navigation}
      title={'Apply Filters'}
      headerWithBack
      applyBottomSafeArea
      childView={() => {
        return (
          <View style={screenStyles.mainContainer}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={screenStyles.scrollViewContainer}>
              <View
                style={[
                  screenStyles.cardContainerStyle,
                  screenStyles.firstCardContainerStyle,
                ]}>
                <Text style={screenStyles.titleStyle}>{'Price Range'}</Text>

                <View style={screenStyles.priceContainer}>
                  <AppInput
                    textInputRef={r => (inputRef = r)}
                    showLeftIcon={false}
                    placeholder={'Min'}
                    containerStyle={screenStyles.inputContainerStyle}
                    inputStyle={{
                      backgroundColor: colors.inputSecondaryBackground,
                    }}
                    value={minPrice}
                    onChangeText={minPrice => {
                      setMinPrice(minPrice);
                    }}
                    keyboardType={'number-pad'}
                  />

                  <AppInput
                    textInputRef={r => (inputRef = r)}
                    showLeftIcon={false}
                    placeholder={'Max'}
                    containerStyle={screenStyles.inputContainerStyle}
                    inputStyle={{
                      backgroundColor: colors.inputSecondaryBackground,
                    }}
                    value={maxPrice}
                    onChangeText={maxPrice => {
                      setMaxPrice(maxPrice);
                    }}
                    keyboardType={'number-pad'}
                  />
                </View>
              </View>

              <View style={screenStyles.cardContainerStyle}>
                <Text style={screenStyles.titleStyle}>{'Star Rating'}</Text>

                <View style={screenStyles.ratingContainerStyle}>
                  <StarRating
                    maxStars={5}
                    rating={rating}
                    starSize={hp(3)}
                    fullStarColor={colors.ratingActiveColor}
                    emptyStarColor={colors.ratingInActiveColor}
                    selectedStar={rating => {
                      setRating(rating);
                    }}
                  />

                  <Text style={screenStyles.ratingTextStyle}>
                    {rating + ' Stars'}
                  </Text>
                </View>
              </View>

              <View
                style={[
                  screenStyles.cardContainerStyle,
                  screenStyles.othersCardContainerStyle,
                ]}>
                <Text style={screenStyles.titleStyle}>{'Others'}</Text>

                {otherItems.map((item, index) => {
                  return renderOthersItem(item, index);
                })}
              </View>

              <View
                style={[
                  screenStyles.cardContainerStyle,
                  screenStyles.categoriesCardParentContainerStyle,
                ]}>
                <Text style={screenStyles.titleStyle}>{'Categories'}</Text>

                <View style={screenStyles.categoriesCardContainerStyle}>
                  {categories.map((item, index) => {
                    return renderCategoryItem(
                      item,
                      index,
                      !(
                        index === categories.length - 2 ||
                        index === categories.length - 1
                      ),
                    );
                  })}
                </View>
              </View>
            </ScrollView>

            <View style={screenStyles.bottomButtonContainer}>
              <AppButton
                title={'Apply Filters'}
                onPress={() => {
                  props.navigation.goBack();
                }}
              />
            </View>
          </View>
        );
      }}
    />
  );
};
