import React from 'react';
import {Text, View} from 'react-native';
import {style} from '@utils';
import {Spacer} from '@components';
import TabViewSection from './TabViewSection';

const StatsScreen = () => {
  return (
    <View style={style.layout.page}>
      <Spacer height={62} />
      <View style={[style.layout.px24]}>
        <Text style={[style.text.h1, style.text.white]}>Stats</Text>
      </View>
      <Spacer height={24} />
      <TabViewSection />
    </View>
  );
};

export default StatsScreen;
