import React from 'react';
import {ScrollView, View} from 'react-native';
import {style} from '@utils';
import {rangkingsList} from '@data';
import {Option, StatsItem} from '@components';

const TabRangkings = () => {
  return (
    <ScrollView
      contentContainerStyle={[
        style.layout.px24,
        style.layout.py24,
        style.layout.gap32,
      ]}>
      <View style={[style.layout.row, style.layout.centerBetween]}>
        <Option text="All Categories" />
        <Option text="All Chains" />
      </View>
      <View style={style.layout.gap16}>
        {rangkingsList.map((rank, index) => (
          <StatsItem key={index} stat={rank} index={index} />
        ))}
      </View>
    </ScrollView>
  );
};

export default TabRangkings;
