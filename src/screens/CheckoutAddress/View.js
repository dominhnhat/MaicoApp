import React, {useState, useEffect} from 'react';
import {FlatList, View} from 'react-native';

import BaseView from '../BaseView';
import Routes from '../../navigation/Routes';
import Globals from '../../utils/Globals';
import {AddressItem} from '../../components/Application/AddressItem/View';
import AppButton from '../../components/Application/AppButton/View';
import {AddressContentItem} from '../../components/Application/AddressContentItem/View';
import {getAddressesByUserId} from '../../services/user-address-services';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import {useIsFocused} from '@react-navigation/native';
import {useTheme} from '@react-navigation/native';
import {Styles} from './Styles';

export const CheckoutAddress = props => {
  //Theme based styling and colors
  const {colors} = useTheme();
  const screenStyles = Styles(colors);
  const [addresses, setAddresses] = useState([]);
  const [activeAddress, setActiveAddress] = useState({});
  const [profile, setProfile] = useState({});
  const isForcused = useIsFocused();
  useEffect(() => {
    if (isForcused) {
      getProfile().then(() => {
        getAddressesByUserId(profile.id).then(c => {
          console.log(c);
          setAddresses(c);
        });
      });
    }
  },[profile]);

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
  const onAddressItemPress = index => {
    setAddresses(addresses => {
      addresses.map(address => (address.isActive = false));

      addresses[index].isActive = !addresses[index].isActive;
      console.log(addresses[index]);
      setActiveAddress(addresses[index]);
      Toast.show({
        type: 'success',
        text1: 'Thành công',
        text2: 'chọn thông tin thành công',
      });
      return [...addresses];
    });
  };
  const Checkout = () => {
    if (activeAddress && activeAddress?.id) {
      props.navigation.navigate(Routes.CART_SUMMARY, {address: activeAddress});
    } else {
      Toast.show({
        type: 'error',
        text1: 'Lỗi',
        text2: 'Vui lòng chọn thông tin nhận hàng',
      });
    }
  };
  return (
    <BaseView
      navigation={props.navigation}
      title={'Select Address'}
      headerWithBack
      applyBottomSafeArea
      childView={() => {
        return (
          <View style={screenStyles.container}>
            <FlatList
              showsVerticalScrollIndicator={false}
              style={screenStyles.listContainer}
              data={addresses}
              renderItem={({item, index}) => {
                if (index === 0) {
                  return (
                    <View style={screenStyles.addressFirstItem}>
                      <AddressItem
                        showActiveIcon
                        isActive={item.isActive}
                        item={item}
                        onPress={() => {
                          onAddressItemPress(index);
                        }}
                      />
                    </View>
                  );
                } else if (index === addresses.length - 1) {
                  return (
                    <View style={screenStyles.addressLastItem}>
                      <AddressItem
                        showActiveIcon
                        isActive={item.isActive}
                        item={item}
                        onPress={() => {
                          onAddressItemPress(index);
                        }}
                      />
                    </View>
                  );
                } else {
                  return (
                    <AddressItem
                      showActiveIcon
                      isActive={item.isActive}
                      item={item}
                      onPress={() => {
                        onAddressItemPress(index);
                      }}
                    />
                  );
                }
              }}
            />

            <View style={screenStyles.bottomContainer}>
              <AppButton
                title={'Next'}
                onPress={() => {
                  Checkout();
                }}
              />
            </View>
          </View>
        );
      }}
    />
  );
};
