import React from 'react';
import {useColorScheme, View} from 'react-native';
import {Avatar, Text} from 'react-native-elements';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Styles} from './Styles';
import StarRating from 'react-native-star-rating';
import {useTheme} from '@react-navigation/native';

export const ReviewItem = props => {
  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const itemStyles = Styles(scheme, colors);

  //Props
  const {profileImage, fullName, reviewTime, rating, comment} = props;

  return (
    <View style={itemStyles.container}>
      <View style={itemStyles.upperContainer}>
        <Avatar
          rounded
          size={'medium'}
          source={profileImage}
          containerStyle={itemStyles.profileContainer}
        />

        <View>
          <Text style={itemStyles.nameText}>{fullName}</Text>
          <Text style={itemStyles.timeText}>{reviewTime}</Text>
        </View>
      </View>

      <View style={itemStyles.lowerContainer}>
        <View style={itemStyles.ratingContainer}>
          <Text style={itemStyles.ratingText}>{rating}</Text>

          <StarRating
            disabled={true}
            maxStars={5}
            rating={rating}
            starSize={hp(1.8)}
            fullStarColor={colors.ratingActiveColor}
            emptyStarColor={colors.ratingInActiveColor}
            selectedStar={rating => {}}
          />
        </View>

        <Text style={itemStyles.commentText}>{comment}</Text>
      </View>
    </View>
  );
};
