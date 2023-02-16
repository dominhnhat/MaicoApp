import React, { useRef, useState } from 'react';
import { Image, ScrollView, useColorScheme, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Styles } from './Styles';
import Globals from '../../utils/Globals';
import { Text } from 'react-native-elements';
import BaseView from '../BaseView';
import Accordion from 'react-native-collapsible/Accordion';
import { FavouritesBottomSheet } from '../../components/Application/FavouritesBottomSheet/View';
import RBSheet from 'react-native-raw-bottom-sheet';
import { FavouriteItem } from '../../components/Application/FavouriteItem/View';
import AppButton from '../../components/Application/AppButton/View';
import Routes from '../../navigation/Routes';
import { useTheme } from '@react-navigation/native';
import IconNames from '../../../branding/carter/assets/IconNames';

export const Favourites = props => {
  //Theme based styling and colors
  const scheme = useColorScheme();
  const { colors } = useTheme();
  const screenStyles = Styles(scheme, colors);

  //Constants
  const favouriteSheetHeight = hp(42);

  //Internal states
  const [favouritesList, setFavouritesList] = useState(Globals.favouriteItems);
  const [activeSections, setActiveSections] = useState([]);

  //References
  let sheetRef = useRef();

  const renderFavouritesHeader = (section, index, isActive) => {
    if (index === 0) {
      return (
        <View style={screenStyles.favouriteFirstItemContainer}>
          <FavouriteItem
            isActive={isActive}
            item={section}
            onDeletePress={() => {
              setFavouritesList(favouritesList => {
                favouritesList.splice(index, 1);

                return [...favouritesList];
              });
            }}
          />
        </View>
      );
    } else if (index === Globals.favouriteItems.length - 1 && !isActive) {
      return (
        <View style={screenStyles.favouriteLastItemContainer}>
          <FavouriteItem
            isActive={isActive}
            item={section}
            onDeletePress={() => {
              setFavouritesList(favouritesList => {
                favouritesList.splice(index, 1);

                return [...favouritesList];
              });
            }}
          />
        </View>
      );
    } else {
      return (
        <FavouriteItem
          isActive={isActive}
          item={section}
          onDeletePress={() => {
            setFavouritesList(favouritesList => {
              favouritesList.splice(index, 1);

              return [...favouritesList];
            });
          }}
        />
      );
    }
  };

  const renderFavouritesContent = (section, index) => {
    return (
      <View
        style={[
          screenStyles.contentContainerParent,
          index === Globals.favouriteItems.length - 1 &&
          screenStyles.favouriteLastItemContainer,
        ]}>
        {section.items.map((item, index) => {
          return (
            <View key={index} style={screenStyles.contentItemContainer}>
              <View style={[screenStyles.contentItemLeftIconContainer]}>
                <Image
                  source={item.image}
                  style={screenStyles.contentItemLeftIcon}
                />
              </View>

              <View>
                <Text style={screenStyles.titleText}>{item.title}</Text>

                <View style={screenStyles.weightPriceContainer}>
                  <View style={screenStyles.weightContainer}>
                    <Text style={screenStyles.weightText}>{item.weight}</Text>
                  </View>

                  <Text style={screenStyles.priceText}>{item.price}</Text>
                </View>
              </View>
            </View>
          );
        })}

        <View style={screenStyles.contentContainerButton}>
          <AppButton
            title={'Checkout with this list'}
            onPress={() => {
              props.navigation.navigate(Routes.CART_SUMMARY);
            }}
          />
        </View>
      </View>
    );
  };

  const _updateSections = allActiveSections => {
    setActiveSections(allActiveSections);
  };

  return (
    <BaseView
      navigation={props.navigation}
      showAppHeader={true}
      title={'My List'}
      rightIcon={IconNames.PlusCircle}
      onRightIconPress={() => {
        sheetRef.open();
      }}
      headerWithBack={false}
      childView={() => {
        return (
          <View style={screenStyles.container}>
            <ScrollView
              style={screenStyles.container}
              showsVerticalScrollIndicator={false}>
              <Accordion
                sections={favouritesList}
                activeSections={activeSections}
                renderHeader={renderFavouritesHeader}
                renderContent={renderFavouritesContent}
                expandMultiple={false}
                underlayColor={'transparent'}
                sectionContainerStyle={screenStyles.containerSpacing}
                onChange={_updateSections}
              />
            </ScrollView>

            <RBSheet
              ref={ref => {
                sheetRef = ref;
              }}
              height={favouriteSheetHeight}>
              <FavouritesBottomSheet
                onItemSelect={() => {
                  sheetRef.close();
                }}
              />
            </RBSheet>
          </View>
        );
      }}
    />
  );
};
