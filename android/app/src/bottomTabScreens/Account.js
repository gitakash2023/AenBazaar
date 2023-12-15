

import { View, Text ,Image} from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Profile from '../drawerScreens/Profile';

import Orders from '../drawerScreens/Orders';
import Wishlist from '../drawerScreens/Wishlist';

import Notification from '../drawerScreens/Notification';
import Setting from '../drawerScreens/Setting';

const Drawer = createDrawerNavigator();

const Account = () => {
  return (
    <Drawer.Navigator initialRouteName="Profile"   screenOptions={{
      drawerStyle: {
        backgroundColor: '#fff', // Drawer background color
      },
    }}>

<Drawer.Screen
          name="My Profile"
          component={Profile}
          options={{
            drawerIcon: ({ focused, size, color }) => (
              <Image
                source={focused ? require('../assets/images/myProfileFill.png') : require('../assets/images/myProfile.png')}
                style={{ width: size, height: size, tintColor: color }}
              />
            ),
            drawerActiveTintColor: 'blue', // Color when the item is focused
            drawerInactiveTintColor: 'gray', // Color when the item is not focused
          }}
        />
    
<Drawer.Screen
          name="My Orders"
          component={Orders}
          options={{
            drawerIcon: ({ focused, size, color }) => (
              <Image
                source={focused ? require('../assets/images/orderFill.png') : require('../assets/images/order.png')}
                style={{ width: size, height: size, tintColor: color }}
              />
            ),
            drawerActiveTintColor: 'blue', // Color when the item is focused
            drawerInactiveTintColor: 'gray', // Color when the item is not focused
          }}
        />
        
<Drawer.Screen
          name="Wishlist"
          component={Wishlist}
          options={{
            drawerIcon: ({ focused, size, color }) => (
              <Image
                source={focused ? require('../assets/images/wishFill.png') : require('../assets/images/wish.png')}
                style={{ width: size, height: size, tintColor: color }}
              />
            ),
            drawerActiveTintColor: 'blue', // Color when the item is focused
            drawerInactiveTintColor: 'gray', // Color when the item is not focused
          }}
        />
        
       
<Drawer.Screen
          name="Notifications"
          component={Notification}
          options={{
            drawerIcon: ({ focused, size, color }) => (
              <Image
                source={focused ? require('../assets/images/notification_filled.png') : require('../assets/images/notification.png')}
                style={{ width: size, height: size, tintColor: color }}
              />
            ),
            drawerActiveTintColor: 'blue', // Color when the item is focused
            drawerInactiveTintColor: 'gray', // Color when the item is not focused
          }}
        />
        <Drawer.Screen
          name="Setting"
          component={Setting}
          options={{
            drawerIcon: ({ focused, size, color }) => (
              <Image
                source={focused ? require('../assets/images/settingFill.png') : require('../assets/images/setting.png')}
                style={{ width: size, height: size, tintColor: color }}
              />
            ),
            drawerActiveTintColor: 'blue', // Color when the item is focused
            drawerInactiveTintColor: 'gray', // Color when the item is not focused
          }}
        />
 
   
  </Drawer.Navigator>
  )
}

export default Account


