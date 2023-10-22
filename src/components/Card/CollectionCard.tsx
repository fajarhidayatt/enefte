import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TCollection} from '@types';
import {colors, style} from '@utils';
import Profile from '../Profile/Profile';

interface CollectionCardProps {
  collection: TCollection;
  isFeatured?: boolean;
  onPress: () => void;
}

const {width} = Dimensions.get('window');

const CollectionCard = ({
  collection,
  isFeatured = false,
  onPress,
}: CollectionCardProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Image source={collection.image} style={styles.imageBanner} />
        <View style={[style.layout.center, styles.profilPicWrapper]}>
          <Profile
            image={collection.author.profilPic}
            sizeImage="round44"
            isVerified={collection.author.isVerified}
          />
        </View>
      </View>
      <View style={styles.contentWrapper}>
        <Text style={[style.text.caption, style.text.light, style.text.center]}>
          {collection.author.username}
        </Text>
        {isFeatured ? (
          <View style={[style.layout.row, style.layout.centerBetween]}>
            <View style={[style.layout.alignCenter, style.layout.gap4]}>
              <Text style={[style.text.caption, style.text.gray]}>Items</Text>
              <Text style={[style.text.body, style.text.light]}>
                {collection.items}
              </Text>
            </View>
            <View style={[style.layout.alignCenter, style.layout.gap4]}>
              <Text style={[style.text.caption, style.text.gray]}>Owners</Text>
              <Text style={[style.text.body, style.text.light]}>
                {collection.owners}
              </Text>
            </View>
          </View>
        ) : (
          <Text
            style={[style.text.caption, style.text.blue, style.text.center]}>
            {collection.author.nickName}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CollectionCard;

const styles = StyleSheet.create({
  container: {
    width: width * 0.5 - 32,
    backgroundColor: colors.secondary,
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageBanner: {
    width: '100%',
    height: 46,
    resizeMode: 'cover',
  },
  profilPicWrapper: {
    position: 'absolute',
    bottom: -20,
    left: 0,
    right: 0,
  },

  contentWrapper: {
    paddingTop: 34,
    paddingBottom: 17,
    paddingHorizontal: 12,
    gap: 8,
  },
});
