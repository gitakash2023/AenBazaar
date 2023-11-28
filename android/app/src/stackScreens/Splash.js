import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import Register from './Register';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(Register)}>
        <Text>go to register page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Splash;
