import React from 'react';
import {Text, View} from 'react-native';
import {style} from '@utils';
import {TTrending} from '@types';
import {IcEthereum} from '@assets/vectors';
import Profile from '../Profile/Profile';

interface CollectionItemProps {
  item: TTrending;
}

const CollectionItem = ({item}: CollectionItemProps) => {
  return (
    <View
      style={[style.layout.row, style.layout.alignCenter, style.layout.gap24]}>
      <View style={style.layout.flex1}>
        <Profile
          image={item.author.profilPic}
          sizeImage="round66"
          isVerified={false}
          num={item.num}
          title={item.author.username}
          titleStyle="body"
          titleColor="white"
          desc={item.author.nickName}
          descStyle="caption"
          descColor="gray"
        />
      </View>
      <View style={[style.layout.alignEnd, style.layout.gap8]}>
        <View
          style={[
            style.layout.row,
            style.layout.alignCenter,
            style.layout.gap8,
          ]}>
          <IcEthereum />
          <Text style={[style.text.button, style.text.white]}>{item.eth}</Text>
        </View>
        <Text style={[style.text.caption, style.text.green]}>{item.stats}</Text>
      </View>
    </View>
  );
};

export default CollectionItem;
