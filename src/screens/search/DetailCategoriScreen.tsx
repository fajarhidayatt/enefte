import React, {FC} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {style} from '@utils';
import {PageProps} from '@types';
import {featuredList} from '@data';
import {CollectionCard, Header} from '@components';

const DetailCategoriScreen: FC<PageProps<'DetailCategori'>> = ({
  route,
  navigation,
}) => {
  const {categori} = route.params;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={style.layout.bgdark}>
      <View>
        <Image source={categori.image} style={styles.imageBanner} />
        <View style={styles.headerWrapper}>
          <Header leading="dark" action={['share']} />
        </View>
      </View>
      <View style={[style.layout.px24, style.layout.py24, style.layout.gap32]}>
        <View style={style.layout.gap8}>
          <Text style={[style.text.h1, style.text.white]}>{categori.name}</Text>
          <Text style={[style.text.caption, style.text.gray]}>
            Karafuru is home to 5,555 generative arts where colors reign
            supreme. Leave the drab reality and enter the world of Karafuru by
            Museum of Toys.
          </Text>
        </View>
        <View style={style.layout.gap16}>
          <Text style={[style.text.h2, style.text.white]}>
            Featured Collections
          </Text>
          <View
            style={[
              style.layout.row,
              style.layout.wrap,
              style.layout.between,
              style.layout.gap16,
            ]}>
            {featuredList.map((featured, index) => (
              <CollectionCard
                key={index}
                collection={featured}
                isFeatured
                onPress={() =>
                  navigation.navigate('DetailColletion', {collection: featured})
                }
              />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailCategoriScreen;

const styles = StyleSheet.create({
  imageBanner: {
    width: '100%',
    height: 200,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  headerWrapper: {
    position: 'absolute',
    width: '100%',
  },
});
