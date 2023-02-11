import React from 'react';
import {useColorScheme, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import BaseView from '../BaseView';
import {Text} from 'react-native-elements';
import {Styles} from './Styles';
import {CustomSwitch} from '../../components/Global/CustomSwitch/View';
import AppButton from '../../components/Application/AppButton/View';
import {useTheme} from '@react-navigation/native';

export const Notifications = props => {
  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const screenStyles = Styles(scheme, colors);

  const renderNotificationRow = (
    index,
    bottomMargin,
    bottomBorder,
    title,
    subtitle,
  ) => {
    return (
      <View
        style={[
          screenStyles.notificationContainer,
          bottomMargin && {marginBottom: hp(1)},
          bottomBorder && screenStyles.notificationBottomBorder,
          (index === 1 || index === 2) && screenStyles.topRadius,
          (index === 1 || index === 4) && screenStyles.bottomRadius,
        ]}>
        <View style={{width: '80%'}}>
          <Text style={screenStyles.titleText}>{title}</Text>
          <Text style={screenStyles.subtitleText}>{subtitle}</Text>
        </View>

        <View style={screenStyles.switchContainer}>
          <CustomSwitch initialValue={false} onValueChange={value => {}} />
        </View>
      </View>
    );
  };

  return (
    <BaseView
      navigation={props.navigation}
      title={'Notifications'}
      headerWithBack
      applyBottomSafeArea
      childView={() => {
        return (
          <View style={screenStyles.container}>
            <View style={screenStyles.mainContainer}>
              {renderNotificationRow(
                1,
                true,
                false,
                'Allow Notifications',
                'Get notifications about what is coming up in the future on Carter',
              )}

              {renderNotificationRow(
                2,
                false,
                true,
                'Email Notifications',
                'Get notifications via email about our latest deals and seasonal discounts',
              )}

              {renderNotificationRow(
                3,
                false,
                true,
                'Order Notifications',
                'Get Timely notifications about your orders and there status on delivery',
              )}

              {renderNotificationRow(
                4,
                false,
                false,
                'General Notifications',
                'Get notifications as soon as you perform something on the app i.e: add a product to favourites',
              )}
            </View>

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
