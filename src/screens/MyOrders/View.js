import React, {useState, useEffect} from 'react';
import {Animated, ScrollView, useColorScheme, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Accordion from 'react-native-collapsible/Accordion';
import BaseView from '../BaseView';
import {Divider, Text} from 'react-native-elements';
import {Styles} from './Styles';
import Easing from 'react-native/Libraries/Animated/Easing';
import Globals from '../../utils/Globals';
import {useTheme} from '@react-navigation/native';
import AppConfig from '../../../branding/App_config';
import {SvgIcon} from '../../components/Application/SvgIcon/View';
import IconNames from '../../../branding/carter/assets/IconNames';
import {getUserId} from '../../services/user-services';
import {getAllOrderByUserId} from '../../services/order-services';
import {getAllStatus} from '../../services/status-services';
import AsyncStorage from '@react-native-async-storage/async-storage';
const assets = AppConfig.assets.default;

//Animation Constants
const activeAnimConfig = {
  toValue: 1,
  duration: 300,
  easing: Easing.linear,
  useNativeDriver: true,
};

const deActiveAnimConfig = {
  toValue: 0,
  duration: 300,
  easing: Easing.linear,
  useNativeDriver: true,
};
export const MyOrders = props => {
  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const screenStyles = Styles(scheme, colors);

  //Internal States
  const [activeSections, setActiveSections] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const [userId, setUserId] = useState(0);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    getProfile();
  }, []);
  useEffect(() => {
    getAllStatus().then(c => {
      setStatus(c);
    });
  }, []);
  useEffect(() => {
    getAllOrderByUserId(userId).then(b => {
      setOrderItems(b);
    });
  }, [userId]);
  const getProfile = async () => {
    let userValue = await AsyncStorage.getItem('@user');
    if (userValue) {
      userValue = JSON.parse(userValue);
      if (JSON.stringify(userId) !== JSON.stringify(userValue.id)) {
        setUserId(userValue.id);
      }
    }
  };
  const renderOrdersHeader = (section, index, isActive) => {
    const spin = section.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg'],
    });

    if (isActive) {
      Animated.timing(section.spinValue, activeAnimConfig).start();
    } else {
      Animated.timing(section.spinValue, deActiveAnimConfig).start();
    }

    return (
      <View style={index === 0 && screenStyles.ordersListFirstItem}>
        <View
          style={[
            screenStyles.headerContainer,
            isActive && screenStyles.headerContainerActive,
          ]}>
          <View
            style={[
              screenStyles.headerLeftIconContainer,
              section.isOrderDelivered && {
                backgroundColor: colors.subHeadingTertiaryColor,
              },
            ]}>
            <SvgIcon
              type={IconNames.BoxOpen}
              width={30}
              height={30}
              color={
                section.isOrderDelivered
                  ? colors.subHeadingColor
                  : colors.subHeadingSecondaryColor
              }
            />
          </View>

          <View>
            <Text
              style={[
                screenStyles.headerTitleText,
                section.isOrderDelivered && {color: colors.subHeadingColor},
              ]}>
              {section.orderNo}
            </Text>
            <Text style={screenStyles.headerSubtitleText}>
              {section.dateTime}
            </Text>
            <View style={screenStyles.itemsHorizontalContainer}>
              <Text style={screenStyles.headerSubtitleText}>{'Items: '}</Text>
              <Text
                style={[
                  {
                    color: section.isOrderDelivered
                      ? colors.subHeadingColor
                      : colors.headingColor,
                    marginRight: wp(2),
                  },
                  screenStyles.headerSubtitleValueText,
                ]}>
                {'10'}
              </Text>
              <Text style={screenStyles.headerSubtitleText}>{'Total: '}</Text>
              <Text
                style={[
                  {
                    color: section.isOrderDelivered
                      ? colors.subHeadingColor
                      : colors.headingColor,
                  },
                  screenStyles.headerSubtitleValueText,
                ]}>
                {section.total}
              </Text>
            </View>
          </View>

          {!section.isOrderDelivered && (
            <View style={screenStyles.headerRightIconContainer}>
              <Animated.Image
                source={assets.drop_down_icon}
                style={[
                  {transform: [{rotate: spin}]},
                  screenStyles.headerRightIcon,
                ]}
                resizeMode={'contain'}
              />
            </View>
          )}
        </View>

        {section.isOrderDelivered && !isActive && (
          <View style={screenStyles.headerOrderDeliverContainer}>
            <View style={screenStyles.headerOrderDeliverCircle} />

            <Text style={screenStyles.headerSubtitleText}>
              {'Order Delivered'}
            </Text>

            <Text style={screenStyles.headerOrderDeliverDateText}>
              {'Dec 10, 2020'}
            </Text>
          </View>
        )}
      </View>
    );
  };

  const orderStatusLog = item => {
    return (
      <View style={screenStyles.contentItemContainer}>
        <View style={screenStyles.contentItemLeftContainer}>
          <View
            style={[
              screenStyles.contentItemCircle,
              {
                backgroundColor: item.isSelfEnabled
                  ? colors.subHeadingSecondaryColor
                  : colors.inputColor,
              },
            ]}
          />

          <Divider
            style={[
              screenStyles.contentItemLine,
              {
                backgroundColor: item.isNextEnabled
                  ? colors.subHeadingSecondaryColor
                  : colors.borderColorLight,
              },
            ]}
          />
        </View>
        <Text style={screenStyles.contentItemLeftText}>{item.name}</Text>
        <Text style={screenStyles.contentItemRightText}>{item.updated_at}</Text>
      </View>
    );
  };
  const renderOrdersContent = section => {
    const orderLogs = section.order_status_log;
    const statusLogs = status
      .sort((a, b) => {
        return a.level - b.level;
      })
      .map((c, index) => {
        const orderLogComperative = orderLogs.find(
          b => b.status.status === c.name,
        );
        let nextOrderLogComperative;
        if (index < status.length) {
          nextOrderLogComperative = orderLogs.find(
            b => b.status.status === status[index + 1]?.name,
          );
        }

        return {
          name: c.name,
          updated_at: orderLogComperative
            ? orderLogComperative.updated_at
            : 'Đang chờ',
          isSelfEnabled: orderLogComperative ? true : false,
          isNextEnabled: nextOrderLogComperative ? true : false,
          level: c.level,
        };
      });
    // const sortedStatusLogs = statusLogs.sort((a, b) => {
    //   return a.level - b.level;
    // });
    return (
      <View style={screenStyles.contentContainerStyle}>
        {statusLogs.map((item, index) => {
          return (
            <View style={screenStyles.contentItemContainer} key={index}>
              <View style={screenStyles.contentItemLeftContainer}>
                <View
                  style={[
                    screenStyles.contentItemCircle,
                    {
                      backgroundColor: item.isSelfEnabled
                        ? colors.subHeadingSecondaryColor
                        : colors.inputColor,
                    },
                  ]}
                />

                <Divider
                  style={[
                    screenStyles.contentItemLine,
                    {
                      backgroundColor: item.isNextEnabled
                        ? colors.subHeadingSecondaryColor
                        : colors.borderColorLight,
                    },
                  ]}
                />
              </View>
              <Text style={screenStyles.contentItemLeftText}>{item.name}</Text>
              <Text style={screenStyles.contentItemRightText}>
                {item.updated_at}
              </Text>
            </View>
          );
        })}
      </View>
    );
  };

  const _updateSections = allActiveSections => {
    if (allActiveSections.length > 0) {
      if (!Globals.ordersItems[allActiveSections[0]].isOrderDelivered) {
        setActiveSections(allActiveSections);
      }
    } else {
      setActiveSections(allActiveSections);
    }
  };

  return (
    <BaseView
      title={'My Orders'}
      navigation={props.navigation}
      showAppHeader={true}
      headerWithBack={!props.hideBack}
      applyBottomSafeArea
      childView={() => {
        return (
          <ScrollView showsVerticalScrollIndicator={false}>
            <Accordion
              sections={orderItems}
              activeSections={activeSections}
              renderHeader={renderOrdersHeader}
              renderContent={renderOrdersContent}
              underlayColor={'transparent'}
              expandMultiple={false}
              sectionContainerStyle={screenStyles.containerSpacing}
              onChange={_updateSections}
            />
          </ScrollView>
        );
      }}
    />
  );
};
