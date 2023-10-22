import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {style} from '@utils';
import {useNavigationProps} from '@types';
import {categories, collectionsList, featuredList, nftList_2} from '@data';
import {
  CategoryCard,
  CollectionCard,
  NftCard,
  SearhBar,
  Spacer,
} from '@components';

const SearchScreen = () => {
  const navigation = useNavigation<useNavigationProps>();
  const [value, setValue] = useState<string>('');
  const [isSearch, setIsSearch] = useState<boolean>(false);

  const handleClear = () => {
    setValue('');
    setIsSearch(false);
  };

  return (
    <ScrollView style={style.layout.bgdark}>
      <Spacer height={62} />
      <View style={[style.layout.px24, style.layout.gap24]}>
        <Text style={[style.text.h1, style.text.white]}>Search</Text>
        <SearhBar
          value={value}
          onChange={text => setValue(text)}
          onClear={handleClear}
          onSubmit={() => setIsSearch(true)}
        />
      </View>
      {isSearch && value ? (
        <View>
          <View style={[style.layout.px24, style.layout.gap16]}>
            <Spacer height={40} />
            <Text style={[style.text.h2, style.text.white]}>Collections</Text>
            <View
              style={[
                style.layout.row,
                style.layout.wrap,
                style.layout.between,
                style.layout.gap16,
              ]}>
              {collectionsList.map((collection, index) => (
                <CollectionCard
                  key={index}
                  collection={collection}
                  onPress={() =>
                    navigation.navigate('DetailColletion', {
                      collection,
                    })
                  }
                />
              ))}
            </View>
          </View>
          <View style={[style.layout.px24, style.layout.gap16]}>
            <Spacer height={40} />
            <Text style={[style.text.h2, style.text.white]}>Items</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={[style.layout.px24, style.layout.gap8]}
              style={styles.scrollContainer}>
              {nftList_2.map((item, index) => (
                <NftCard
                  key={index}
                  item={item}
                  size="medium"
                  onPress={() => navigation.navigate('DetailNft', {item})}
                />
              ))}
            </ScrollView>
          </View>
          <Spacer height={16} />
        </View>
      ) : (
        <View>
          <View style={[style.layout.px24, style.layout.gap16]}>
            <Spacer height={40} />
            <Text style={[style.text.h2, style.text.white]}>Categories</Text>
            <ScrollView
              horizontal
              overScrollMode="never"
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={[style.layout.px24, style.layout.gap8]}
              style={styles.scrollContainer}>
              {categories.map((categori, index) => (
                <CategoryCard
                  key={index}
                  title={categori.name}
                  image={categori.image}
                  onPress={() =>
                    navigation.navigate('DetailCategori', {categori})
                  }
                />
              ))}
            </ScrollView>
          </View>
          <View style={[style.layout.px24, style.layout.gap16]}>
            <Spacer height={40} />
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
                    navigation.navigate('DetailColletion', {
                      collection: featured,
                    })
                  }
                />
              ))}
            </View>
          </View>
          <Spacer height={16} />
        </View>
      )}
    </ScrollView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    marginHorizontal: -24,
  },
});
