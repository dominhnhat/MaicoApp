import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Carousel, {Pagination} from 'react-native-snap-carousel';

import {FoodItem} from '../../../components/Application/FoodItem/View';
import {SearchButton} from '../../../components/Application/SearchButton/View';

import {Styles} from './Styles';
import Routes from '../../../navigation/Routes';
import Globals from '../../../utils/Globals';
import RBSheet from 'react-native-raw-bottom-sheet';
import {FavouritesBottomSheet} from '../../../components/Application/FavouritesBottomSheet/View';
import {CategoryItem} from '../../../components/Application/CategoryItem/View';
import {useTheme} from '@react-navigation/native';
import {commonDarkStyles} from '../../../../branding/carter/styles/dark/Style';
import {commonLightStyles} from '../../../../branding/carter/styles/light/Style';
import {SvgIcon} from '../../../components/Application/SvgIcon/View';
import IconNames from '../../../../branding/carter/assets/IconNames';
import {FocusAwareStatusBar} from '../../../components/Application/FocusAwareStatusBar/FocusAwareStatusBar';
import {getAllCategory} from '../../../services/category-services';
import {getAllProduct} from '../../../services/product-services';
import { CategoryItems } from '../../CategoryItems/View';

//Constants
const slider_data = [
  {
    img: require('./Assets/Images/slider_img_1.png'),
  },
  {
    img: require('./Assets/Images/slider_img_2.png'),
  },
  {
    img: require('./Assets/Images/slider_img_3.png'),
  },
];

export const Variant3Home = props => {
  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const globalStyles =
    scheme === 'dark' ? commonDarkStyles(colors) : commonLightStyles(colors);
  const screenStyles = Styles(globalStyles, scheme, colors);

  //Internal States
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [categorySliderList, setCategorySliderList] = useState(
    Globals.categoryItems,
  );
  const [categoryFoodItemList, setCategoryFoodItemList] = useState(
    Globals.foodItems.slice(0, 4),
  );

  const [categoryItems, setCategoryItems] = useState([]);
  const [foodItems, setfoodItems] = useState([]);

  useEffect(() => {
    getAllCategory().then(c => {
      setCategoryItems(c);
    });
    getAllProduct().then(c => {
      setfoodItems(c);
    });
  }, []);
  //References
  const _carousel = useRef();
  let _favouriteSheet = useRef();

  const renderPromotionSlider = () => {
    return (
      <View style={screenStyles.promotionSliderContainer}>
        <Carousel
          ref={_carousel}
          data={slider_data}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  // props.navigation.navigate(Routes.POPULAR_DEALS);
                }}>
                <Image
                  source={item.img}
                  style={screenStyles.promotionSliderContainer}
                  resizeMode={'cover'}
                />
              </TouchableOpacity>
            );
          }}
          sliderWidth={globalStyles.gridWidth}
          itemWidth={globalStyles.gridWidth}
          onSnapToItem={index => setActiveSlideIndex(index)}
          autoplay
          autoplayInterval={5000}
          loop
        />
        <Pagination
          dotsLength={slider_data.length}
          activeDotIndex={activeSlideIndex}
          dotColor={colors.paginationDotActiveColor}
          dotStyle={screenStyles.promotionSliderActiveDot}
          inactiveDotStyle={screenStyles.promotionSliderInActiveDot}
          inactiveDotColor={colors.primaryBackground}
          inactiveDotOpacity={0.4}
          inactiveDotScale={1}
          carouselRef={_carousel}
          containerStyle={screenStyles.promotionPaginationContainer}
        />
      </View>
    );
  };

  return (
    <View style={[screenStyles.mainWrapper]}>
      <FocusAwareStatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <View
        style={[
          screenStyles.mainContainer,
          {marginTop: Globals.SAFE_AREA_INSET.top},
        ]}>
        {/* <SearchButton
          onPress={() => props.navigation.navigate(Routes.SEARCH)}
        /> */}

        <FlatList
          showsVerticalScrollIndicator={false}
          data={foodItems}
          numColumns={2}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          ListHeaderComponent={() => {
            return (
              <>
                {renderPromotionSlider()}

                {/* <FlatList
                  horizontal
                  pagingEnabled
                  style={screenStyles.categoryContainer}
                  keyExtractor={(item, index) => {
                    return item.id;
                  }}
                  showsHorizontalScrollIndicator={false}
                  data={categorySliderList}
                  renderItem={({item, index}) => (
                    <TouchableOpacity
                      onPress={() => {
                        setCategorySliderList(categorySliderList => {
                          categorySliderList.map(categoryItem => {
                            categoryItem.selected =
                              categoryItem.primaryTitle === item.primaryTitle;
                          });

                          return [...categorySliderList];
                        });

                        setCategoryFoodItemList(
                          Globals.foodItems
                            .sort((a, b) => 0.5 - Math.random())
                            .slice(0, 4),
                        );
                      }}
                      style={{justifyContent: 'flex-end'}}>
                      {item.selected ? (
                        <Text
                          style={[
                            screenStyles.categorySliderActiveText,
                            index === 0 && {marginLeft: 0},
                          ]}>
                          {item.primaryTitle}
                        </Text>
                      ) : (
                        <Text style={screenStyles.categorySliderInActiveText}>
                          {item.primaryTitle}
                        </Text>
                      )}
                    </TouchableOpacity>
                  )}
                /> */}

                {/* <View style={screenStyles.categoryFoodItemParent}>
                  {categoryFoodItemList.map((item, index) => {
                    return (
                      <View key={index} style={screenStyles.categoryFoodItem}>
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
                          cartCountChange={count => {}}
                          favouriteChange={favourite => {
                            if (favourite) {
                              _favouriteSheet.open();
                            }
                          }}
                          navigation={props.navigation}
                        />
                      </View>
                    );
                  })}
                </View> */}

                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate(Routes.CATEGORY_LIST, {
                      categoryItems: categoryItems,
                    });
                  }}>
                  <View style={screenStyles.sectionHeading}>
                    <Text style={screenStyles.sectionHeadingText}>
                      Categories
                    </Text>
                    <SvgIcon
                      type={IconNames.ArrowRight}
                      width={20}
                      height={20}
                      color={colors.subHeadingColor}
                    />
                  </View>
                </TouchableOpacity>

                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={categoryItems}
                  keyExtractor={(item, index) => {
                    return item.id;
                  }}
                  renderItem={({item}) => (
                    <CategoryItem
                      navigation={props.navigation}
                      categoryId={item.id}
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

                {/* <Image
                  source={require('./Assets/Images/banner3.png')}
                  style={screenStyles.tertiaryBannerContainer}
                /> */}

                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate(Routes.POPULAR_DEALS, {
                      items: foodItems,
                    });
                  }}>
                  <View style={screenStyles.sectionHeading}>
                    <Text style={screenStyles.sectionHeadingText}>
                      Popular Deals
                    </Text>

                    <SvgIcon
                      type={IconNames.ArrowRight}
                      width={20}
                      height={20}
                      color={colors.subHeadingColor}
                    />
                  </View>
                </TouchableOpacity>
              </>
            );
          }}
          renderItem={({item}) => (
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
              cartCountChange={count => {}}
              favouriteChange={favourite => {
                if (favourite) {
                  _favouriteSheet.open();
                }
              }}
              navigation={props.navigation}
            />
          )}
        />

        <RBSheet
          ref={ref => {
            _favouriteSheet = ref;
          }}
          height={hp(42)}>
          <FavouritesBottomSheet
            onItemSelect={() => {
              _favouriteSheet.close();
            }}
          />
        </RBSheet>
      </View>
    </View>
  );
};
