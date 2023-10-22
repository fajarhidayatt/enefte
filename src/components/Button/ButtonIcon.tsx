import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '@utils';
import {renderIcon} from './Icon';

interface ButtonIconProps {
  icon: string;
  size?: number;
  color?: string;
  type?: 'primary' | 'secondary';
  onPress?: () => void;
}

const ButtonIcon = ({
  icon,
  size = 24,
  color = '#F5F8FA',
  type = 'primary',
  onPress,
}: ButtonIconProps) => {
  if (type === 'secondary') {
    return (
      <TouchableOpacity
        activeOpacity={0.75}
        style={styles.container}
        onPress={onPress}>
        {renderIcon(icon, size, color)}
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity activeOpacity={0.75} onPress={onPress}>
      {renderIcon(icon, size, color)}
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 100,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
