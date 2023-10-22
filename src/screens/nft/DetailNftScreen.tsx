import React, {FC, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {style} from '@utils';
import {PageProps} from '@types';
import {Button, Header, ModalImage, Profile} from '@components';
import {IcEthereum, IcVerified} from '@assets/vectors';

const {width} = Dimensions.get('window');

const DetailNftScreen: FC<PageProps<'DetailNft'>> = ({route, navigation}) => {
  const [showImage, setShowImage] = useState<boolean>(false);
  const {item} = route.params;

  return (
    <View style={style.layout.page}>
      <Header leading="dark" action={['filter', 'share']} />
      <ScrollView
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          style.layout.px24,
          style.layout.py24,
          style.layout.gap16,
        ]}>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => setShowImage(true)}>
          <Image source={item.image} style={styles.image} />
        </TouchableOpacity>
        <View style={style.layout.gap8}>
          <View style={[style.layout.row, style.layout.gap8]}>
            <Text style={[style.text.body, style.text.light]}>
              {item.author.username}
            </Text>
            {item.author.isVerified ? (
              <IcVerified width={20} height={20} />
            ) : null}
          </View>
          <Text style={[style.text.h1, style.text.light]}>{item.name}</Text>
        </View>
        <View
          style={[
            style.layout.row,
            style.layout.centerBetween,
            style.layout.gap24,
          ]}>
          <View style={style.layout.flex1}>
            <Profile
              image={require('src/assets/dummy/user_1.png')}
              sizeImage="round40"
              title="Created by"
              titleStyle="smallCaption"
              titleColor="gray"
              desc="KarafuruDeployer"
              descStyle="caption"
              descColor="light"
            />
          </View>
          <View style={style.layout.flex1}>
            <Profile
              image={require('src/assets/dummy/user_4.png')}
              sizeImage="round40"
              title="Owned by"
              titleStyle="smallCaption"
              titleColor="gray"
              desc="Wakanabe420"
              descStyle="caption"
              descColor="light"
            />
          </View>
        </View>
        <Text style={[style.text.caption, style.text.light]}>
          Karafuru is home to 5,555 generative arts where colors reign supreme.
          Leave the drab reality and enter the world of Karafuru by Museum of
          Toys.
        </Text>
        <View style={[style.layout.row, style.layout.centerBetween]}>
          <View style={style.layout.gap4}>
            <Text style={[style.text.smallCaption, style.text.gray]}>
              Current Bid
            </Text>
            <View
              style={[
                style.layout.row,
                style.layout.center,
                style.layout.gap8,
              ]}>
              <IcEthereum width={10} height={16} />
              <Text style={[style.text.caption, style.text.light]}>
                {item.eth} ETH
              </Text>
            </View>
          </View>
          <View style={[style.layout.alignEnd, style.layout.gap4]}>
            <Text style={[style.text.smallCaption, style.text.gray]}>
              Ends In
            </Text>
            <Text style={[style.text.caption, style.text.light]}>
              June 21, 2022 at 23.00
            </Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={[
          style.layout.row,
          style.layout.centerBetween,
          style.layout.py16,
          style.layout.px24,
          style.layout.bgSecondary,
        ]}>
        <View
          style={[style.layout.row, style.layout.center, style.layout.gap12]}>
          <IcEthereum width={15} height={24} />
          <Text style={[style.text.h2, style.text.light]}>{item.eth} ETH</Text>
        </View>
        <View>
          <Button
            text="Place a Bid"
            icon="wallet"
            onPress={() => navigation.navigate('BidDetail', {item})}
          />
        </View>
      </View>
      <ModalImage
        visible={showImage}
        image={item.image}
        onClose={() => setShowImage(false)}
      />
    </View>
  );
};

export default DetailNftScreen;

const styles = StyleSheet.create({
  image: {
    width: width - 48,
    height: width - 48,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});
