import React, {useState} from 'react';
import {ScrollView, useColorScheme, View} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import BaseView from '../BaseView';
import Routes from '../../navigation/Routes';
import Globals from '../../utils/Globals';
import {AddressItem} from '../../components/Application/AddressItem/View';
import AppButton from '../../components/Application/AppButton/View';
import {Styles} from './Styles';
import {useTheme} from '@react-navigation/native';
import IconNames from '../../../branding/carter/assets/IconNames';
import {AddressContentItem} from '../../components/Application/AddressContentItem/View';

export const MyAddress = props => {
  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const screenStyles = Styles(scheme, colors);

  //Internal states
  const [activeSections, setActiveSections] = useState([]);

  const renderAddressesHeader = (section, index, isActive) => {
    if (index === 0) {
      return (
        <View style={screenStyles.addressFirstItem}>
          <AddressItem
            isTouchable={false}
            isActive={isActive}
            showAnimatedIcon
            item={section}
          />
        </View>
      );
    } else if (index === Globals.addressItems.length - 1) {
      return (
        <View style={screenStyles.addressLastItem}>
          <AddressItem
            isTouchable={false}
            isActive={isActive}
            showAnimatedIcon
            item={section}
          />
        </View>
      );
    } else {
      return (
        <AddressItem
          isTouchable={false}
          isActive={isActive}
          showAnimatedIcon
          item={section}
        />
      );
    }
  };

  const renderAddressesContent = section => {
    return <AddressContentItem data={section} />;
  };

  const _updateSections = allActiveSections => {
    setActiveSections(allActiveSections);
  };

  return (
    <BaseView
      navigation={props.navigation}
      title={'My Address'}
      rightIcon={IconNames.PlusCircle}
      onRightIconPress={() => {
        props.navigation.navigate(Routes.Add_Address);
      }}
      headerWithBack
      applyBottomSafeArea
      childView={() => {
        return (
          <View style={screenStyles.container}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={screenStyles.scrollViewContainer}>
              <Accordion
                sections={Globals.addressItems}
                activeSections={activeSections}
                renderHeader={renderAddressesHeader}
                renderContent={renderAddressesContent}
                underlayColor={'transparent'}
                expandMultiple={false}
                sectionContainerStyle={screenStyles.containerSpacing}
                onChange={_updateSections}
              />
            </ScrollView>

            <View style={screenStyles.bottomContainer}>
              <AppButton
                title={'Save Settings'}
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
