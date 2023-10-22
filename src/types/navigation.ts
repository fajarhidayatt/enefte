import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {TCategori, TCollection, TNft} from '@types';

export type RootStackList = {
  OnBoarding: undefined;
  Started: undefined;
  ConnectWallet: undefined;
  SetupProfile: undefined;
  Welcome: undefined;
  MainApp: undefined;
  Home: undefined;
  DetailCategori: {categori: TCategori};
  EditProfile: undefined;
  Upload: undefined;
  SetItem: undefined;
  SetPrice: undefined;
  Complete: undefined;
  Published: undefined;
  DetailColletion: {collection: TCollection};
  DetailNft: {item: TNft};
  BidDetail: {item: TNft};
  BidFinish: undefined;
  SellNft: undefined;
  SellItem: undefined;
  SellFinish: undefined;
};

export type PageProps<RouteName extends keyof RootStackList = keyof RootStackList> = NativeStackScreenProps<RootStackList, RouteName>;
export type useNavigationProps = NativeStackNavigationProp<RootStackList>;
