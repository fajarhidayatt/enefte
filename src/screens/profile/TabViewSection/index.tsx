import React, {useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {colors, style} from '@utils';

const {width} = Dimensions.get('window');

const Tab = () => {
  return <View style={style.layout.flex1} />;
};

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    scrollEnabled
    pressOpacity={0.75}
    pressColor="transparent"
    gap={10}
    style={[style.layout.bgdark, styles.tabBar]}
    indicatorStyle={[style.layout.bgPrimary, styles.indicator]}
    tabStyle={styles.tab}
    labelStyle={[style.text.body, styles.label]}
    activeColor={colors.light}
    inactiveColor={colors.gray}
  />
);

const renderScene = SceneMap({
  1: Tab,
  2: Tab,
  3: Tab,
  4: Tab,
  5: Tab,
  6: Tab,
});

const TabViewSection = () => {
  const [index, setIndex] = useState<number>(0);
  const [routes] = useState([
    {key: 1, title: 'Collected'},
    {key: 2, title: 'Created'},
    {key: 3, title: 'Favorite'},
    {key: 4, title: 'Offers Made'},
    {key: 5, title: 'Offers Received'},
    {key: 6, title: 'Offers Received'},
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
    height: 3,
  },
  tab: {
    width: 'auto',
  },
  label: {
    margin: 0,
    textTransform: 'capitalize',
  },
});
