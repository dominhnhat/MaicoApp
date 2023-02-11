import React, {useRef, useState} from 'react';
import {useColorScheme, View} from 'react-native';
import {Styles} from './Style';
import {useTheme} from '@react-navigation/native';
import AppInput from '../AppInput/View';
import IconNames from '../../../../branding/carter/assets/IconNames';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {CustomSwitch} from '../../Global/CustomSwitch/View';
import {Text} from 'react-native-elements';

export const CardContentItem = props => {
  //References
  let inputRef = useRef();

  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();

  const itemStyles = Styles(scheme, colors);

  //Internal states
  const [name, setName] = useState(props.data.cardHolderName);
  const [number, setNumber] = useState(props.data.completeCardNo);
  const [expiry, setExpiry] = useState(props.data.expiry);
  const [cvv, setCVV] = useState(props.data.CVV);

  return (
    <View style={itemStyles.contentContainer}>
      <AppInput
        textInputRef={r => (inputRef = r)}
        leftIcon={IconNames.CircleUser}
        placeholder={'Cardholder Name'}
        value={name}
        onChangeText={name => {
          setName(name);
        }}
      />

      <AppInput
        textInputRef={r => (inputRef = r)}
        leftIcon={IconNames.CreditCard}
        placeholder={'Card Number'}
        value={number}
        onChangeText={number => {
          setNumber(number);
        }}
      />

      <View style={itemStyles.horizontalInputsContainer}>
        <AppInput
          textInputRef={r => (inputRef = r)}
          leftIcon={IconNames.Calendar}
          placeholder={'Expiry'}
          containerStyle={itemStyles.horizontalInput}
          value={expiry}
          onChangeText={expiry => {
            setExpiry(expiry);
          }}
        />

        <AppInput
          textInputRef={r => (inputRef = r)}
          leftIcon={IconNames.LockKeyhole}
          placeholder={'CVV'}
          containerStyle={itemStyles.horizontalInput}
          value={cvv}
          onChangeText={cvv => {
            setCVV(cvv);
          }}
        />
      </View>
      <View style={{flexDirection: 'row', marginTop: hp(1)}}>
        <CustomSwitch initialValue={false} onValueChange={value => {}} />

        <Text style={itemStyles.defaultText}>{'Make Default'}</Text>
      </View>
    </View>
  );
};
