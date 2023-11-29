import React, {useEffect} from 'react';
import {View, Text, Button, FlatList, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../api/api';
import {setProducts} from '../reducers/productSlice';

const HomeScreen = () => {
  // Get the dispatch function from the Redux store
  const dispatch = useDispatch();

  // Select the products from the Redux store state
  const products = useSelector(state => state.product.products);

  // useEffect is used for side effects, such as data fetching
  useEffect(() => {
    // Define a function to fetch products asynchronously
    const fetchData = async () => {
      try {
        // Call the fetchProducts function from the api.js file
        const data = await fetchProducts();

        // Dispatch the setProducts action with the fetched data
        dispatch(setProducts(data));
      } catch (error) {
        // Handle errors, if any
        console.error('Error fetching products:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, [dispatch]); // The useEffect dependency array ensures that the effect runs only when 'dispatch' changes

  return (
    <View>
      <Text>Product Component</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={{marginVertical: 10}}>
            <Image
              source={{uri: item.image}}
              style={{width: '100%', height: 200}}
            />
            <Text>{item.title}</Text>
            <Text> ${item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
