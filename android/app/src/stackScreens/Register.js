import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Login from './Login';
import {create} from 'react-test-renderer';
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
const styles = StyleSheet.create({});
