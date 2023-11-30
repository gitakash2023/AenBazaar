import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

const Search = ({onSearch}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Call the onSearch prop with the current search query
    onSearch(searchQuery);
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.input}
        placeholder="Search Products..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <TouchableOpacity onPress={handleSearch}>
        <Image
          source={require('../assets/images/search.png')}
          style={styles.searchIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    marginVertical: 10,
    borderRadius: 6,
    backgroundColor: 'gray',
    opacity: 0.6,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginLeft: 5,
  },
});

export default Search;
