import React from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';


import {useDispatch} from 'react-redux';
import CustomButton from './CustomButtom';

import Account from '../bottomTabScreens/Account';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { addToCart } from '../reducers/cartSlice';
import { handleBuyNow } from '../utils/PaymentUtil';


const ProductCard = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(item));
    Alert.alert("'Successfully added into cart'")
  };
 
  return (
    <View
      style={{
        backgroundColor: '#D3D3D3',
        borderWidth: 1,
        marginVertical: 10,
        borderRadius: 10,
        borderBottomColor: 'gray',
        borderTopColor: 'gray',
      }}>
      <Image
        source={{uri: item.image}}
        style={{width: '100%', height: 200, padding: 20}}
      />
      <Text style={{paddingHorizontal: 10, color: 'blue'}}>{item.title}</Text>
      <Text style={{paddingHorizontal: 10, color: 'green'}}>${item.price}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          marginVertical: 15,
        }}>
        <TouchableOpacity>
          <CustomButton
            title={'Buy now'}
            textColor={'white'}
            bgColor={'black'}
            onPress={() => handleBuyNow(item)}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <CustomButton
            title={'Add to cart'}
            textColor={'white'}
            bgColor={'green'}
            onPress={handleAddToCart}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;
