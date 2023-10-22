import React, {useRef} from 'react';
import {ScrollView, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {style} from '@utils';
import {BoardLayer} from '@components';
import {useNavigationProps} from '@types';
import {boardingOne, boardingThree, boardingTwo} from '@assets/images';

const {width} = Dimensions.get('window');

const OnBoardingScreen = () => {
  const navigation = useNavigation<useNavigationProps>();
  const scrollViewRef = useRef<ScrollView>(null);

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={style.layout.page}
      pagingEnabled
      scrollEnabled={false}>
      <BoardLayer
        idx={1}
        title={'Discover largest\nNFT marketplace'}
        image={boardingOne}
        onPress={() => scrollViewRef?.current?.scrollTo({x: width})}
      />
      <BoardLayer
        idx={2}
        title={'Start your own\nNFT gallery now'}
        image={boardingTwo}
        onPress={() => scrollViewRef?.current?.scrollTo({x: width * 2})}
      />
      <BoardLayer
        idx={3}
        title={'Discovering the\nworld of crypto art'}
        image={boardingThree}
        onPress={() => navigation.navigate('Started')}
      />
    </ScrollView>
  );
};

export default OnBoardingScreen;
