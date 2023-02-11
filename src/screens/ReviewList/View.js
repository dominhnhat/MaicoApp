import React from 'react';
import {FlatList, View} from 'react-native';
import {ReviewItem} from '../../components/Application/ReviewItem/View';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import BaseView from '../BaseView';
import Routes from '../../navigation/Routes';
import Globals from '../../utils/Globals';
import IconNames from '../../../branding/carter/assets/IconNames';

export const ReviewList = props => {
  return (
    <BaseView
      navigation={props.navigation}
      title={'Reviews'}
      rightIcon={IconNames.PlusCircle}
      onRightIconPress={() => {
        props.navigation.navigate(Routes.ADD_REVIEW);
      }}
      headerWithBack
      applyBottomSafeArea
      childView={() => {
        return (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={Globals.reviewsList}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            renderItem={({item, index}) => {
              if (index === 0) {
                return (
                  <View
                    style={{
                      marginTop: hp(3),
                    }}>
                    <ReviewItem
                      profileImage={item.profileImage}
                      fullName={item.fullName}
                      reviewTime={item.reviewTime}
                      rating={item.rating}
                      comment={item.comment}
                    />
                  </View>
                );
              } else {
                return (
                  <ReviewItem
                    profileImage={item.profileImage}
                    fullName={item.fullName}
                    reviewTime={item.reviewTime}
                    rating={item.rating}
                    comment={item.comment}
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
