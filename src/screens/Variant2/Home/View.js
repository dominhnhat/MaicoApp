import React, {useRef, useState} from 'react';
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
import {useTheme} from '@react-navigation/native';
import {commonDarkStyles} from '../../../../branding/carter/styles/dark/Style';
import {commonLightStyles} from '../../../../branding/carter/styles/light/Style';
import IconNames from '../../../../branding/carter/assets/IconNames';
import {SvgIcon} from '../../../components/Application/SvgIcon/View';
import {FocusAwareStatusBar} from '../../../components/Application/FocusAwareStatusBar/FocusAwareStatusBar';

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

export const Variant2Home = props => {
  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const globalStyles =
    scheme === 'dark' ? commonDarkStyles(colors) : commonLightStyles(colors);
  const screenStyles = Styles(globalStyles, scheme, colors);

  //Internal States
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

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
                  props.navigation.navigate(Routes.POPULAR_DEALS);
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
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />

      <View style={screenStyles.mainContainer}>
        <SearchButton
          onPress={() => props.navigation.navigate(Routes.SEARCH)}
        />

        <FlatList
          showsVerticalScrollIndicator={false}
          data={Globals.foodItems}
          numColumns={2}
          ListHeaderComponent={() => {
            return (
              <>
                {renderPromotionSlider()}

                <View style={screenStyles.secondarySliderContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate(Routes.POPULAR_DEALS);
                    }}>
                    <Image
                      source={require('./Assets/Images/banner1.png')}
                      style={screenStyles.secondaryBannerContainer}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate(Routes.POPULAR_DEALS);
                    }}>
                    <Image
                      source={require('./Assets/Images/banner2.png')}
                      style={screenStyles.secondaryBannerContainer}
                    />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate(Routes.POPULAR_DEALS);
                  }}>
                  <Image
                    source={require('./Assets/Images/banner3.png')}
                    style={screenStyles.tertiaryBannerContainer}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate(Routes.POPULAR_DEALS);
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
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={({item, index}) => {
            if (
              index === Globals.foodItems.length - 2 ||
              index === Globals.foodItems.length - 1
            ) {
              return (
                <View style={screenStyles.foodLastItems}>
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
                  cartCountChange={count => {}}
                  favouriteChange={favourite => {
                    if (favourite) {
                      _favouriteSheet.open();
                    }
                  }}
                  navigation={props.navigation}
                />
              );
            }
          }}
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
