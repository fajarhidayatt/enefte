import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {style} from '@utils';
import {LogoPrimary} from '@assets/vectors';
import ButtonIcon from '../Button/ButtonIcon';
import Button from '../Button/Button';

interface HeaderProps {
  leading?: 'light' | 'dark';
  title?: 'logo' | string;
  action?: string[];
}

const Header = ({leading = 'light', title = '', action = []}: HeaderProps) => {
  const navigation = useNavigation();
  const centerStyle = title ? style.layout.flex2 : {};

  return (
    <View
      style={[
        style.layout.row,
        style.layout.centerBetween,
        style.layout.py24,
        style.layout.px24,
      ]}>
      <View style={[style.layout.flex1, style.layout.alignStart]}>
        <ButtonIcon
          icon="chevron-left"
          type={leading === 'light' ? 'primary' : 'secondary'}
          size={leading === 'light' ? 40 : 20}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={[centerStyle, style.layout.center]}>
        {title === 'logo' ? (
          <LogoPrimary />
        ) : (
          <Text style={[style.text.h2, style.text.white]}>{title}</Text>
        )}
      </View>
      <View
        style={[
          style.layout.flex1,
          style.layout.row,
          style.layout.justifyEnd,
          style.layout.gap16,
        ]}>
        {action.length > 0
          ? action.map((act, index) => {
              return act.includes('btn') ? (
                <Button
                  key={index}
                  text={act.split('-')[1]}
                  size="small"
                  onPress={() => {}}
                />
              ) : (
                <ButtonIcon
                  key={index}
                  icon={act}
                  type="secondary"
                  size={20}
                  onPress={() => {}}
                />
              );
            })
          : null}
      </View>
    </View>
  );
};

export default Header;
