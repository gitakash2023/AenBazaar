import React from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeFromCart} from '../reducers/cartSlice';
import CustomButton from '../components/CustomButtom';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = item => {
    dispatch(removeFromCart(item));
    Alert.alert('successfully removed from cart');
  };
  const handleBuy = () => {};

  return (
    <View>
      <View>
        <FlatList
          data={cart}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View
              style={{
                backgroundColor: '#D3D3D3',
                borderWidth: 1,
                marginVertical: 10,
                borderRadius: 10,
                borderBottomColor: 'gray',
                borderTopColor: 'gray',
              }}>
              <Text style={{margin: 10}}>{item.title}</Text>
              <Image
                source={{uri: item.image}}
                style={{width: '100%', height: 200, padding: 20}}
              />
              <Text style={{margin: 10, color: 'green'}}>${item.price}</Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  margin: 10,
                }}>
                <TouchableOpacity>
                  <CustomButton
                    title={'Buy now'}
                    bgColor={'black'}
                    textColor={'white'}
                    onPress={() => handleBuy}
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
