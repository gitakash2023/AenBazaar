import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../bottomTabScreens/HomeScreen';
import Categories from '../bottomTabScreens/Categories';
import { useSelector } from 'react-redux';

import Account from '../bottomTabScreens/Account';
import Cart from '../bottomTabScreens/Cart';

const Tab = createBottomTabNavigator();

const Home = () => {
    const cartItems = useSelector((state) => state.cart.items);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconSource;

          if (route.name === 'HomeScreen') {
            iconSource = !focused
              ? require('../assets/images/home.png')
              : require('../assets/images/home_filled.png');
          } else if (route.name === 'Categories') {
            iconSource = !focused
              ? require('../assets/images/category.png')
              : require('../assets/images/categoryf.png');
          }  else if (route.name === 'Account') {
            iconSource = !focused
              ? require('../assets/images/account.png')
              : require('../assets/images/account_filled.png');
          } else if (route.name === 'Cart') {
            iconSource = !focused
              ? require('../assets/images/cart.png')
              : require('../assets/images/cart_filled.png');
          }

          return (
            <Image
              source={iconSource}
              style={{
                width: size,
                height: size,
                // tintColor: focused ? 'darkgrey' : color,
                tintColor: color,
              }}
            />
          );
        },
        tabBarLabel: ({focused, color}) => {
          return null;
        },
      })}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          headerShown: false,
        }}
      />
      {/* <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          headerShown: false,
        }}
      /> */}
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          tabBarBadge: cartItems.length > 0 ? cartItems.length : null,
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
