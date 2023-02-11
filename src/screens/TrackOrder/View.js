import React from 'react';
import {useColorScheme, View} from 'react-native';
import {Divider, Text} from 'react-native-elements';

import BaseView from '../BaseView';
import {Styles} from './Styles';
import AppButton from '../../components/Application/AppButton/View';
import Routes from '../../navigation/Routes';
import {StackActions, useTheme} from '@react-navigation/native';
import Config from '../../../branding/carter/configuration/Config';
import {SvgIcon} from '../../components/Application/SvgIcon/View';
import IconNames from '../../../branding/carter/assets/IconNames';

export const TrackOrder = props => {
  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const screenStyles = Styles(scheme, colors);

  const renderOrderHeader = () => {
    return (
      <View style={screenStyles.headerContainer}>
        <View style={screenStyles.headerLeftIconContainer}>
          <SvgIcon
            type={IconNames.Box}
            width={20}
            height={20}
            color={colors.activeColor}
          />
        </View>

        <View>
          <Text style={screenStyles.headerTitleText}>{'Order # 44698'}</Text>
          <Text style={screenStyles.subtitleText}>
            {'Placed on December 15, 2020'}
          </Text>

          <View style={screenStyles.itemsHorizontalContainer}>
            <Text style={screenStyles.subtitleText}>{'Items: '}</Text>
            <Text style={[screenStyles.subtitleValueText]}>{'10'}</Text>
            <Text style={screenStyles.subtitleText}>{'Total: '}</Text>
            <Text style={screenStyles.subtitleValueText}>{'$ 16.99'}</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderOrderContent = () => {
    return (
      <View style={screenStyles.contentContainer}>
        <View style={screenStyles.orderStatusItemContainer}>
          <View style={screenStyles.orderStatusLeftContainer}>
            <View
              style={[
                screenStyles.orderStatusLeftIconContainer,
                {backgroundColor: colors.tertiaryBackground},
              ]}>
              <SvgIcon
                type={IconNames.BoxOpen}
                width={20}
                height={20}
                color={colors.activeColor}
              />
            </View>

            <Divider
              style={[
                screenStyles.orderStatusLine,
                {backgroundColor: colors.activeColor},
              ]}
            />
          </View>
          <View style={screenStyles.orderTitleContainer}>
            <Text style={screenStyles.orderStatusTitle}>{'Orders Placed'}</Text>
            <Text style={screenStyles.orderStatusSubtitle}>
              {'Dec 10, 2020'}
            </Text>

            <View style={screenStyles.centerSeparatorLine} />
          </View>
        </View>

        <View style={screenStyles.orderStatusItemContainer}>
          <View style={screenStyles.orderStatusLeftContainer}>
            <View
              style={[
                screenStyles.orderStatusLeftIconContainer,
                {backgroundColor: colors.tertiaryBackground},
              ]}>
              <SvgIcon
                type={IconNames.ClipboardCheck}
                width={20}
                height={20}
                color={colors.activeColor}
              />
            </View>

            <Divider
              style={[
                screenStyles.orderStatusLine,
                {backgroundColor: colors.activeColor},
              ]}
            />
          </View>
          <View style={screenStyles.orderTitleContainer}>
            <Text style={screenStyles.orderStatusTitle}>
              {'Order Confirmed'}
            </Text>
            <Text style={screenStyles.orderStatusSubtitle}>
              {'Dec 10, 2020'}
            </Text>

            <View style={screenStyles.centerSeparatorLine} />
          </View>
        </View>

        <View style={screenStyles.orderStatusItemContainer}>
          <View style={screenStyles.orderStatusLeftContainer}>
            <View
              style={[
                screenStyles.orderStatusLeftIconContainer,
                {backgroundColor: colors.tertiaryBackground},
              ]}>
              <SvgIcon
                type={IconNames.MapMarkedAlt}
                width={20}
                height={20}
                color={colors.activeColor}
              />
            </View>

            <Divider
              style={[
                screenStyles.orderStatusLine,
                {backgroundColor: colors.activeColor},
              ]}
            />
          </View>
          <View style={screenStyles.orderTitleContainer}>
            <Text style={screenStyles.orderStatusTitle}>{'Order Shipped'}</Text>
            <Text style={screenStyles.orderStatusSubtitle}>
              {'Dec 10, 2020'}
            </Text>

            <View style={screenStyles.centerSeparatorLine} />
          </View>
        </View>

        <View style={screenStyles.orderStatusItemContainer}>
          <View style={screenStyles.orderStatusLeftContainer}>
            <View
              style={[
                screenStyles.orderStatusLeftIconContainer,
                {backgroundColor: colors.inputSecondaryBackground},
              ]}>
              <SvgIcon
                type={IconNames.ShippingFast}
                width={20}
                height={20}
                color={colors.switchBorder}
              />
            </View>
            <Divider
              style={[
                screenStyles.orderStatusLine,
                {backgroundColor: colors.borderColorLight},
              ]}
            />
          </View>
          <View style={screenStyles.orderTitleContainer}>
            <Text style={screenStyles.orderStatusTitle}>
              {'Out of Delivery'}
            </Text>
            <Text style={screenStyles.orderStatusSubtitle}>{'Pending'}</Text>

            <View style={screenStyles.centerSeparatorLine} />
          </View>
        </View>

        <View style={screenStyles.orderStatusItemContainer}>
          <View style={screenStyles.orderStatusLeftContainer}>
            <View
              style={[
                screenStyles.orderStatusLeftIconContainer,
                {backgroundColor: colors.inputSecondaryBackground},
              ]}>
              <SvgIcon
                type={IconNames.Dolly}
                width={20}
                height={20}
                color={colors.switchBorder}
              />
            </View>
          </View>
          <View style={screenStyles.orderTitleContainer}>
            <Text style={screenStyles.orderStatusTitle}>
              {'Order Delivered'}
            </Text>
            <Text style={screenStyles.orderStatusSubtitle}>{'Pending'}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <BaseView
      navigation={props.navigation}
      title={'Track Order'}
      headerWithBack
      applyBottomSafeArea
      childView={() => {
        return (
          <View style={screenStyles.container}>
            <View style={screenStyles.upperContainer}>
              {renderOrderHeader()}

              {renderOrderContent()}
            </View>

            <View style={screenStyles.bottomContainer}>
              <AppButton
                title={'Go Back'}
                onPress={() => {
                  props.navigation.dispatch(
                    StackActions.replace(
                      Config.SELECTED_VARIANT === Routes.INTRO_SCREEN1
                        ? Routes.HOME_VARIANT1
                        : Config.SELECTED_VARIANT === Routes.INTRO_SCREEN2
                        ? Routes.HOME_VARIANT2
                        : Routes.HOME_VARIANT3,
                    ),
                  );
                }}
              />
            </View>
          </View>
        );
      }}
    />
  );
};
