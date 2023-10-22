import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {colors, style} from '@utils';
import {renderIcon} from './Icon';

interface ButtonProps {
  onPress: () => void;
  text?: string;
  icon?: string;
  size?: 'large' | 'medium' | 'small';
  background?: 'bgNone' | 'bgPrimary' | 'bgSecondary';
  outline?: 'outlineNone' | 'outlineWhite' | 'outlineBlue';
  textColor?: 'white' | 'blue';
}

const Button = ({
  onPress,
  text,
  icon,
  size = 'large',
  background = 'bgPrimary',
  outline = 'outlineNone',
  textColor = 'white',
}: ButtonProps) => {
  const container = {
    ...style.button[size],
    ...style.button[background],
    ...style.button[outline],
    ...style.layout.radius10,
    ...style.layout.row,
    ...style.layout.center,
    ...style.layout.gap16,
  };

  const colorText = textColor === 'white' ? style.text.light : style.text.blue;

  return (
    <TouchableOpacity onPress={onPress} style={container}>
      {icon ? renderIcon(icon, 24, colors.white) : null}
      {text ? <Text style={[style.text.button, colorText]}>{text}</Text> : null}
    </TouchableOpacity>
  );
};

export default Button;
