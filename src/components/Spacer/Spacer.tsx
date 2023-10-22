import React from 'react';
import {View} from 'react-native';

interface SpacerProps {
  flex?: number;
  width?: number;
  height?: number;
}

const Spacer = ({flex, width, height}: SpacerProps) => {
  return <View style={{flex, width, height}} />;
};

export default Spacer;
