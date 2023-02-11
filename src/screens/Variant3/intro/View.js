import React, {useRef, useState} from 'react';
import {ImageBackground, View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Text} from 'react-native-elements';
import Routes from '../../../navigation/Routes';
import {StackActions} from '@react-navigation/native';
import {Styles} from './Style';
import Globals from '../../../utils/Globals';
import AppButton from '../../../components/Application/AppButton/View';
import {commonLightStyles} from '../../../../branding/carter/styles/light/Style';
import AppConfig from '../../../../branding/App_config';
import {FocusAwareStatusBar} from '../../../components/Application/FocusAwareStatusBar/FocusAwareStatusBar';

const colors = AppConfig.lightColors.default;

export const Variant3Intro = props => {
  //Theme based styling and colors
  const globalStyles = commonLightStyles(colors);
  const screenStyles = Styles(globalStyles, colors);

  //Internal States
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  //References
  let _carouselRef = useRef();

  const _renderItem = ({item, index}) => {
    return (
      <ImageBackground
        source={item.headerImg}
        style={screenStyles.introItemContainer}>
        <Text style={screenStyles.introItemTitle}>{item.title}</Text>
        <Text style={screenStyles.introItemSubtitle}>{item.subtitle}</Text>
      </ImageBackground>
    );
  };

  return (
    <View style={screenStyles.container}>
      <FocusAwareStatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />

      <Carousel
        ref={c => {
          _carouselRef = c;
        }}
        data={Globals.intro3Items}
        renderItem={_renderItem}
        sliderWidth={wp('100%')}
        itemWidth={wp('100%')}
        onSnapToItem={index => setActiveSlideIndex(index)}
      />

      <Pagination
        dotsLength={Globals.intro3Items.length}
        activeDotIndex={activeSlideIndex}
        dotColor={colors.paginationDotActiveColor}
        inactiveDotColor={colors.primaryBackground}
        inactiveDotOpacity={0.8}
        inactiveDotScale={1}
        carouselRef={_carouselRef}
        dotStyle={screenStyles.paginationDotStyle}
        inactiveDotStyle={screenStyles.paginationInactiveDotStyle}
        containerStyle={screenStyles.paginationContainerStyle}
      />

      {/*</View>*/}

      <View style={screenStyles.introLowerContainer}>
        <AppButton
          title={activeSlideIndex === 0 ? 'Get started' : 'Skip'}
          onPress={() => {
            props.navigation.dispatch(
              StackActions.replace(Routes.LOGIN_SCREEN3),
            );
          }}
        />
      </View>
    </View>
  );
};
