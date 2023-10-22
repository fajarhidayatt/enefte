import React, {useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {colors, style} from '@utils';
import TabActivity from './TabActivity';
import TabRangkings from './TabRangkings';

const {width} = Dimensions.get('window');

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    scrollEnabled
    pressOpacity={0.75}
    pressColor="transparent"
    style={[
      style.layout.bgdark,
      style.layout.row,
      style.layout.justifyCenter,
      styles.tabBar,
    ]}
    indicatorStyle={[style.layout.bgPrimary, styles.indicator]}
    labelStyle={[style.text.h2, styles.label]}
    activeColor={colors.light}
    inactiveColor={colors.gray}
  />
);

const renderScene = SceneMap({
  1: TabRangkings,
  2: TabActivity,
});

const TabViewSection = () => {
  const [index, setIndex] = useState<number>(0);
  const [routes] = useState([
    {key: 1, title: 'Rangkings'},
    {key: 2, title: 'Activity'},
  ]);

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: width}}
    />
  );
};

export default TabViewSection;

const styles = StyleSheet.create({
  tabBar: {
    borderBottomWidth: 1,
    borderBottomColor: colors.secondary,
    elevation: 0,
  },
  indicator: {
    width: 125,
    height: 3,
    left: (width / 2 - 125) / 2,
    marginHorizontal: 22.5,
  },
  label: {
    margin: 0,
    textTransform: 'capitalize',
  },
});
