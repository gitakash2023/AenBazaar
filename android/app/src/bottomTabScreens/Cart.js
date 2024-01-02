import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../reducers/cartSlice';
import CustomButton from '../components/CustomButtom';
import { handleBuyNow } from '../utils/PaymentUtil';

const Cart = () => {
  const cartData = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = item => {
    dispatch(removeFromCart(item));
    Alert.alert('Successfully removed from cart');
  };

  const handleBuy = async (item) => {
    
    await handleBuyNow(item);
  };
  const totalPayment = cartData.reduce((total, item) => total + item.price, 0);

  const handleBuyAll = async () => {
    if (cartData.length === 0) {
      Alert.alert('Cart is empty. Add items to cart before buying.');
      return;
    }

    Alert.alert(
      "Confirm Purchase",
      `Total Payment for All Items: $${totalPayment.toFixed(2)}`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Buy All",
          // onPress: async () => {
          //   for (const item of cartData) {
          //     await handleBuyNow(item);
          //   }
          //   Alert.alert('Payment successful for all items!');
          // },
          onPress: async () => {
            // Pass the entire cartData to handleBuyNow
            await handleBuyNow(cartData);
            Alert.alert('Payment successful for all items!');
          },
        },
      ],
      { cancelable: false }
    );
  };


  return (
    <View>
     <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15}}>
     <Text style={{color:"green"}}>Total: ${totalPayment.toFixed(2)}</Text>
          <TouchableOpacity>
         
            <CustomButton
              title={'Buy All'}
              bgColor={'blue'}
              textColor={'white'}
              onPress={handleBuyAll}
            />
          </TouchableOpacity>
        </View>
      <View>
        <FlatList
          data={cartData}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: '#D3D3D3',
                borderWidth: 1,
                marginVertical: 10,
                borderRadius: 10,
                borderBottomColor: 'gray',
                borderTopColor: 'gray',
              }}
            >
              
              <Image source={{ uri: item.image }} style={{ width: '100%', height: 200, padding: 20}} />
              <Text style={{ margin: 5 ,color:"blue"}}>{item.title}</Text>
              <Text style={{  color: 'green' ,marginLeft:8}}>${item.price}</Text>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                <TouchableOpacity>
                  <CustomButton
                    title={'Buy Now'}
                    bgColor={'black'}
                    textColor={'white'}
                    onPress={() => handleBuy(item)}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <CustomButton
                    title={'Delete'}
                    bgColor={'green'}
                    textColor={'white'}
                    onPress={() => handleRemoveFromCart(item)}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />

       
      </View>
      
    </View>
  );
};

export default Cart;
