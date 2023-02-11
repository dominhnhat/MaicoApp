import React, {useEffect, useState} from 'react';

import {Switch} from 'react-native-switch';
import {useTheme} from '@react-navigation/native';

export const CustomSwitch = props => {
  const [checked, setChecked] = useState(false);

  const {colors} = useTheme();

  const {onValueChange} = props;

  useEffect(() => {
    onValueChange(checked);
  }, [checked]);

  return (
    <Switch
      value={checked}
      onValueChange={val => {
        setChecked(val);
      }}
      circleSize={14}
      barHeight={16}
      backgroundActive={colors.switchActiveBackground}
      backgroundInactive={'transparent'}
      circleActiveColor={colors.switchInActiveBackground}
      circleInActiveColor={'transparent'}
      containerStyle={{
        borderWidth: 1.5,
        borderColor: checked
          ? colors.switchActiveBackground
          : colors.switchBorder,
      }}
      changeValueImmediately={true}
      innerCircleStyle={{
        borderWidth: checked ? 1 : 1.5,
        borderColor: checked
          ? colors.switchActiveBackground
          : colors.switchBorder,
      }}
      renderActiveText={false}
      renderInActiveText={false}
      switchLeftPx={5}
      switchRightPx={1.8}
      switchBorderRadius={20}
    />
  );
};
