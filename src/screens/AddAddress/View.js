import React, { useRef, useState, useEffect } from 'react';
import { useColorScheme, View, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import { Overlay, Text } from 'react-native-elements';

import BaseView from '../BaseView';
import AppInput from '../../components/Application/AppInput/View';
import AppButton from '../../components/Application/AppButton/View';
import AppHeader from '../../components/Application/AppHeader/View';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { CustomSwitch } from '../../components/Global/CustomSwitch/View';
import { Styles } from './Styles';
import { useTheme } from '@react-navigation/native';
import { commonDarkStyles } from '../../../branding/carter/styles/dark/Style';
import { commonLightStyles } from '../../../branding/carter/styles/light/Style';
import IconNames from '../../../branding/carter/assets/IconNames';
import { addAddress } from '../../services/user-address-services';
import { getUserId } from '../../services/user-services';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { getAllApartment } from '../../services/apartment-services';
import { SvgIcon } from '../../components/Application/SvgIcon/View';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ListItem } from 'react-native-elements';
import AppConfig from '../../../branding/App_config';

const fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;

export const AddAddress = props => {
  //Input reference for KeyboardAwareScrollView
  let inputRef = useRef();

  //Theme based styling and colors
  const scheme = useColorScheme();
  const { colors } = useTheme();
  const screenStyles = Styles(colors);
  const globalStyles =
    scheme === 'dark' ? commonDarkStyles(colors) : commonLightStyles(colors);

  //Internal input field states
  const [receiver, setReceiver] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStreet] = useState('');
  const [ward, setWard] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [apartment, setApartment] = useState('');
  const [apartmentNumber, setApartmentNumber] = useState('');

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const [apartmentList, setApartmentList] = useState('');
  useEffect(() => {
    getAllApartment().then(c => {
      setApartmentList(c);
    });
  }, []);

  const [userId, setUserId] = useState(0);
  useEffect(() => {
    getProfile();
  }, []);
  const getProfile = async () => {
    let userValue = await AsyncStorage.getItem('@user');
    if (userValue) {
      userValue = JSON.parse(userValue);
      if (JSON.stringify(userId) !== JSON.stringify(userValue.id)) {
        setUserId(userValue.id);
      }
    }
  };
  const [selectedApartmentIndex, setSelectedApartmentIndex] = useState(0);
  const renderApartmentContainer = (title, description, index) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          setSelectedApartmentIndex(selectedApartmentIndex => {
            if (selectedApartmentIndex === index) {
              return -1;
            } else {
              return index;
            }
          });
        }}
        key={index}>
        <View
          style={[
            screenStyles.deliveryContainer,
            selectedApartmentIndex === index && {
              borderWidth: 2,
              borderColor: colors.activeColor,
            },
          ]}>
          <View style={{ width: '90%' }}>
            <Text style={screenStyles.deliveryHeader}>{title}</Text>
            <Text style={screenStyles.deliveryDescription}>{description}</Text>
          </View>

          {/* <Text style={screenStyles.deliveryPrice}>{price}</Text> */}
        </View>
      </TouchableWithoutFeedback>
    );
  };
  const apartmentSelectorOverlay = () => {
    return (
      <Overlay isVisible={isOverlayVisible}>

        <View
          style={{
            justifyContent: 'space-between', //Centered horizontally
            alignItems: 'center', //Centered vertically
            flexDirection: 'row',
            marginBottom: 10,
          }}>
          <Text
            style={{
              fontFamily: fonts.RUBIK_MEDIUM,
              fontSize: Typography.P1,
              color: '#000000',
              textAlign: 'center',
            }}>
            Ch???n chung c?? b???n ???
          </Text>
          <TouchableHighlight onPress={() => {
            setIsOverlayVisible(false);
          }}>
            <SvgIcon
              style={{}}
              color={'#000000'}
              width={20}
              height={20}
              type={IconNames.Close}

            />
          </TouchableHighlight>

        </View>

        <View style={screenStyles.container}>
          <View style={screenStyles.upperContainer}>
            {apartmentList &&
              apartmentList.map((item, index) => {
                return renderApartmentContainer(
                  item.name,
                  `${item.street}, ${item.city}`,
                  index,
                );
              })}
          </View>
          <View style={screenStyles.bottomButton}>
            <AppButton
              title={'X??c nh???n'}
              onPress={() => {
                setCity(apartmentList[selectedApartmentIndex].city);
                setWard(apartmentList[selectedApartmentIndex].ward);
                setStreet(apartmentList[selectedApartmentIndex].street);
                setApartment(apartmentList[selectedApartmentIndex].name);
                setDistrict(apartmentList[selectedApartmentIndex].district);

                setIsOverlayVisible(false);
              }}
            />
          </View>
        </View>

      </Overlay>
    );
  };

  return (
    <BaseView
      navigation={props.navigation}
      title={'Th??m ?????a Ch???'}
      headerWithBack
      applyBottomSafeArea
      childView={() => {
        return (
          <View style={screenStyles.mainContainer}>
            <KeyboardAwareScrollView
              keyboardShouldPersistTaps={'never'}
              getTextInputRefs={() => {
                return [inputRef];
              }}
              contentContainerStyle={screenStyles.parentContainer}
              showsVerticalScrollIndicator={false}>
              <View>
                <AppButton
                  title={'Ch???n chung c??'}
                  onPress={() => {
                    setIsOverlayVisible(true);
                  }}
                />
                <AppInput
                  textInputRef={r => (inputRef = r)}
                  {...globalStyles.secondaryInputStyle}
                  leftIcon={IconNames.CircleUser}
                  placeholder={'Ng?????i nh???n'}
                  value={receiver}
                  onChangeText={receiver => {
                    setReceiver(receiver);
                  }}
                />

                <AppInput
                  textInputRef={r => (inputRef = r)}
                  {...globalStyles.secondaryInputStyle}
                  leftIcon={IconNames.PhoneFlip}
                  placeholder={'S??? ??i???n tho???i'}
                  value={phone}
                  // keyboardType={'email-address'}
                  // keyboardType={'email-address'}
                  onChangeText={phone => {
                    setPhone(phone);
                  }}
                />

                <AppInput
                  textInputRef={r => (inputRef = r)}
                  {...globalStyles.secondaryInputStyle}
                  editable={false}
                  leftIcon={IconNames.Apartment}
                  placeholder={'Chung c??'}
                  value={apartment}
                  onChangeText={apartment => {
                    setApartment(apartment);
                  }}
                  onPressOut={() => {
                    setIsOverlayVisible(true);
                  }}
                />

                <AppInput
                  textInputRef={r => (inputRef = r)}
                  {...globalStyles.secondaryInputStyle}
                  leftIcon={IconNames.ApartmentNumber}
                  placeholder={'M?? c??n'}
                  value={apartmentNumber}
                  onChangeText={apartmentNumber => {
                    setApartmentNumber(apartmentNumber);
                  }}
                />
                <AppInput
                  textInputRef={r => (inputRef = r)}
                  {...globalStyles.secondaryInputStyle}
                  leftIcon={IconNames.Road}
                  placeholder={'???????ng'}
                  value={street}
                  keyboardType={'phone-pad'}
                  onChangeText={street => {
                    setStreet(street);
                  }}
                />

                <AppInput
                  textInputRef={r => (inputRef = r)}
                  {...globalStyles.secondaryInputStyle}
                  leftIcon={IconNames.MapMarkerAlt}
                  placeholder={'Ph?????ng'}
                  value={ward}
                  onChangeText={ward => {
                    setWard(ward);
                  }}
                />
                <AppInput
                  textInputRef={r => (inputRef = r)}
                  {...globalStyles.secondaryInputStyle}
                  leftIcon={IconNames.MapMarkerAlt}
                  placeholder={'Qu???n'}
                  value={district}
                  onChangeText={district => {
                    setDistrict(district);
                  }}
                />

                <AppInput
                  textInputRef={r => (inputRef = r)}
                  {...globalStyles.secondaryInputStyle}
                  leftIcon={IconNames.MapMarkerAlt}
                  placeholder={'Th??nh ph???'}
                  value={city}
                  onChangeText={city => {
                    setCity(city);
                  }}
                />
                {/* <View style={screenStyles.switchContainer}>
                  <CustomSwitch
                    initialValue={false}
                    onValueChange={value => {}}
                  />

                  <Text style={screenStyles.defaultText}>{'Make Default'}</Text>
                </View> */}
              </View>
            </KeyboardAwareScrollView>

            <View style={screenStyles.bottomButton}>
              <AppButton
                title={'Th??m ?????a ch???'}
                onPress={async () => {
                  await addAddress({
                    user_id: userId,
                    receiver,
                    city,
                    ward,
                    street,
                    apartment_name: apartment,
                    apartment_number: apartmentNumber,
                    contact: phone,
                    is_default: false,
                  });
                  Toast.show({
                    type: 'success',
                    text1: 'Th??nh c??ng',
                    text2: 'Th??m ?????a ch??? th??nh c??ng',
                  });
                }}
              />
            </View>
            {apartmentSelectorOverlay()}
          </View>
        );
      }}
    />
  );
};
