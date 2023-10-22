import {ImageSourcePropType} from 'react-native';
import {useNavigationProps, PageProps} from './navigation';

type TAuthor = {
  profilPic: ImageSourcePropType;
  username: string;
  nickName: string;
  isVerified: boolean;
};

type TNft = {
  image: ImageSourcePropType;
  name: string;
  author: TAuthor;
  eth: number;
  likes: number;
  date: string;
};

type TTrending = {
  author: TAuthor;
  num: number;
  eth: number;
  stats: string;
};

type TCategori = {
  name: string;
  image: ImageSourcePropType;
};

type TCollection = {
  image: ImageSourcePropType;
  author: TAuthor;
  items: string;
  owners: string;
};

type TStats = {
  author: TAuthor;
  balance: number;
  statsBalance: string;
  stats: string;
  price: string;
  owner: string;
  items: string;
  time: number;
  nftName: string;
  nftImage: ImageSourcePropType;
};

export type {
  useNavigationProps,
  PageProps,
  TNft,
  TTrending,
  TCategori,
  TCollection,
  TStats,
};
