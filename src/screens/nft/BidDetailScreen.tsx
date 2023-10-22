import React, {FC} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  Button,
  Header,
  InputText,
  Option,
  Profile,
  Spacer,
  StatsItem,
} from '@components';
import {PageProps} from '@types';
import {historyList} from '@data';
import {colors, style} from '@utils';
import {IcEthereum, IcMinusCircle, IcPlusCircle} from '@assets/vectors';

const BidDetailScreen: FC<PageProps<'BidDetail'>> = ({route, navigation}) => {
  const {item} = route.params;

  return (
    <View style={style.layout.page}>
      <Header title="Bid Details" />
      <ScrollView
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[style.layout.gap32, style.layout.px24]}>
        <View style={[style.layout.row, style.layout.gap16]}>
          <Image source={item.image} style={styles.image} />
          <View style={[style.layout.flex1, style.layout.gap16]}>
            <Text style={[style.text.h2, style.text.light]}>{item.name}</Text>
            <Text style={[style.text.smallCaption, style.text.gray]}>
              Karafuru is home to 5,555 generative arts where colors reign
              supreme. Leave the drab reality and enter the world of Karafuru by
              Museum of Toys.
            </Text>
            <Profile
              image={item.author.profilPic}
              sizeImage="round32"
              title={item.author.username}
              isVerified
            />
          </View>
        </View>
        <View style={style.layout.gap8}>
          <View
            style={[
              style.layout.row,
              style.layout.center,
              style.layout.gap16,
              style.layout.py12,
              style.layout.radius10,
              style.layout.bgSecondary,
            ]}>
            <IcMinusCircle width={24} height={24} fill={colors.gray} />
            <IcEthereum width={15} height={24} />
            <Text style={[style.text.h2, style.text.light]}>{item.eth}</Text>
            <IcPlusCircle width={24} height={24} fill={colors.gray} />
          </View>
          <Text
            style={[style.text.caption, style.text.gray, style.text.center]}>
            You must bid at least 0,1 ETH
          </Text>
        </View>
        <View style={style.layout.gap8}>
          <Text style={[style.text.caption, style.text.white]}>
            Set expiration date and time
          </Text>
          <View style={[style.layout.row, style.layout.gap24]}>
            <Option text="Date" />
            <View style={style.layout.flex1}>
              <InputText placeholder="Time" />
            </View>
          </View>
        </View>
        <Button
          text="Submit"
          onPress={() => navigation.navigate('BidFinish')}
        />
        <View style={style.layout.gap8}>
          <Text style={[style.text.h2, style.text.white]}>Bid History</Text>
          {historyList.map((history, index) => (
            <StatsItem key={index} stat={history} index={index} />
          ))}
        </View>
        <Spacer height={12} />
      </ScrollView>
    </View>
  );
};

export default BidDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: 148,
    height: 163,
    borderRadius: 10,
  },
});
