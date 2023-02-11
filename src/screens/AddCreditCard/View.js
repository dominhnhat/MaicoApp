import React, {useState} from 'react';
import {useColorScheme, View} from 'react-native';
import {Text} from 'react-native-elements';

import BaseView from '../BaseView';
import AppInput from '../../components/Application/AppInput/View';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {CustomSwitch} from '../../components/Global/CustomSwitch/View';
import AppButton from '../../components/Application/AppButton/View';
import {useTheme} from '@react-navigation/native';
import {Styles} from './Styles';
import {commonDarkStyles} from '../../../branding/carter/styles/dark/Style';
import {commonLightStyles} from '../../../branding/carter/styles/light/Style';
import IconNames from '../../../branding/carter/assets/IconNames';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {CreditCard} from '../../components/Application/CreditCard/View';
import creditcardutils from 'creditcardutils';

export const AddCreditCard = props => {
  //Input reference for KeyboardAwareScrollView
  let inputRef = React.createRef();

  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const screenStyles = Styles(colors);
  const globalStyles =
    scheme === 'dark' ? commonDarkStyles(colors) : commonLightStyles(colors);

  //Internal input field states
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCVV] = useState('');

  return (
    <BaseView
      navigation={props.navigation}
      title={'Add Credit Card'}
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
              style={screenStyles.parentContainer}
              showsVerticalScrollIndicator={false}>
              <View style={{}}>
                <CreditCard
                  width={wp(90)}
                  number={cardNumber}
                  cvc={cvv}
                  expiration={expiry}
                  name={name}
                  fontSize={20}
                />

                <AppInput
                  textInputRef={r => (inputRef = r)}
                  {...globalStyles.secondaryInputStyle}
                  leftIcon={IconNames.CircleUser}
                  placeholder={'CardHolder Name'}
                  containerStyle={screenStyles.cardHolderInputContainer}
                  value={name}
                  onChangeText={name => {
                    setName(name);
                  }}
                />

                <AppInput
                  textInputRef={r => (inputRef = r)}
                  {...globalStyles.secondaryInputStyle}
                  leftIcon={IconNames.CreditCard}
                  maxLength={16}
                  keyboardType={'number-pad'}
                  placeholder={'Card Number'}
                  value={cardNumber}
                  onChangeText={cardNumber => {
                    setCardNumber(cardNumber);
                  }}
                />

                <View style={screenStyles.horizontalInputsContainer}>
                  <AppInput
                    textInputRef={r => (inputRef = r)}
                    {...globalStyles.secondaryInputStyle}
                    leftIcon={IconNames.Calendar}
                    placeholder={'Expiry'}
                    maxLength={7}
                    keyboardType={'number-pad'}
                    containerStyle={screenStyles.horizontalInput}
                    value={expiry}
                    onChangeText={expiry => {
                      setExpiry(creditcardutils.formatCardExpiry(expiry));
                    }}
                  />

                  <AppInput
                    textInputRef={r => (inputRef = r)}
                    {...globalStyles.secondaryInputStyle}
                    leftIcon={IconNames.LockKeyhole}
                    placeholder={'CVV'}
                    maxLength={3}
                    keyboardType={'number-pad'}
                    containerStyle={screenStyles.horizontalInput}
                    value={cvv}
                    onChangeText={cvv => {
                      setCVV(cvv);
                    }}
                  />
                </View>

                <View style={screenStyles.switchContainer}>
                  <CustomSwitch
                    initialValue={false}
                    onValueChange={value => {}}
                  />

                  <Text style={screenStyles.defaultText}>{'Make Default'}</Text>
                </View>
              </View>
            </KeyboardAwareScrollView>

            <View style={screenStyles.bottomButton}>
              <AppButton
                title={'Add Credit Card'}
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
