import {TCollection, TTrending} from '@types';

export const trendingList: TTrending[] = [
  {
    author: {
      profilPic: require('src/assets/dummy/user_9.png'),
      username: 'Ghozali Everyday',
      nickName: 'ghozali_everyday',
      isVerified: true,
    },
    num: 1,
    eth: 4.219,
    stats: '21,75%',
  },
  {
    author: {
      profilPic: require('src/assets/dummy/user_10.png'),
      username: 'Venk Sui',
      nickName: 'venk_xi',
      isVerified: true,
    },
    num: 2,
    eth: 2.541,
    stats: '19,25%',
  },
  {
    author: {
      profilPic: require('src/assets/dummy/user_8.png'),
      username: 'Mr. Boss',
      nickName: 'i_am_boss',
      isVerified: true,
    },
    num: 3,
    eth: 2.155,
    stats: '18,00%',
  },
];

export const featuredList: TCollection[] = [
  {
    image: require('src/assets/dummy/collection_banner_1.png'),
    author: {
      profilPic: require('src/assets/dummy/user_1.png'),
      username: 'Dour Darcels',
      nickName: 'dour_darcels',
      isVerified: true,
    },
    items: '10K',
    owners: '12,5K',
  },
  {
    image: require('src/assets/dummy/collection_banner_7.png'),
    author: {
      profilPic: require('src/assets/dummy/user_7.png'),
      username: 'Cyber Brokers',
      nickName: 'cyber_brokss',
      isVerified: true,
    },
    items: '15K',
    owners: '43,8K',
  },
  {
    image: require('src/assets/dummy/collection_banner_2.png'),
    author: {
      profilPic: require('src/assets/dummy/user_2.png'),
      username: 'Bored Ape',
      nickName: 'apee_',
      isVerified: true,
    },
    items: '12,9K',
    owners: '65,5K',
  },
  {
    image: require('src/assets/dummy/collection_banner_4.png'),
    author: {
      profilPic: require('src/assets/dummy/user_4.png'),
      username: 'Wong Ayu',
      nickName: 'wong_ayu',
      isVerified: false,
    },
    items: '1,1K',
    owners: '2,5K',
  },
];

export const collectionsList: TCollection[] = [
  {
    image: require('src/assets/dummy/collection_banner_3.png'),
    author: {
      profilPic: require('src/assets/dummy/user_3.png'),
      username: 'Azuki',
      nickName: 'azuki',
      isVerified: true,
    },
    items: '10K',
    owners: '12,5K',
  },
  {
    image: require('src/assets/dummy/collection_banner_5.png'),
    author: {
      profilPic: require('src/assets/dummy/user_5.png'),
      username: 'Memoriam',
      nickName: '-',
      isVerified: false,
    },
    items: '15K',
    owners: '43,8K',
  },
  {
    image: require('src/assets/dummy/collection_banner_6.png'),
    author: {
      profilPic: require('src/assets/dummy/user_6.png'),
      username: 'Ghozali Everydayy',
      nickName: 'ghozali',
      isVerified: true,
    },
    items: '12,9K',
    owners: '65,5K',
  },
];
