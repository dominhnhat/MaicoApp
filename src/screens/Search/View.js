import React, {useRef} from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from 'react-native';
import {Styles} from './Styles';
import Globals from '../../utils/Globals';
import {TextInput} from '../../components/Global/TextInput/View';
import Routes from '../../navigation/Routes';
import {useTheme} from '@react-navigation/native';
import {commonDarkStyles} from '../../../branding/carter/styles/dark/Style';
import {commonLightStyles} from '../../../branding/carter/styles/light/Style';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SvgIcon} from '../../components/Application/SvgIcon/View';
import IconNames from '../../../branding/carter/assets/IconNames';
import {FocusAwareStatusBar} from '../../components/Application/FocusAwareStatusBar/FocusAwareStatusBar';

export const Search = props => {
  //Theme based styling and colors
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const globalStyles =
    scheme === 'dark' ? commonDarkStyles(colors) : commonLightStyles(colors);
  const screenStyles = Styles(scheme, globalStyles, colors);

  //References
  let inputRef = useRef();

  const renderCategoryTitle = (title, rightBtnText) => {
    return (
      <TouchableOpacity onPress={() => {}}>
        <View style={screenStyles.categoryTitleContainer}>
          <Text style={screenStyles.categoryTitleText}>{title}</Text>
          <Text style={screenStyles.categoryBtnText}>{rightBtnText}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderHistoryItems = () => {
    return (
      <View style={screenStyles.historyItemContainer}>
        {Globals.searchHistoryItems.map((item, index) => {
          return (
            <View key={index} style={screenStyles.historyItemTextContainer}>
              <Text ellipsizeMode={'tail'} style={screenStyles.historyItemText}>
                {item}
              </Text>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <View style={screenStyles.container}>
      <FocusAwareStatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />

      <View style={screenStyles.mainContainer}>
        <View
          style={[
            screenStyles.searchContainer,
            {paddingTop: Globals.SAFE_AREA_INSET.top + hp(1)},
          ]}>
          <TouchableWithoutFeedback
            onPress={() => {
              props.navigation.goBack();
            }}>
            <View style={screenStyles.searchLeftIconContainer}>
              <SvgIcon
                type={IconNames.ArrowLeft}
                width={25}
                height={25}
                color={colors.headingColor}
              />
            </View>
          </TouchableWithoutFeedback>

          <TextInput
            textInputRef={r => (inputRef = r)}
            placeholder={'Search'}
            placeholderTextColor={colors.headingColor}
            rightIconSource={IconNames.SlidersH}
            rightIconPress={() => {
              props.navigation.navigate(Routes.APPLY_FILTERS);
            }}
            rightIconTintColor={colors.inputColor}
            leftIcon={
              <SvgIcon
                width={20}
                height={20}
                type={IconNames.Search}
                color={colors.inputColor}
              />
            }
            containerStyle={screenStyles.searchInputContainer}
            leftIconContainerStyle={screenStyles.searchInputLeftIconContainer}
            onChangeText={value => {}}
          />
        </View>

        <View style={screenStyles.contentContainerStyle}>
          {renderCategoryTitle('Search History', 'Clear')}

          {renderHistoryItems()}

          {renderCategoryTitle('Discover More', 'Refresh')}

          {renderHistoryItems()}
        </View>
      </View>

      <View style={screenStyles.bottomButtonsContainer}>
        <TouchableOpacity
          style={screenStyles.imageSearchButton}
          onPress={() => {}}>
          <View style={screenStyles.buttonContainer}>
            <SvgIcon
              type={IconNames.Camera}
              width={18}
              height={18}
              color={colors.inputColor}
              style={screenStyles.buttonIcon}
            />

            <Text style={screenStyles.buttonText}>{'Image Search'}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={screenStyles.voiceSearchButton}
          onPress={() => {}}>
          <View style={screenStyles.buttonContainer}>
            <SvgIcon
              type={IconNames.Microphone}
              width={18}
              height={18}
              color={colors.inputColor}
              style={screenStyles.buttonIcon}
            />

            <Text style={screenStyles.buttonText}>{'Voice Search'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
