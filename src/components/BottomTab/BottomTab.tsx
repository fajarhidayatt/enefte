import React from 'react';
import {View} from 'react-native';
import {colors, style} from '@utils';
import ButtonIcon from '../Button/ButtonIcon';

const BottomTab = ({state, descriptors, navigation}: any) => {
  return (
    <View
      style={[
        style.layout.row,
        style.layout.justifyAround,
        style.layout.bgSecondary,
        style.layout.py24,
      ]}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        return (
          <ButtonIcon
            key={index}
            icon={label}
            color={isFocused ? colors.primary : colors.white}
            onPress={onPress}
          />
        );
      })}
    </View>
  );
};

export default BottomTab;
