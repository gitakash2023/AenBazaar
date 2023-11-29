import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import Register from './Register';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Register');
    }, 3000);
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
