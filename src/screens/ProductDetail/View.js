import React, { useRef, useState, useEffect } from 'react';
import {
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Text } from 'react-native-elements';
import Routes from '../../navigation/Routes';
import { Styles } from './Styles';
import AppHeader from '../../components/Application/AppHeader/View';
import { Counter } from '../../components/Global/Counter/View';
import StarRating from 'react-native-star-rating';
import { FavouritesBottomSheet } from '../../components/Application/FavouritesBottomSheet/View';
import RBSheet from 'react-native-raw-bottom-sheet';
import ReadMore from '@fawazahmed/react-native-read-more';
import AppButton from '../../components/Application/AppButton/View';
import { useTheme } from '@react-navigation/native';
import IconNames from '../../../branding/carter/assets/IconNames';
import { SvgIcon } from '../../components/Application/SvgIcon/View';
import { FocusAwareStatusBar } from '../../components/Application/FocusAwareStatusBar/FocusAwareStatusBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addCartItem } from '../../services/cart_services';
import Toast from 'react-native-toast-message';
export const ProductDetail = props => {
  //Theme based styling and colors
  const scheme = useColorScheme();
  const { colors } = useTheme();
  const screenStyles = Styles(scheme, colors);
  const [cartItem, setCartItem] = useState({});
  const [profile, setProfile] = useState({});
  //Internal states
  const [isFavourite, setIsFavourite] = useState(
    props.route.params.item.isFavourite,
  );

  //References
  let sheetRef = useRef();

  //Props
  const { item } = props.route.params;
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log(item);
    getProfile();
  }, [profile]);
  const getProfile = async () => {
    let jsonValue = await AsyncStorage.getItem('@user');
    if (jsonValue) {
      jsonValue = JSON.parse(jsonValue);
      if (jsonValue) {
        if (JSON.stringify(profile) !== JSON.stringify(jsonValue)) {
          setProfile(jsonValue);
        }
      }
    }
  };
  const addItem = async () => {
    if (count > 0) {
      setLoading(true);
      const userid = profile.id;
      const prodid = item.id;
      const newCartItem = await addCartItem({
        user_id: userid,
        product_id: prodid,
        quantity: count,
      });
      if (!newCartItem.error) {
        setLoading(false);
        Toast.show({
          type: 'success',
          text1: 'Thành công',
          text2: 'Thêm sản phẩm vào giỏ hàng',
        });
      }
    } else {
      Toast.show({
        type: 'error',
        text1: 'Lỗi',
        text2: 'Vui lòng thêm số lượng sản phẩm',
      });
    }
  };
  return (
    <View style={screenStyles.container}>
      <FocusAwareStatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />

      <View style={screenStyles.imageContainer}>
        <Image
          source={{ uri: item.bigImage }}
          resizeMode={'contain'}
          style={screenStyles.mainImage}
        />

        <AppHeader
          navigation={props.navigation}
          transparentHeader
          headerWithBack
          darkIcons
          title={'Chi Tiết Sản Phẩm'}
        />
      </View>
      <View style={screenStyles.bottomContainerMain}>
        <View style={screenStyles.bottomContainerUpper}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={screenStyles.infoContainer}>
              <Text style={screenStyles.priceText}>{item.price}</Text>
              {/* <View style={screenStyles.favouriteContainer}>
                <TouchableOpacity
                  onPress={() => {
                    setIsFavourite(isFavourite => {
                      if (!isFavourite) {
                        sheetRef.open();
                      }
                      return !isFavourite;
                    });
                  }}>
                  <SvgIcon
                    type={isFavourite ? IconNames.HeartFilled : IconNames.Heart}
                    width={20}
                    height={20}
                    color={isFavourite ? colors.heartFilled : colors.heartEmpty}
                  />
                </TouchableOpacity>
              </View> */}
            </View>

            <Text style={screenStyles.nameText}>{item.title}</Text>
            <Text style={screenStyles.weightText}>{item.weight}</Text>

            {/* <TouchableWithoutFeedback
              onPress={() => {
                props.navigation.navigate(Routes.REVIEW_LIST);
              }}>
              <View style={screenStyles.ratingContainer}>
                <Text style={screenStyles.ratingText}>{item.ratingValue}</Text>

                <StarRating
                  disabled={true}
                  maxStars={5}
                  rating={item.ratingValue}
                  starSize={hp(2)}
                  fullStarColor={colors.ratingActiveColor}
                  emptyStarColor={colors.ratingInActiveColor}
                  selectedStar={rating => {}}
                  containerStyle={{
                    marginHorizontal: wp('1'),
                  }}
                />
                <View style={{flexDirection: 'row'}}>
                  <Text style={screenStyles.reviewText}>[</Text>
                  <Text style={screenStyles.reviewText}>{'93 reviews'}</Text>
                  <Text style={screenStyles.reviewText}>]</Text>
                </View>
              </View>
            </TouchableWithoutFeedback> */}

            <ReadMore
              seeMoreText={'more'}
              seeLessText={'less'}
              seeMoreStyle={screenStyles.seeMoreStyle}
              seeLessStyle={screenStyles.seeMoreStyle}
              numberOfLines={3}
              style={screenStyles.detailText}>
              {item.detail + item.detail}
            </ReadMore>
          </ScrollView>
        </View>

        <View style={screenStyles.bottomContainerLower}>
          <View style={screenStyles.cartCounterContainer}>
            <Text style={screenStyles.cartCounterText}>SỐ LƯỢNG</Text>
            <Counter setCount={setCount} />
          </View>

          <AppButton
            title={'Thêm vào giỏ hàng'}
            onPress={() => {
              addItem();
            }}
            loading={loading}
          />
        </View>
      </View>

      <RBSheet
        ref={ref => {
          sheetRef = ref;
        }}
        height={hp(42)}>
        <FavouritesBottomSheet
          onItemSelect={() => {
            sheetRef.close();
          }}
        />
      </RBSheet>
    </View>
  );
};
