import React, {useRef, useState} from 'react';
import {useColorScheme, View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Text} from 'react-native-elements';
import Routes from '../../../navigation/Routes';
import {StackActions, useTheme} from '@react-navigation/native';
import {Styles} from './Style';
import Globals from '../../../utils/Globals';
import AppButton from '../../../components/Application/AppButton/View';
import {commonDarkStyles} from '../../../../branding/carter/styles/dark/Style';
import {commonLightStyles} from '../../../../branding/carter/styles/light/Style';
import {CircularBanner} from '../../../components/Application/CicularBanner/View';
import {FocusAwareStatusBar} from '../../../components/Application/FocusAwareStatusBar/FocusAwareStatusBar';

export const Variant2Intro = props => {
  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const globalStyles =
    scheme === 'dark' ? commonDarkStyles(colors) : commonLightStyles(colors);
  const screenStyles = Styles(globalStyles, colors);

  //Internal States
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  //References
  let _carouselRef = useRef();

  const _renderItem = ({item, index}) => {
    return (
      <View style={screenStyles.introItemContainer}>
        <CircularBanner
          icon={item.headerImg}
          theme={item.theme}
          width={wp(85)}
          height={wp(85)}
        />
        <Text style={screenStyles.introItemTitle}>{item.title}</Text>
        <Text style={screenStyles.introItemSubtitle}>{item.subtitle}</Text>
      </View>
    );
  };

  return (
    <View style={screenStyles.container}>
      <FocusAwareStatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <View style={screenStyles.introUpperContainer}>
        <Carousel
          ref={c => {
            _carouselRef = c;
          }}
          data={Globals.intro2Items}
          renderItem={_renderItem}
          sliderWidth={wp('100%')}
          itemWidth={wp('100%')}
          onSnapToItem={index => setActiveSlideIndex(index)}
          enableMomentum={true}
          decelerationRate={0.9}
        />

        <Pagination
          dotsLength={Globals.intro2Items.length}
          activeDotIndex={activeSlideIndex}
          dotColor={colors.paginationDotActiveColor}
          inactiveDotColor={colors.paginationDotInActiveColor}
          inactiveDotOpacity={0.4}
          inactiveDotScale={1}
          carouselRef={_carouselRef}
          dotStyle={screenStyles.paginationDotStyle}
          inactiveDotStyle={screenStyles.paginationInactiveDotStyle}
        />
      </View>

      <View style={screenStyles.introLowerContainer}>
        <AppButton
          title={activeSlideIndex === 0 ? 'Get started' : 'Skip'}
          onPress={() => {
            props.navigation.dispatch(
              StackActions.replace(Routes.LOGIN_SCREEN2),
            );
          }}
        />
      </View>
    </View>
  );
};
