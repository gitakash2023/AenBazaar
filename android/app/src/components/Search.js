import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text
} from 'react-native';

const Search = ({onSearch}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Call the onSearch prop with the current search query
    onSearch(searchQuery);
  };

  return (
    <>
   <View style={styles.headerTop}>
   <View  style={styles.flipcartImg} >
    <Image
            source={require('../assets/images/flipcartLogo.png')}
            style={styles.flipcart}
          />
    </View>
    <View>
      <Text style={styles.flipcartText} >
        Flipcart
      </Text>
    </View>
   </View>
    <View style={styles.searchContainer}>
    <TouchableOpacity onPress={handleSearch}>
          <Image
            source={require('../assets/images/search.png')}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Search Products..."
        placeholderTextColor="black"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
     
        
      
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerTop:{
    flexDirection: 'row',
    alignItems: 'center',

  },
  flipcartText:{
    fontSize:24,
    marginHorizontal:10,
    fontStyle: 'italic',
    color:"black",
    fontWeight: 'bold',
    

  },
  flipcartImg:{
    marginVertical:10,
    backgroundColor:"gray"
  
  },

  flipcart:{
    width: 100,
    height: 70,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,

    
    backgroundColor: 'gray',
    opacity: 0.6,
    borderRadius:10,
   
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
 
});

export default Search;
