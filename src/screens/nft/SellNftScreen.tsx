import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {style} from '@utils';
import {useNavigationProps} from '@types';
import {Button, Header, Profile} from '@components';
import {dummyCollUser1, dummyCollUser4, dummyNft3} from '@assets/images';

const {width} = Dimensions.get('window');
const SellNft = () => {
  const navigation = useNavigation<useNavigationProps>();

  return (
    <View style={style.layout.page}>
      <Header leading="dark" action={['filter', 'share']} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        contentContainerStyle={[
          style.layout.px24,
          style.layout.py24,
          style.layout.gap16,
        ]}>
        <Image source={dummyNft3} style={styles.image} />
        <View style={style.layout.gap8}>
          <Text style={[style.text.body, style.text.light]}>
            The Invitation
          </Text>
          <Text style={[style.text.h1, style.text.light]}>
            Invitation-My Story
          </Text>
        </View>
        <View
          style={[
            style.layout.row,
            style.layout.centerBetween,
            style.layout.gap24,
          ]}>
          <View style={style.layout.flex1}>
            <Profile
              image={dummyCollUser1}
              sizeImage="round40"
              title="Created by"
              titleStyle="smallCaption"
              titleColor="gray"
              desc="Naufal Abshar"
              descStyle="caption"
              descColor="light"
            />
          </View>
          <View style={style.layout.flex1}>
            <Profile
              image={dummyCollUser4}
              sizeImage="round40"
              title="Owned by"
              titleStyle="smallCaption"
              titleColor="gray"
              desc="You"
              descStyle="caption"
              descColor="light"
            />
          </View>
        </View>
        <Text style={[style.text.caption, style.text.light]}>
          Painting #3, "THE INVITATION" By Naufal Abshar. What exactly is your
          story, ser?
        </Text>
      </ScrollView>
      <View
        style={[
          style.layout.row,
          style.layout.alignCenter,
          style.layout.gap24,
          style.layout.bgSecondary,
          style.layout.px24,
          style.layout.py16,
        ]}>
        <View style={style.layout.flex1}>
          <Button
            text="Edit"
            onPress={() => {}}
            background="bgNone"
            outline="outlineBlue"
            textColor="blue"
          />
        </View>
        <View style={style.layout.flex1}>
          <Button
            text="Sell Items"
            onPress={() => navigation.navigate('SellItem')}
          />
        </View>
      </View>
    </View>
  );
};

export default SellNft;

const styles = StyleSheet.create({
  image: {
    width: width - 48,
    height: width,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});
