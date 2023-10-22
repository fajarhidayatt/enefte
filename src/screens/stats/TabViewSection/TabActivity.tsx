import React from 'react';
import {ScrollView, View} from 'react-native';
import {style} from '@utils';
import {activityList} from '@data';
import {Option, StatsItem} from '@components';

const TabActivity = () => {
  return (
    <ScrollView
      contentContainerStyle={[
        style.layout.px24,
        style.layout.py24,
        style.layout.gap32,
      ]}>
      <View style={[style.layout.row, style.layout.centerBetween]}>
        <Option text="All Event Type" />
        <Option text="All Chains" />
      </View>
      <View style={style.layout.gap16}>
        {activityList.map((activity, index) => (
          <StatsItem
            key={index}
            stat={activity}
            index={index}
            type="secondary"
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default TabActivity;
