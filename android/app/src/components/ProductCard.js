import React from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';

import RazorpayCheckout from 'react-native-razorpay';
import {useDispatch} from 'react-redux';
import {addToCart} from '../reducers/cartSlice';
import CustomButton from './CustomButtom';
import {itemDataPost, paymentDataPost} from '../api/paymentDataPost';
import Account from '../bottomTabScreens/Account';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const ProductCard = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(item)); // Dispatch the addToCart action with the item as payload
    Alert.alert('Success', 'Item added to the cart');
    itemDataPost(item);
  };
  const handleBuyNow = async () => {
    try {
      const user = auth().currentUser;
      const options = {
        description: 'Payment for ' + item.title,
        image: item.image,
        currency: 'INR', // currency code
        key: 'rzp_test_PMAXD9CgDWklyL', //  Razorpay API key
        amount: item.price * 100, // Convert to the smallest currency unit (e.g., paisa for INR)
        name: 'AENBAZAR',
        prefill: {
          email: user.email,
          contact: '1234567891',
          name: 'Akash',
        },
        theme: {color: '#F37254'},
      };

      const data = await RazorpayCheckout.open(options);
      Alert.alert('Payment Success:');

      // Handle the success response, update your state or trigger further actions
      await paymentDataPost(options);
      Alert.alert('Payment Success:', 'Payment data added to Firestore');
      navigation.navigate('Account');
    } catch (error) {
      Alert.alert('Payment Error:', error);
    }
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
      <Text style={{paddingHorizontal: 10, color: 'black'}}>{item.title}</Text>
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
            onPress={handleBuyNow}
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
