import React, {useState} from 'react';

import {Text} from 'react-native-elements';
import {TouchableOpacity, View} from 'react-native';
import {Styles} from './Styles';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import AppConfig from '../../../../branding/App_config';
import {useTheme} from '@react-navigation/native';
import {SvgIcon} from '../../Application/SvgIcon/View';
import IconNames from '../../../../branding/carter/assets/IconNames';

const PropTypes = require('prop-types');

const assets = AppConfig.assets.default;

export const Counter = props => {
  //Theme based styling and colors
  const {colors} = useTheme();
  const itemStyles = Styles(colors);

  //Default Props
  const spacing = props.spacing || wp('12');
  const borderWidth = props.borderWidth || 1;
  const outerBorder = props.outerBorder || false;
  const isVertical = props.isVertical || false;

  //Constants
  const borderColor = colors.borderColorLight;
  //Internal states
  const [cartCount, setCartCount] = useState(props.count ? props.count : 1);

  const _cartCountChange = behavior => {
    if (behavior === 'add') {
      setCartCount(cartCount => {
        if (props.setCount) {
          props.setCount(cartCount + 1);
        }
        if (props.updateCount) {
          props.updateCount(cartCount + 1).then(() => {
            return cartCount + 1;
          });
        }
        return cartCount + 1;
      });
    } else if (behavior === 'subtract' && !(cartCount === 0)) {
      setCartCount(cartCount => {
        if (props.setCount) {
          props.setCount(cartCount - 1);
        }
        if (props.updateCount) {
          props.updateCount(cartCount - 1).then(() => {
            return cartCount - 1;
          });
        }
        return cartCount - 1;
      });
    }
  };

  const getHorizontalCounter = () => {
    return (
      <View
        style={[
          itemStyles.horizontalContainer,
          {
            borderWidth: outerBorder ? borderWidth : 0,
            borderColor,
          },
        ]}>
        <TouchableOpacity
          style={[
            itemStyles.actionContainer,
            {
              width: spacing,
              height: spacing,
              borderRightColor: borderColor,
              borderRightWidth: borderWidth,
            },
          ]}
          onPress={() => {
            _cartCountChange('subtract');
          }}>
          <SvgIcon
            type={IconNames.Minus}
            width={18}
            height={18}
            color={colors.subHeadingSecondaryColor}
          />
        </TouchableOpacity>
        <View
          style={[
            itemStyles.actionContainer,
            {
              width: spacing,
            },
          ]}>
          <Text style={itemStyles.counterText}>{cartCount}</Text>
        </View>

        <TouchableOpacity
          style={[
            itemStyles.actionContainer,
            {
              width: spacing,
              height: spacing,
              borderLeftColor: borderColor,
              borderLeftWidth: borderWidth,
            },
          ]}
          onPress={() => {
            _cartCountChange('add');
          }}>
          <SvgIcon
            type={IconNames.Plus}
            width={18}
            height={18}
            color={colors.subHeadingSecondaryColor}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const getVerticalCounter = () => {
    return (
      <View style={itemStyles.verticalContainer}>
        <TouchableOpacity
          style={[
            itemStyles.actionContainer,
            {
              width: spacing,
              height: spacing,
              borderBottomColor: borderColor,
              borderBottomWidth: borderWidth,
              borderLeftColor: borderColor,
              borderLeftWidth: borderWidth,
            },
          ]}
          onPress={() => {
            _cartCountChange('add');
          }}>
          <SvgIcon
            type={IconNames.Plus}
            width={18}
            height={18}
            color={colors.subHeadingSecondaryColor}
          />
        </TouchableOpacity>
        <View
          style={[
            itemStyles.actionContainer,
            {
              width: spacing,
              height: spacing,
              borderLeftColor: borderColor,
              borderLeftWidth: borderWidth,
            },
          ]}>
          <Text style={itemStyles.counterText}>{cartCount}</Text>
        </View>

        <TouchableOpacity
          style={[
            itemStyles.actionContainer,
            {
              width: spacing,
              height: spacing,
              borderTopColor: borderColor,
              borderTopWidth: borderWidth,
              borderLeftColor: borderColor,
              borderLeftWidth: borderWidth,
            },
          ]}
          onPress={() => {
            _cartCountChange('subtract');
          }}>
          <SvgIcon
            type={IconNames.Minus}
            width={18}
            height={18}
            color={colors.subHeadingSecondaryColor}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>{isVertical ? getVerticalCounter() : getHorizontalCounter()}</View>
  );
};

Counter.propTypes = {
  spacing: PropTypes.number,
  borderWidth: PropTypes.number,
  outerBorder: PropTypes.bool,
  isVertical: PropTypes.bool,
};
