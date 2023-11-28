import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {fetchProducts} from '../api/api';

const HomeScreen = () => {
  //   const [products, setProducts] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const productsData = await fetchProducts();
  //         setProducts(productsData);
  //       } catch (error) {
  //         console.error('Error setting products:', error);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  return (
    <View>
      <Text>Home Screen</Text>
      {/* <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View>
            <Text>{item.name}</Text>
          
          </View>
        )}
      /> */}
    </View>
  );
};

export default HomeScreen;
