import React, {useRef, useState, useEffect} from 'react';
import {useColorScheme, View, TouchableWithoutFeedback, TouchableHighlight} from 'react-native';
import {Overlay, Text} from 'react-native-elements';

import BaseView from '../BaseView';
import AppInput from '../../components/Application/AppInput/View';
import AppButton from '../../components/Application/AppButton/View';
import AppHeader from '../../components/Application/AppHeader/View';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {CustomSwitch} from '../../components/Global/CustomSwitch/View';
import {Styles} from './Styles';
import {useTheme} from '@react-navigation/native';
import {commonDarkStyles} from '../../../branding/carter/styles/dark/Style';
import {commonLightStyles} from '../../../branding/carter/styles/light/Style';
import IconNames from '../../../branding/carter/assets/IconNames';
import {addAddress} from '../../services/user-address-services';
import {getUserId} from '../../services/user-services';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {getAllApartment} from '../../services/apartment-services';
import {SvgIcon} from '../../components/Application/SvgIcon/View';
import {ListItem} from 'react-native-elements';
import AppConfig from '../../../branding/App_config';

const fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;

export const AddAddress = props => {
  //Input reference for KeyboardAwareScrollView
  let inputRef = useRef();

  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
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
    getUserId().then(c => {
      setUserId(c);
    });
  }, []);
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
          <View style={{width: '90%'}}>
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
              Chọn chung cư bạn ở
            </Text>
            <TouchableHighlight  onPress={() => {
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
                title={'Xác nhận'}
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
      title={'Add Address'}
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
                  title={'Chọn chung cư'}
                  onPress={() => {
                    setIsOverlayVisible(true);
                  }}
                />
                <AppInput
                  textInputRef={r => (inputRef = r)}
                  {...globalStyles.secondaryInputStyle}
                  leftIcon={IconNames.CircleUser}
                  placeholder={'Receiver'}
                  value={receiver}
                  onChangeText={receiver => {
                    setReceiver(receiver);
                  }}
                />

                <AppInput
                  textInputRef={r => (inputRef = r)}
                  {...globalStyles.secondaryInputStyle}
                  leftIcon={IconNames.Envelope}
                  placeholder={'Phone'}
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
                  leftIcon={IconNames.Globe}
                  placeholder={'Apartment'}
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
                  leftIcon={IconNames.Mailbox}
                  placeholder={'Apartment Number'}
                  value={apartmentNumber}
                  onChangeText={apartmentNumber => {
                    setApartmentNumber(apartmentNumber);
                  }}
                />
                <AppInput
                  textInputRef={r => (inputRef = r)}
                  {...globalStyles.secondaryInputStyle}
                  leftIcon={IconNames.PhoneFlip}
                  placeholder={'Street'}
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
                  placeholder={'Ward'}
                  value={ward}
                  onChangeText={ward => {
                    setWard(ward);
                  }}
                />
                <AppInput
                  textInputRef={r => (inputRef = r)}
                  {...globalStyles.secondaryInputStyle}
                  leftIcon={IconNames.MapMarkerAlt}
                  placeholder={'District'}
                  value={district}
                  onChangeText={district => {
                    setDistrict(district);
                  }}
                />

                <AppInput
                  textInputRef={r => (inputRef = r)}
                  {...globalStyles.secondaryInputStyle}
                  leftIcon={IconNames.Map}
                  placeholder={'City'}
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
                title={'Add Address'}
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
                    text1: 'Thành công',
                    text2: 'Thêm địa chỉ thành công',
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
