import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import Register from './Register';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    // Check if the user is already authenticated (registered)
    const user = auth().currentUser;

    // Simulate a delay (3 seconds) before navigating to the appropriate screen
    setTimeout(() => {
      if (user) {
        // User is already registered, navigate to Home screen
        navigation.navigate('Home');
      } else {
        // User is not registered, navigate to Signup screen
        navigation.navigate('Register');
      }
    }, 2000);
  }, [navigation]);

  return (
    <View>
      <Image
        source={require('../assets/images/splas.png')}
        style={{width: '100%', height: '100%', resizeMode: 'cover'}}
      />
    </View>
  );
};

export default Splash;
