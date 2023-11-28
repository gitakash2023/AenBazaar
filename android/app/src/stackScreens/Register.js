import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Login from './Login';
const Register = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(Login)}>
        <Text> go to login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
