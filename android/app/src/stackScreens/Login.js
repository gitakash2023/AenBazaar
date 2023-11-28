import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Home from './Home';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(Home)}>
        <Text>go toHome page </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
