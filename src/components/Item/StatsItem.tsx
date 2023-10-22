import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {style} from '@utils';
import {TStats} from '@types';
import {IcEthereum, IcVerified} from '@assets/vectors';
import Profile from '../Profile/Profile';

interface StatsItemProps {
  stat: TStats;
  type?: 'primary' | 'secondary';
  desc?: boolean;
  index?: number;
}

const StatsItem = ({
  stat,
  type = 'primary',
  desc = true,
  index = 0,
}: StatsItemProps) => {
  return (
    <View
      style={[
        style.layout.px16,
        style.layout.py16,
        style.layout.radius10,
        style.layout.bgSecondary,
        style.layout.gap24,
      ]}>
      {type === 'primary' ? (
        <View
          style={[
            style.layout.row,
            style.layout.alignCenter,
            style.layout.gap16,
          ]}>
          <Text style={[style.text.body, style.text.light]}>0{index + 1}</Text>
          <View>
            <Profile
              image={stat.author.profilPic}
              sizeImage="round44"
              isVerified={stat.author.isVerified}
            />
          </View>
          <Text
            style={[style.text.caption, style.text.light, style.layout.flex1]}>
            {stat.author.username}
          </Text>
          <View style={[style.layout.alignEnd, style.layout.gap4]}>
            <View
              style={[
                style.layout.row,
                style.layout.alignCenter,
                style.layout.gap8,
              ]}>
              <IcEthereum width={8} height={12} />
              <Text style={[style.text.caption, style.text.light]}>
                {stat.balance}
              </Text>
            </View>
            <Text style={[style.text.smallCaption, style.text.green]}>
              {stat.statsBalance}
            </Text>
          </View>
        </View>
      ) : (
        <View
          style={[
            style.layout.row,
            style.layout.alignCenter,
            style.layout.gap16,
          ]}>
          <View>
            <Image source={stat.nftImage} style={styles.image} />
          </View>
          <View style={[style.layout.flex1, style.layout.gap4]}>
            <View
              style={[
                style.layout.row,
                style.layout.alignCenter,
                style.layout.gap4,
              ]}>
              <Text style={[style.text.caption, style.text.gray]}>
                {stat.author.username}
              </Text>
              {stat.author.isVerified ? (
                <IcVerified width={12} height={12} />
              ) : null}
            </View>
            <Text style={[style.text.body, style.text.light]}>
              {stat.nftName}
            </Text>
          </View>
          <View style={[style.layout.alignEnd, style.layout.gap4]}>
            <Text style={[style.text.smallCaption, style.text.green]}>
              Sale
            </Text>
            <View
              style={[
                style.layout.row,
                style.layout.alignCenter,
                style.layout.gap8,
              ]}>
              <IcEthereum width={8} height={12} />
              <Text style={[style.text.caption, style.text.light]}>
                {stat.balance}
              </Text>
            </View>
            <Text style={[style.text.smallCaption, style.text.gray]}>
              {stat.time} Minutes ago
            </Text>
          </View>
        </View>
      )}
      {desc ? (
        <View style={[style.layout.row, style.layout.between]}>
          <View style={style.layout.center}>
            <Text style={[style.text.smallCaption, style.text.gray]}>24h%</Text>
            <Text style={[style.text.caption, style.text.green]}>
              {stat.stats}
            </Text>
          </View>
          <View style={style.layout.center}>
            <Text style={[style.text.smallCaption, style.text.gray]}>
              Floor Price
            </Text>
            <View
              style={[
                style.layout.row,
                style.layout.alignCenter,
                style.layout.gap8,
              ]}>
              <IcEthereum width={8} height={12} />
              <Text style={[style.text.caption, style.text.light]}>
                {stat.price}
              </Text>
            </View>
          </View>
          <View style={style.layout.center}>
            <Text style={[style.text.smallCaption, style.text.gray]}>
              Owners
            </Text>
            <Text style={[style.text.caption, style.text.light]}>
              {stat.owner}
            </Text>
          </View>
          <View style={style.layout.center}>
            <Text style={[style.text.smallCaption, style.text.gray]}>
              Items
            </Text>
            <Text style={[style.text.caption, style.text.light]}>
              {stat.items}
            </Text>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default StatsItem;

const styles = StyleSheet.create({
  image: {
    width: 82,
    height: 82,
    borderRadius: 10,
    resizeMode: 'cover',
  },
});
