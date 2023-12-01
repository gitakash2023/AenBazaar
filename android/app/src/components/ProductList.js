import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../api/api';
import {setProducts} from '../reducers/productSlice';
import Search from './Search';
import ProductCard from './ProductCard';

const ProductList = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.product.products);

  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        dispatch(setProducts(data));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = query => {
    setSearchQuery(query);

    // Filter products based on the search query
    const filtered = allProducts.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredProducts(filtered);
  };

  return (
    <View>
      <Search products={allProducts} onSearch={handleSearch} />

      {filteredProducts.length === 0 ? (
        <Text>No results found for "{searchQuery}"</Text>
      ) : (
        <FlatList
          data={filteredProducts}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <ProductCard item={item} />}
        />
      )}
    </View>
  );
};

export default ProductList;
