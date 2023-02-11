import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import Routes from '../../navigation/Routes';

import BaseView from '../BaseView';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {InputButton} from '../../components/Application/InputButton/View';
import moment from 'moment';
import AppButton from '../../components/Application/AppButton/View';
import {useTheme} from '@react-navigation/native';
import {Text} from 'react-native-elements';
import {Styles} from './Styles';
import IconNames from '../../../branding/carter/assets/IconNames';
import {AddressItem} from '../../components/Application/AddressItem/View';
import Globals from '../../utils/Globals';

export const SelfPickup = props => {
  //Theme based styling and colors
  const {colors} = useTheme();
  const screenStyles = Styles(colors);

  //Internal States
  const [selectedOutlet, setSelectedOutlet] = useState(0);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState('');
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [time, setTime] = useState('');

  return (
    <BaseView
      navigation={props.navigation}
      title={'Self Pickup'}
      headerWithBack
      applyBottomSafeArea
      childView={() => {
        return (
          <View style={screenStyles.container}>
            <ScrollView
              style={screenStyles.mainContainer}
              showsVerticalScrollIndicator={false}>
              <Text style={screenStyles.typeHeader}>{'Select Outlet'}</Text>

              <AddressItem
                showActiveIcon
                isActive={selectedOutlet === 1}
                item={Globals.selfPickupAddresses[0]}
                onPress={() => {
                  setSelectedOutlet(selectedOutlet => {
                    if (selectedOutlet === 1) {
                      return 0;
                    } else {
                      return 1;
                    }
                  });
                }}
              />

              <AddressItem
                showActiveIcon
                isActive={selectedOutlet === 2}
                item={Globals.selfPickupAddresses[1]}
                onPress={() => {
                  setSelectedOutlet(selectedOutlet => {
                    if (selectedOutlet === 2) {
                      return 0;
                    } else {
                      return 2;
                    }
                  });
                }}
              />

              <AddressItem
                showActiveIcon
                isActive={selectedOutlet === 3}
                item={Globals.selfPickupAddresses[2]}
                onPress={() => {
                  setSelectedOutlet(selectedOutlet => {
                    if (selectedOutlet === 3) {
                      return 0;
                    } else {
                      return 3;
                    }
                  });
                }}
              />

              <Text style={screenStyles.typeHeader}>{'Schedule'}</Text>

              <InputButton
                leftIcon={IconNames.CalendarAlt}
                text={date ? moment(date).format('YYYY-MM-DD') : 'Date'}
                onPress={() => {
                  setShowDatePicker(true);
                }}
              />

              <InputButton
                leftIcon={IconNames.Clock}
                text={time ? moment(time).format('hh:mm A') : 'Time'}
                onPress={() => {
                  setShowTimePicker(true);
                }}
              />
            </ScrollView>

            <View style={screenStyles.bottomContainer}>
              <AppButton
                title={'Next'}
                onPress={() => {
                  props.navigation.navigate(Routes.CART_SUMMARY);
                }}
              />
            </View>

            <DateTimePickerModal
              isVisible={showTimePicker}
              mode="time"
              date={time || new Date()}
              onConfirm={value => {
                const currentTime = value || new Date();
                setTime(currentTime);
                setShowTimePicker(false);
              }}
              onCancel={() => setShowTimePicker(false)}
            />

            <DateTimePickerModal
              isVisible={showDatePicker}
              mode="date"
              date={date || new Date()}
              onConfirm={value => {
                const currentDate = value || new Date();
                setDate(currentDate);
                setShowDatePicker(false);
              }}
              onCancel={() => setShowDatePicker(false)}
            />
          </View>
        );
      }}
    />
  );
};
