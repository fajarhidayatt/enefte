import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors, style} from '@utils';
import {useNavigationProps} from '@types';
import {nftList_1, trendingList} from '@data';
import {Button, CollectionItem, NftCard, Spacer} from '@components';
import {IcEthereum} from '@assets/vectors';

const HomeScreen = () => {
  const navigation = useNavigation<useNavigationProps>();
  const [btnActive, setBtnActive] = useState<string>('Trending');
  const [listBtn] = useState<string[]>([
    'Trending',
    'Art',
    'Gaming',
    'Music',
    'Abstract',
  ]);

  return (
    <ScrollView style={style.layout.page}>
      <View
        style={[
          style.layout.row,
          style.layout.centerBetween,
          style.layout.px24,
          style.layout.py32,
        ]}>
        <View>
          <View
            style={[
              styles.balanceWrapper,
              style.layout.row,
              style.layout.centerBetween,
              style.layout.gap12,
              style.layout.radius10,
              style.layout.py8,
              style.layout.px16,
            ]}>
            <IcEthereum width={12} height={20} />
            <Text style={[style.text.button, style.text.light]}>26,031</Text>
          </View>
          <View style={[styles.absolute, style.layout.alignCenter]}>
            <Text
              style={[
                style.text.smallCaption,
                style.text.white,
                style.layout.px8,
                style.layout.radius10,
                style.layout.bgdark,
              ]}>
              Balance
            </Text>
          </View>
        </View>
        <View>
          <Image
            source={require('@assets/dummy/profil_pic.png')}
            style={style.image.round52}
            resizeMode="cover"
          />
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        overScrollMode="never"
        contentContainerStyle={[style.layout.px24, style.layout.gap16]}>
        {listBtn.map((btn, index) => (
          <Button
            key={index}
            text={btn}
            background={btn === btnActive ? 'bgPrimary' : 'bgSecondary'}
            size="medium"
            onPress={() => setBtnActive(btn)}
          />
        ))}
      </ScrollView>
      <Spacer height={30} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        overScrollMode="never"
        contentContainerStyle={[style.layout.px24, style.layout.gap16]}>
        {nftList_1.map((item, index) => (
          <NftCard
            key={index}
            item={item}
            onPress={() => navigation.navigate('DetailNft', {item})}
          />
        ))}
      </ScrollView>
      <Spacer height={40} />
      <View style={[style.layout.px24, style.layout.gap16]}>
        <Text style={[style.text.h2, style.text.white]}>
          Trending Collections
        </Text>
        {trendingList.map((item, index) => (
          <CollectionItem key={index} item={item} />
        ))}
      </View>
      <Spacer height={16} />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  balanceWrapper: {
    borderWidth: 1,
    borderColor: colors.gray,
  },
  absolute: {
    position: 'absolute',
    bottom: -5,
    left: 0,
    right: 0,
  },
});
