import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BidDetailScreen,
  BidFinishScreen,
  CompleteScreen,
  ConnectWalletScreen,
  DetailCategoriScreen,
  DetailCollectionScreen,
  DetailNftScreen,
  EditProfileScreen,
  HomeScreen,
  OnBoardingScreen,
  ProfileScreen,
  PublishedScreen,
  SearchScreen,
  SellFinishScreen,
  SellItemScreen,
  SellNftScreen,
  SetItemScreen,
  SetPriceScreen,
  SetupProfileScreen,
  StartedScreen,
  StatsScreen,
  UploadScreen,
  WelcomeScreen,
} from '@screens';
import {BottomTab} from '@components';
import {RootStackList} from 'src/types/navigation';

const Stack = createNativeStackNavigator<RootStackList>();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomTab {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'home'}}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{title: 'search'}}
      />
      <Tab.Screen
        name="Stats"
        component={StatsScreen}
        options={{title: 'stats'}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'profile'}}
      />
    </Tab.Navigator>
  );
};

const NavigationApp = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
      <Stack.Screen name="Started" component={StartedScreen} />
      <Stack.Screen name="ConnectWallet" component={ConnectWalletScreen} />
      <Stack.Screen name="SetupProfile" component={SetupProfileScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="MainApp" component={MainApp} />
      <Stack.Screen name="DetailCategori" component={DetailCategoriScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="Upload" component={UploadScreen} />
      <Stack.Screen name="SetItem" component={SetItemScreen} />
      <Stack.Screen name="SetPrice" component={SetPriceScreen} />
      <Stack.Screen name="Complete" component={CompleteScreen} />
      <Stack.Screen name="Published" component={PublishedScreen} />
      <Stack.Screen name="DetailColletion" component={DetailCollectionScreen} />
      <Stack.Screen name="DetailNft" component={DetailNftScreen} />
      <Stack.Screen name="BidDetail" component={BidDetailScreen} />
      <Stack.Screen name="BidFinish" component={BidFinishScreen} />
      <Stack.Screen name="SellNft" component={SellNftScreen} />
      <Stack.Screen name="SellItem" component={SellItemScreen} />
      <Stack.Screen name="SellFinish" component={SellFinishScreen} />
    </Stack.Navigator>
  );
};

export default NavigationApp;
