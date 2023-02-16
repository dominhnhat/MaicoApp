import React, { useRef, useState } from 'react';
import { useColorScheme, View } from 'react-native';

import { Text } from 'react-native-elements';
import { Styles } from './Style';
import { useTheme } from '@react-navigation/native';
import AppInput from '../AppInput/View';
import IconNames from '../../../../branding/carter/assets/IconNames';
import { CustomSwitch } from '../../Global/CustomSwitch/View';
import AppButton from '../AppButton/View';
import { updateAddress } from '../../../services/user-address-services';

export const AddressContentItem = props => {
  //References
  let inputRef = useRef();

  //Theme based styling and colors
  const scheme = useColorScheme();
  const { colors } = useTheme();
  const itemStyles = Styles(scheme, colors);

  //Internal states
  const [name, setName] = useState(props.data.name);
  const [street, setStreet] = useState(props.data.street);
  const [city, setCity] = useState(props.data.city);
  const [district, setDistrict] = useState(props.data.district);
  const [ward, setWard] = useState(props.data.ward);
  const [apartment, setApartment] = useState(props.data.apartment);
  const [apartmentNumber, setApartmentNumber] = useState(
    props.data.apartment_number,
  );
  const [phone, setPhone] = useState(props.data.phone);

  return (
    <View style={itemStyles.contentContainer}>
      <AppInput
        textInputRef={r => (inputRef = r)}
        leftIcon={IconNames.CircleUser}
        placeholder={'Người nhận'}
        value={name}
        onChangeText={name => {
          setName(name);
        }}
      />
      <AppInput
        textInputRef={r => (inputRef = r)}
        leftIcon={IconNames.PhoneFlip}
        placeholder={'Số điện thoại'}
        value={phone}
        onChangeText={phone => {
          setPhone(phone);
        }}
      />

      <AppInput
        textInputRef={r => (inputRef = r)}
        leftIcon={IconNames.Road}
        placeholder={'Đường'}
        value={street}
        onChangeText={street => {
          setStreet(street);
        }}
      />
      <AppInput
        textInputRef={r => (inputRef = r)}
        leftIcon={IconNames.MapMarkerAlt}
        placeholder={'Phường'}
        value={ward}
        onChangeText={ward => {
          setWard(ward);
        }}
      />
      <AppInput
        textInputRef={r => (inputRef = r)}
        leftIcon={IconNames.MapMarkerAlt}
        placeholder={'Quận'}
        value={district}
        onChangeText={district => {
          setDistrict(district);
        }}
      />
      <AppInput
        textInputRef={r => (inputRef = r)}
        leftIcon={IconNames.MapMarkerAlt}
        placeholder={'Thành phố'}
        value={city}
        onChangeText={city => {
          setCity(city);
        }}
      />

      <AppInput
        textInputRef={r => (inputRef = r)}
        leftIcon={IconNames.Apartment}
        placeholder={'Chung cư'}
        value={apartment}
        onChangeText={apartment => {
          setApartment(apartment);
        }}
      />
      <AppInput
        textInputRef={r => (inputRef = r)}
        leftIcon={IconNames.ApartmentNumber}
        placeholder={'Mã căn'}
        value={apartmentNumber}
        onChangeText={apartmentNumber => {
          setApartmentNumber(apartmentNumber);
        }}
      />

      <View style={itemStyles.defaultContainer}>
        <CustomSwitch initialValue={false} onValueChange={value => { }} />

        <Text style={itemStyles.defaultText}>{'Đặt làm địa chỉ mặc định'}</Text>
      </View>
      <View style={[itemStyles.bottomContainer, { marginTop: 10 }]}>
        <AppButton
          title={'Lưu'}
          onPress={async () => {
            await updateAddress({
              receiver: name,
              city,
              street,
              ward,
              district,
              apartment_number: apartmentNumber,
              apartment_name: apartment,
              contact: phone,
              id: props.data.id
            });
          }}
        />
      </View>
    </View>
  );
};
